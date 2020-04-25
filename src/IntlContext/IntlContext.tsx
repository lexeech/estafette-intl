import * as React from 'react';
import { Messages } from '../createMessages/createMessages';

interface ContextProps {
  readonly locale: string;
  readonly messages: Messages;
  readonly setLocale: (locale: string) => void;
}

export const IntlContext = React.createContext<ContextProps>({ locale: '', messages: {}, setLocale: () => null });
