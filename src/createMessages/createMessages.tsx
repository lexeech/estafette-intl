import { throwError, throwErrorLog } from '../throw';

export interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export function createMessages($messages: Messages[]): Messages {
  let messages = {} as Messages;

  if (!$messages || ($messages && !Array.isArray($messages))) {
    throwError(`createMessages expects array, but got ${typeof $messages}`);
  }

  $messages.forEach((message) => {
    const [messagesKeys, messageKeys] = [Object.keys(messages), Object.keys(message)];

    messageKeys.forEach((messageKey) => {
      if (messagesKeys.includes(messageKey)) {
        throwErrorLog(`createMessages found key "${messageKey}" two or more times`);
      }
    });

    messages = { ...messages, ...message };
  });

  return messages;
}
