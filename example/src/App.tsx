import * as React from 'react';
import { useIntl } from 'estafette-intl';

export const App = () => {
  const { t, locale, setLocale } = useIntl();

  const onChangeLocale = React.useCallback((newLocale) => setLocale(newLocale), []);

  const stylingCurrentLocale = React.useCallback(($locale) => (locale === $locale ? { color: 'blue' } : {}), [locale]);

  return (
    <div>
      <ul>
        <li onClick={() => onChangeLocale('en')} style={stylingCurrentLocale('en')}>
          English
        </li>

        <li onClick={() => onChangeLocale('ro')} style={stylingCurrentLocale('ro')}>
          Romana
        </li>

        <li onClick={() => onChangeLocale('ru')} style={stylingCurrentLocale('ru')}>
          Русский
        </li>
      </ul>

      <h1>{t('greeting', { name: 'Vladimir Josan' })}</h1>
    </div>
  );
};
