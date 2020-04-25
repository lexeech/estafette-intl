import * as React from 'react';
import { useIntl } from 'estafette-intl';

export const App = () => {
  const { t } = useIntl();

  return (
    <div>
      <h1>{t('greeting', { name: 'Vladimir Josan' })}</h1>
    </div>
  );
};
