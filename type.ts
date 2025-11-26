export type Lecture = {
  weekSeqNo: string;
  duration: string; // Min
};

export type UpdateProgressParams = Lecture & {
  courseNm: string;
};
