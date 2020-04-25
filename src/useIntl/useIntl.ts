import * as React from 'react';
import { IntlContext } from '../IntlContext/IntlContext';

import { throwErrorLog } from '../throw';

const replaceParams = (message: string, fromParam: string, toParam: string): string => {
  let $message = `${message}`;

  if (($message.match(`{${fromParam}}`) || []).length !== 0) {
    $message = $message.replace(`{${fromParam}}`, toParam);

    return replaceParams($message, fromParam, toParam);
  }

  return $message;
};

export const useIntl = () => {
  const { locale, messages, setLocale } = React.useContext(IntlContext);

  const t = (key: string, params: { [key: string]: string }): string => {
    if (locale) {
      if (!messages[key] || (messages[key] && Object.keys(messages[key]).length === 0)) {
        throwErrorLog(`Translation '${key}' not found.`);

        return key;
      }

      if (messages[key] && !messages[key][locale]) {
        throwErrorLog(`Translation '${key}' for locale '${locale}' not found.`);

        const firstLocale = Object.keys(messages[key])[0];

        return messages[key][firstLocale];
      }

      let message = messages[key][locale];

      if (params) {
        Object.keys(params).forEach((param) => {
          message = replaceParams(message, param, params[param]);
        });
      }

      return message;
    }

    return key;
  };

  return { t, locale, setLocale };
};
