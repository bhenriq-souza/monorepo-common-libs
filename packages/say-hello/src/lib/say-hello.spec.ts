import { sayHello } from './say-hello';

describe('sayHello', () => {
  it('should work', () => {
    expect(sayHello()).toEqual('say-hello');
  });
});
