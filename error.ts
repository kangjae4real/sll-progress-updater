import { isAxiosError as originIsAxiosError } from 'axios';

export const isAxiosError = (error: unknown) => {
  if (originIsAxiosError(error)) {
    console.error('요청 실패:', error.response?.status, error.response?.data);
    return;
  }

  console.error('알 수 없는 오류:', error);
};
