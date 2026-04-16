import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';
import * as fs from 'fs';
import * as fsPromises from 'fs/promises';
import * as path from 'path';

jest.mock('fs');
jest.mock('fs/promises');
jest.mock('path');

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const callback = jest.fn();
    const timeout = 1000;
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

    doStuffByTimeout(callback, timeout);

    expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
    expect(setTimeoutSpy).toHaveBeenCalledWith(callback, timeout);

    setTimeoutSpy.mockRestore();
  });

  test('should call callback only after timeout', () => {
    const callback = jest.fn();
    const timeout = 1000;
    doStuffByTimeout(callback, timeout);

    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(timeout);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    const callback = jest.fn();
    const interval = 1000;
    const setIntervalSpy = jest.spyOn(global, 'setInterval');

    doStuffByInterval(callback, interval);

    expect(setIntervalSpy).toHaveBeenCalledTimes(1);
    expect(setIntervalSpy).toHaveBeenCalledWith(callback, interval);

    setIntervalSpy.mockRestore();
  });

  test('should call callback multiple times after multiple intervals', () => {
    const callback = jest.fn();
    const interval = 1000;

    doStuffByInterval(callback, interval);

    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(interval);
    expect(callback).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(interval);
    expect(callback).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(interval);
    expect(callback).toHaveBeenCalledTimes(3);
  });
});

describe('readFileAsynchronously', () => {
  const mockDirname = '/mock/dir';
  const mockPathToFile = 'test.txt';
  const mockFullPath = `${mockDirname}/${mockPathToFile}`;
  const mockFileContent = 'Hello, world!';
  const mockBuffer = Buffer.from(mockFileContent);

  beforeEach(() => {
    (path.join as jest.Mock).mockReturnValue(mockFullPath);
    jest.clearAllMocks();
  });

  test('should call join with pathToFile', async () => {
    (path.join as jest.Mock).mockReturnValue(mockFullPath);
    await readFileAsynchronously(mockPathToFile);

    expect(path.join).toHaveBeenCalledTimes(1);
    expect(path.join).toHaveBeenCalledWith(expect.any(String), mockPathToFile);
  });

  test('should return null if file does not exist', async () => {
    (fs.existsSync as jest.Mock).mockReturnValue(false);

    const result = await readFileAsynchronously(mockPathToFile);

    expect(fs.existsSync).toHaveBeenCalledWith(mockFullPath);
    expect(fsPromises.readFile).not.toHaveBeenCalled();
    expect(result).toBeNull();
  });

  test('should return file content if file exists', async () => {
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    (fsPromises.readFile as jest.Mock).mockResolvedValue(mockBuffer);

    const result = await readFileAsynchronously(mockPathToFile);

    expect(fs.existsSync).toHaveBeenCalledWith(mockFullPath);
    expect(fsPromises.readFile).toHaveBeenCalledWith(mockFullPath);
    expect(result).toBe(mockFileContent);
  });
});
