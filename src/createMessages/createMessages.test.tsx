import * as React from 'react';
import { render } from '@testing-library/react';
import { useIntl } from '../useIntl/useIntl';
import { CreateIntl } from '../CreateIntl/CreateIntl';
import { createMessages } from './createMessages';

const Component: React.FC = () => {
  const { t } = useIntl();

  return <span>{t('testVariable')}</span>;
};

describe('createMessages()', () => {
  const messages = createMessages([{ testVariable: { en: 'test the createMessages function' } }]);

  it('creates messages and useIntl works with them correctly', () => {
    const { getByText } = render(
      <CreateIntl defaultLocale="en" messages={messages}>
        <Component />
      </CreateIntl>,
    );

    expect(getByText('test the createMessages function')).toBeTruthy();
  });
});
