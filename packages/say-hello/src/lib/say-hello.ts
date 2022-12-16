import { messageLogger } from '@bhenriq-souza/message-logger'

export function sayHello(name: string, title: string): void {
  messageLogger(`Hello, ${title} ${name}`)
};
