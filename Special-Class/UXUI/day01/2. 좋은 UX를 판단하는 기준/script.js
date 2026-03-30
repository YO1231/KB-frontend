const loginBtn = document.getElementById('loginBtn');
const errorBox = document.getElementById('errorBox');

const userId = document.getElementById('userId').value;
const userPw = document.getElementById('userPw').value;

const validId = 'admin';
const validPw = '1234';

// 메시지 초기화 함수
// 로그인 시도 전에 기존 메시지를 모두 숨기고 초기화
function resetMessages() {
  // 메시지 영역 숨기기
  errorBox.classList.add('hidden');
  successBox.classList.add('hidden');
  helperLink.classList.add('hidden');

  // 메시지 내용 초기화
  errorBox.textContent = '';
  successBox.textContent = '';
}

loginBtn.addEventListener('click', () => {
  if (userPw !== validPw) {
    errorBox.textContent = '비밀번호가 올바르지 않습니다.\n다시 입력해주세요.';
    errorBox.classList.remove('hidden');
  }
});

loginBtn.addEventListener('click', () => {
  successBox.textContent = '로그인에 성공하였습니다.';
  successBox.classList.remove('hidden');
});
