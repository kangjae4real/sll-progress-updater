import axios from 'axios';
import { BASE_URL } from './url';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    Cookie:
      'WMONID=j4bZXe-bNLE; WL_PCID=17636280107039274241920; JSESSIONID=snai2Or4IBUBkWzmQiUfkQhv5MP1lp3czn033rE8GGrUuOvutVVCGqVmCqf1X6Zj.amV1c19kb21haW4vTE1T; main_se=lie; JSESSIONID=QnaU3rr7IR2wfwYfQlG7KHkv24WwIH1tz0XmDefmB3XtsXCUtMg7HeNm5VQFEmO1.amV1c19kb21haW4vbWVtYmVyMTA3; temp_addr=20251126030212_150317418; MEM001_PK=2025112001170; MEM001_ID=612a68126c23643a47f87d4567c90a8eb69fd722368917d9; MEM001_NM=e1bab892fcc344fa77486dc50789ba9edc233d861bdf; MEM001_NM2=; REALNAME_YN=Y; PWD_CHANGE_YN=N; PAUSE_YN=N; TV_PAUSE_YN=N; ADD_PRVC_CLCT_AGRE_YN=Y; memUserId=oriybabc; MEM_NM=%EC%B5%9C%EC%9A%A9%EB%B2%94; MEM_NM2=%EC%B5%9C%EC%9A%A9%EB%B2%94; MEM_ID=oriybabc; MEM_DIV=DIV010; SEOUL_EMAIL_DELYN=Y; MAYOR_ID=%23A06729429; _SSO_Global_Logout_url=get%5Ehttps%3A%2F%2Fwww.seoul.go.kr%2Fmember%2Fuserlogin%2FlogOut.do%24get%5Ehttps%3A%2F%2Fsll.seoul.go.kr%3A443%2F%2Fsso%2Flogout.jsp%24; kalogin=QfA8+OJROryoQQ==$OneID',
  },
});

export default instance;
