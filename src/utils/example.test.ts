import sum from './example';

test('sum', (): void => {
  expect(sum([1, 2])).toBe(3);
});
