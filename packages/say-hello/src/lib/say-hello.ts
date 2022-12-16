import { messageLogger } from '@bhenriq-souza/message-logger'

export function sayHello(name: string): void {
  messageLogger(`Hello, ${name} 123`)
};
