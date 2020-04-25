import * as React from 'react';
import { Message } from '../types';

interface ContextProps {
  readonly locale: string;
  readonly messages: Message;
  readonly setLocale: (locale: string) => void;
}

export const IntlContext = React.createContext<ContextProps>({ locale: '', messages: {}, setLocale: () => null });
