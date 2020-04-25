import * as React from 'react';
import { render } from 'react-dom';
import { CreateIntl } from 'estafette-intl';

import { messages } from 'locales';
import { App } from 'App';

render(
  <CreateIntl defaultLocale="en" messages={messages}>
    <App />
  </CreateIntl>,
  document.getElementById('root'),
);
