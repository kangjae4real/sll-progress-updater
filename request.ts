import instance from './axios';
import { UPDATE_PROGRESS_URL } from './url';
import { isAxiosError } from './error';
import type { UpdateProgressParams } from './type';

const defaultFormPayload = {
  course_attend_log_no: '1',
  progress_check_gubun: 'PROGRESSCHECKGUBUN_T',
  review: 'N',
  course_seq: '1',
  course_nm: '과일상회 Toon 직장 내 4대 폭력 예방교육',
  simin_yn: 'N',
  attend_ratio: '100',
};

export const updateProgress = async ({ weekSeqNo, duration }: UpdateProgressParams) => {
  try {
    const response = await instance.postForm(UPDATE_PROGRESS_URL, {
      ...defaultFormPayload,
      weekseq_no: weekSeqNo,
      study_time: duration,
      basic_time: duration,
      play_time: String(parseInt(duration) * 60),
    });
    return response.data?.msg;
  } catch (error) {
    isAxiosError(error);
  }
};
