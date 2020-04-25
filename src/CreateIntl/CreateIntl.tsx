import * as React from 'react';
import { IntlContext } from '../IntlContext/IntlContext';
import { Messages } from '../createMessages/createMessages';

interface Props {
  defaultLocale: string;
  messages: Messages;
}

export const CreateIntl: React.FC<Props> = ({ defaultLocale, messages, children }) => {
  const [locale, setLocale] = React.useState<string>('');

  React.useEffect(() => {
    const onChangeLocale = (): void => setLocale(defaultLocale);

    onChangeLocale();
  }, [defaultLocale]);

  return <IntlContext.Provider value={{ locale, messages, setLocale }}>{children}</IntlContext.Provider>;
};
