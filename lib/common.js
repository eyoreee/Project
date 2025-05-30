// 외부 js 가져오기
// <script src="../lib/common.js"></script>

/*----------------------------------------------------
  랜덤 값 출력
  API 사용 예) 0과 100 사이의 랜덤값 getRandom(100)
------------------------------------------------------*/
function getRandom(n) {
  return Math.floor(Math.random() * n);
}

/*----------------------------------------------------
  범위를 지정한 랜덤 값 출력
  API 사용 예) 5와 8 사이의 랜덤값 getRandomByRange(5,8)
------------------------------------------------------*/
function getRandomByRange(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

/*----------------------------------------------------
  두 자리로 시계 출력
  API 사용 예) zeroString(d.getHour())
------------------------------------------------------*/
function zeroString(n) {
  let str = n;
  if (0 < n && n < 10) str = "0" + n;
  return str;
}

/*----------------------------------------------------
  해당 월의 시작 요일 구하기
  API 사용 예) 2025년 5월 getStartDay(2025,4)
------------------------------------------------------*/
function getStartDay(yy, mm) {
  let d = new Date(yy, mm, 1); // 2025년 5월 1일
  return d.getDay(); // 요일 반환
}

/*----------------------------------------------------
  영어 또는 한국어로 요일을 변환하여 반환
  API 사용 예) convertDay(4, kor) / convertDay(2, eng) 
------------------------------------------------------*/
function covertDay(n, lang) {
  let korArray = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  let engArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let day = lang == "kor" ? korArray[n] : engArray[n];
  return day;
}

/*----------------------------------------------------
  해당 월의 마지막 날 구하기
  API 사용 예) 2025년 5월의 마지막 날 getLastDate(2025,4)
------------------------------------------------------*/
function getLastDate(yy, mm) {
  let d = new Date(yy, mm + 1, 0);
  return d.getDate();
}

/*----------------------------------------------------
  충돌 체크 함수
  API 사용 예) collistionCheck(객체1, 객체2)
------------------------------------------------------*/
function collisionCheck(me, target) {
  // 나에 대한 수치 계산
  let me_x = parseInt(me.style.left); // 나의 시작점
  let me_y = parseInt(me.style.top);
  let me_width = parseInt(me.style.width); // 나의 크기
  let me_height = parseInt(me.style.height);

  let target_x = parseInt(target.style.left); // 상대방 시작점
  let target_y = parseInt(target.style.top);
  let target_width = parseInt(target.style.width); // 상대방 크기
  let target_height = parseInt(target.style.height);

  return !(
    me_x + me_width < target_x || // 내 오른쪽 끝이 상대 x축 시작보다 왼쪽에 있을 때
    me_x > target_x + target_width || // 내 왼쪽 끝이 상대 x축 끝보다 오른쪽에 있을 때
    me_y + me_height < target_y || // 내 아래쪽 끝이 상대 y축 시작보다 위쪽에 있을 때
    me_y > target_y + target_height
  ); // 내 위쪽 끝이 상대 y축 끝보다 아래쪽에 있을 때
}

/*----------------------------------------------------
  충돌 체크 함수 (각 면의 센서 이용)
  API 사용 예) collistionCheckBySensor(센서, 객체)
------------------------------------------------------*/
function collisionCheckBySensor(me, target) {
  const me_x = parseInt(me.senX);
  const me_y = parseInt(me.senY);
  const me_width = parseInt(me.div.style.width);
  const me_height = parseInt(me.div.style.height);

  const target_x = parseInt(target.div.style.left);
  const target_y = parseInt(target.div.style.top);
  const target_width = parseInt(target.div.style.width);
  const target_height = parseInt(target.div.style.height);

  //모든 4가지 조건이 아닌 경우엔 겹치는 영역이 있는 것이므로 충돌임
  //충돌의 경우 반환값은 true
  return !(
    me_x + me_width < target_x || // 내 오른쪽 끝이 상대 x축 시작보다 왼쪽에 있을 때
    me_x > target_x + target_width || // 내 왼쪽 끝이 상대 x축 끝보다 오른쪽에 있을 때
    me_y + me_height < target_y || // 내 아래쪽 끝이 상대 y축 시작보다 위쪽에 있을 때
    me_y > target_y + target_height
  ); // 내 위쪽 끝이 상대 y축 끝보다 아래쪽에 있을 때
}
