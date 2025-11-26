import { updateProgress } from './request';
import type { Lecture } from './type';
import { delay } from './utils';

// NOTE: 모두 완료되었는지 서버에서 응답을 안줌. 바보같이 주석처리 해야 함.
const lectures: Lecture[] = [
  {
    weekSeqNo: '141348',
    duration: '32',
  },
  {
    weekSeqNo: '141349',
    duration: '32',
  },
  {
    weekSeqNo: '141350',
    duration: '30',
  },
  {
    weekSeqNo: '141351',
    duration: '28',
  },
  {
    weekSeqNo: '141352',
    duration: '25',
  },
  {
    weekSeqNo: '141353',
    duration: '27',
  },
  {
    weekSeqNo: '141354',
    duration: '29',
  },
  {
    weekSeqNo: '141355',
    duration: '28',
  },
];

async function main() {
  while (true) {
    for (const [index, { weekSeqNo, duration }] of lectures.entries()) {
      const msg = await updateProgress({
        weekSeqNo,
        duration,
      });

      console.log(`Index: ${index}, Lecture: ${weekSeqNo}, Msg: ${msg}`);

      await delay(2000);
    }
  }
}

main();
