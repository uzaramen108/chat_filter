/**
 * @param {string} message - 사용자가 입력한 채팅 메시지
 * @returns {string} ***로 필터링된 메시지
 */
export function filterBadWords(message) {
  // 욕설 목록 정의
  const badWords = [
    'fuck', 'fuckyou', 'shit', 'bitch', 'asshole', 'nigger', 'faggot',
    '개새', '느금', 'ㄴㄱㅁ', 'ㄴ금마', '니애미', 'ㄴㅇㅁ', '느그',
    '병신', '병ㅅ', 'ㅂㅅ', 'ㅂ신', 'ㅅㅂ', '새끼', 'ㅅㄲ', '시발', '씨발', 'ㅅ발',
    '애미', '애비', '어머니', '엄마', '아버지', '좆', 'ㅈ까', 'ㅈ밥', 'ㅈㅂ', 'ㅈ이', 'ㅄ', '씹', 'ㅗㅗ'
  ];

  // 1️⃣ 전처리된 문자열 (욕설 탐지용)
  const cleaned = message
    .toLowerCase()
    .replace(/[^ㄱ-ㅎ가-힣a-z0-9]/g, ''); // 띄어쓰기, 특수문자 제거 (탐지용)

  // 2️⃣ 욕설 포함 여부 확인
  const badPattern = new RegExp(badWords.join('|'), 'gi');
  if (!badPattern.test(cleaned)) {
    return message; // 욕설이 없으면 그대로 반환
  }

  // 3️⃣ 욕설이 탐지된 경우 — 원본 문자열 기준으로 별표 처리
  let filtered = message;
  for (const bad of badWords) {
    // 욕설이 중간에 특수문자나 숫자 등으로 끼어있는 경우도 탐지
    const flexible = bad
      .split('')
      .map(ch => `${ch}[\\s0-9!@#\\$%^&*()_\\-+=~]*`) // 각 글자 사이에 숫자/특수문자 허용
      .join('');
    const reg = new RegExp(flexible, 'gi');
    filtered = filtered.replace(reg, match => '*'.repeat(match.length));
  }

  return filtered;
}
