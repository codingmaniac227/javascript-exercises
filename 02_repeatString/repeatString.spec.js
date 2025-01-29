const repeatString = require('./repeatString')

describe('repeatString', () => {
  test('repeats the string', () => {
    expect(repeatString('hey', 3)).toEqual('heyheyhey');  // Passes
  });
  test('repeats the string many times', () => {
    expect(repeatString('hello', 10)).toEqual('hellohellohellohellohellohellohellohellohellohello');  // Passes
  });
  test('repeats the string 1 time', () => {
    expect(repeatString('hi', 1)).toEqual('hi');  // Passes
  });
  test('repeats the string 0 times', () => {
    expect(repeatString('bye', 0)).toEqual('');  // Passes
  });
  test('returns ERROR with negative numbers', () => {
    expect(repeatString('goodbye', -1)).toEqual('ERROR');  // Passes
  });
  test('repeats the string a random amount of times', function () {
    const number = Math.floor(Math.random() * 1000)
    expect(repeatString('odin', number).match(/((odin))/g).length).toEqual(number);  // Passes
  });
  test('works with blank strings', () => {
    expect(repeatString('', 10)).toEqual('');  // Passes
  });
});
