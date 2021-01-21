import Calculator from '../src/Calculator';

test('adds 1 + 2 to equal 3', () => {
    let calculator = new Calculator();
  expect(calculator.sum(1, 2)).toBe(3);
});