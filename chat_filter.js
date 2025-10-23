/**
 * @param {string} message - 사용자가 입력한 채팅 메시지
 * @returns {string} ***로 필터링된 메시지
 */
export function filterBadWords(message) {
  // 1. 필터링할 욕설 목록 정의
  const badWords = [
    'fuck', 'shit', 'bitch', 'asshole', 'nigger',
    'faggot', '개새', '씨발', '시발', 'ㅅㅂ', '좆', 'ㅈ까', 'ㅈ밥', 'ㅈㅂ', 'ㅈ이',
    '병신', 'ㅂㅅ', 'ㅂ신', '병ㅅ', 'fuckyou', '애미', '니애미', 'ㄴㅇㅁ', '엄마', '느어매'
  ];

  // 2. 정규식으로 단어 경계 무시하고 검색
  const pattern = new RegExp(badWords.join('|'), 'gi');

  // 3. 필터링된 문자열 반환
  return message.replace(pattern, (match) => {
    return '*'.repeat(match.length);
  });
}