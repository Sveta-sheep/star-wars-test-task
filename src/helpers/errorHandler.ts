import axios, { AxiosError } from 'axios';
import { showToast } from 'helpers/showToast';
import { AnyObject } from 'types';

const getErrorObjectMessages = (error?: AnyObject) => {
  if (!error) return '';
  return Object.keys(error)
    .map((errKey) => error[errKey])
    .join('\r\n');
};

export const axiosErrorHandler = <T>(
  error: unknown,
  axiosCallback: (error: AxiosError<T>) => void,
  callback?: (error: unknown) => void
) => {
  if (axios.isAxiosError(error)) axiosCallback(error as AxiosError<T>);
  else callback?.(error);
};

export const errorHandler = (error: unknown) =>
  axiosErrorHandler<{ message: string | AnyObject; detail: string }>(error, (err) => {
    const { message = '', detail = '' } = err.response?.data || {};

    const errorMessage = (typeof message === 'string' ? message : getErrorObjectMessages(message)) || err.message;
    showToast(errorMessage || detail, 'error');
  });
