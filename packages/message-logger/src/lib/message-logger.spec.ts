import { messageLogging } from './message-logger';

describe('messageLogging', () => {
  it('should work', () => {
    expect(messageLogging()).toEqual('message-logger');
  });
});
