// ---------------------------------------------------------------------
// Firebase 설정 - Firebase 콘솔(console.firebase.google.com)에서 프로젝트를
// 만드신 후, 프로젝트 설정 > 일반 > "내 앱" > 웹 앱 등록에서 나오는 값으로
// 아래를 교체해주세요. (이 값들은 비밀값이 아니라 공개되어도 되는 값입니다 -
// 실제 보안은 Firestore 규칙과 로그인 여부로 처리됩니다.)
// ---------------------------------------------------------------------
const firebaseConfig = {
    apiKey: "REPLACE_ME",
    authDomain: "REPLACE_ME.firebaseapp.com",
    projectId: "REPLACE_ME",
    storageBucket: "REPLACE_ME.appspot.com",
    messagingSenderId: "REPLACE_ME",
    appId: "REPLACE_ME",
    measurementId: "REPLACE_ME"  // Analytics용 - 없어도 무방 (Auth/Firestore엔 안 쓰임)
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
