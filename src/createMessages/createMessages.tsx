import { throwError } from '../throw';

export interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export function createMessages($messages: Messages[]): Messages {
  let messages = {} as Messages;

  if (!$messages || ($messages && !Array.isArray($messages))) {
    throwError(`expect array, but got ${typeof $messages}`);
  }

  $messages.forEach((message) => {
    messages = { ...messages, ...message };
  });

  return messages;
}
