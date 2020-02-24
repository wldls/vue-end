// Jest describe() API 문서: https://jestjs.io/docs/en/api#describename-fn 참고
import { sum } from './math.js';

// describe: 연관된 테스트 케이스를 그룹화 하는 API
describe('math.js', () => {
  // test: 하나의 테스트 케이스를 검증하는 API
  test('10 + 20 = 30', () => {
    const result = sum(10, 20);
    // expect(result).toBe(30); // 결과값이 30일것이라고 예상
    expect(result).not.toBe(30); // 결과값이 30이 아닐것?이라고 예상
  });
});
