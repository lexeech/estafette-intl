import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useIntl } from '../useIntl/useIntl';
import { CreateIntl } from '../CreateIntl/CreateIntl';
import { createMessages } from '../createMessages/createMessages';

const Component: React.FC = () => {
  const { t, locale, setLocale } = useIntl();

  return (
    <div>
      locale: {locale}
      <span>{t('testVariable')}</span>
      <button onClick={() => setLocale('ro')}>change locale</button>
    </div>
  );
};

describe('CreateIntl()', () => {
  const messages = createMessages([
    { testVariable: { en: 'test the createMessages function', ro: 'test the createMessages function [ro version]' } },
  ]);

  it('changes defaultLocale reactively by calling internal function', () => {
    const { getByText } = render(
      <CreateIntl defaultLocale="en" messages={messages}>
        <Component />
      </CreateIntl>,
    );

    fireEvent.click(getByText('change locale'));

    expect(getByText('locale: ro')).toBeTruthy();
  });

  it('changes defaultLocale reactively by calling external function', () => {
    const SecondComponent: React.FC = () => {
      const [locale, setLocale] = React.useState<string>('ro');

      return (
        <CreateIntl defaultLocale={locale} messages={messages}>
          <button onClick={() => setLocale('en')}>change external locale</button>

          <Component />
        </CreateIntl>
      );
    };

    const { getByText } = render(<SecondComponent />);

    fireEvent.click(getByText('change external locale'));

    expect(getByText('locale: en')).toBeTruthy();
  });
});
