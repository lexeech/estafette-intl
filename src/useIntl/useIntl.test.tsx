import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CreateIntl } from '../CreateIntl/CreateIntl';
import { createMessages } from '../createMessages/createMessages';
import { useIntl } from './useIntl';

const Component: React.FC = () => {
  const { t, locale, setLocale } = useIntl();

  return (
    <div>
      <span>locale: {locale}</span>

      <button onClick={() => setLocale('ro')}>set romanian language</button>

      <span>{t('testVariable')}</span>
    </div>
  );
};

describe('useIntl()', () => {
  const messages = createMessages([{ testVariable: { en: 'test intl in english', ro: 'test intl in romanian' } }]);

  it('returns message correctly', () => {
    const { getByText } = render(
      <CreateIntl defaultLocale="en" messages={messages}>
        <Component />
      </CreateIntl>,
    );

    expect(getByText('test intl in english')).toBeTruthy();
  });

  it('returns locale correctly', () => {
    const { getByText } = render(
      <CreateIntl defaultLocale="ro" messages={messages}>
        <Component />
      </CreateIntl>,
    );

    expect(getByText('locale: ro')).toBeTruthy();
    expect(getByText('test intl in romanian')).toBeTruthy();
  });

  it('changes locale correctly', () => {
    const { getByText } = render(
      <CreateIntl defaultLocale="en" messages={messages}>
        <Component />
      </CreateIntl>,
    );

    fireEvent.click(getByText('set romanian language'));

    expect(getByText('locale: ro')).toBeTruthy();
  });
});
