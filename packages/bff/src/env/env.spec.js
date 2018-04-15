require('dotenv');

const { env } = require('./env');

jest.mock('dotenv', () => ({
  config: () => ({ parsed: { hello: 'world' } }),
}));

describe('when asking for an unknown key', () => {
  it('should return undefined', () => {
    expect(env('foo')).toBeUndefined();
  });
});

describe('when asking for a known key', () => {
  it('should return the corresponding environment value', () => {
    expect(env('hello')).toEqual('world');
  });
});
