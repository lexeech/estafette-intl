# Installation

With [`yarn`](https://yarnpkg.com/):

```
yarn add estafette-intl
```

With [`npm`](https://npmjs.org/):

```
npm install estafette-intl
```

# Getting started

Steps:

- Create internalization
- Create messages
- Use internalization using useIntl

#### Create internalization

```jsx
import { CreateIntl } from 'estafette-intl';

ReactDOM.render(
  <CreateIntl defaultLocale="en" messages={messages}>
    <App />
  </CreateIntl>,
  document.getElementById('root'),
);
```

#### Create messages

```jsx
import { createMessages } from 'estafette-intl';

const messages = createMessages([
  {
    gretting: {
      en: 'Hello, {name}!',
    },
  },
]);
```

#### Use internalization using useIntl

```jsx
import { useIntl } from 'estafette-intl';

const App = () => {
  const { t } = useIntl();

  return <h1>{t('gretting', { name: 'Vladimir Josan' })}</h1>;
};
```

# API

# `CreateIntl`

Internalization creator

#### Props

- `defaultLocale` (String) - it can be simple string, that you will be able to change from `useIntl` using `setLocale`
- `messages` (Object) - `Messages` from `createMessage`

# `createMessage`

function helper, gets array of messages, parses all of them into an object and checks for dublicates

#### Arguments

- `messages` (Array) - `Messages`

# `Messages`

typescript interface

#### Interface

```ts
interface Messages {
  [locale: string]: {
    [lang: string]: string;
  };
}
```

# `useIntl`

hook helper for using internalization

#### Returns

- `t` (Function) - a function that requires `locale` (String) argument and returns by `locale` keyword necessary text
- `locale` (String) - current locale
- `setLocale` (Function) - a function that requires `newLocale` (String) argument and change current locale to the new locale.
