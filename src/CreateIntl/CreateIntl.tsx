import * as React from 'react';
import { IntlContext } from 'IntlContext/IntlContext';
import { Message } from '../types';

export const CreateIntl: React.FC<{ defaultLocale: string; messages: Message }> = ({
  defaultLocale,
  messages,
  children,
}) => {
  const [locale, setLocale] = React.useState<string>('');

  React.useEffect(() => {
    const onChangeLocale = (): void => setLocale(defaultLocale);

    onChangeLocale();
  }, [defaultLocale]);

  return <IntlContext.Provider value={{ locale, messages, setLocale }}>{children}</IntlContext.Provider>;
};
