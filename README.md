This project is built upon the [Create React App](https://facebook.github.io/create-react-app/) with
customizations to enable scalability.

# 1. Use TypeScript

## TypeScript flag

```bash
yarn create react-app react-minimal-boilerplate --typescript
```

## Lint

### Install VSCode TSLint extension

[VSCode TSLint extension by Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

### Add It to Project

In CRA's `tsconfig.json`

```json
{
  ...,

  "plugins": [
      {
        "name": "typescript-tslint-plugin"
      }
    ],

  ...
}
```

# 2. Use SASS and CSS modules

## SASS support

```bash
yarn add node-sass
```

## CSS modules

### Style Files Folder Structure

```bash
src
  |- styles-global
  |   |- global.scss
  |     ...
  |- modules
      |- App
          |- App.module.scss
      ...
```

### Using modular CSS

#### 1. Import Styling Rules
Import the styles from the SASS file as `styles` in the components' tsx file:

```js
// .../App/index.tsx

import styles from './App.module.scss';
```

#### 2. Use Imported Styles

The CSS classes defined in the imported style sheet are accssible as properties of the styles object

```tsx
// .../App/index.tsx

import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
...
```

As a result, the CSS classes in the final markup are prefixed with the
enclosing folder name together with a short hash string, which avoids
any CSS class name conflicts.

Inspect the markup in Chrome DevTool:
```html
<div class="App_App__yuWLK">
  <header class="App_AppHeader__KpczK">
  ...
  </header>
</div>
```

# 3. Restructure for Scaling

## Assets Folder

Organize media assets into an `assets` folder.

```bash
src
  |- assets
  |   |- logo.svg
  |   ...
  ...
```

When using them, improt them as a JS module.

```js
// .../App/index.tsx

import logo from '../../assets/logo.svg';
...

class App extends Component {
  render() {
    return (
      ...
      <img
          src={logo}
          className={styles.AppLogo}
          alt="logo"
        />
...
``` 

## Modularization
Each component's implementation, styling, and testing files are grouped
under its own folder under `modules` , including the `App` component.
Only `index.tsx` is kept directly under the `src` folder.

```bash
src
  |- modules
  |   |- Common
  |   |   |- ...
  |   |
  |   |- App
  |   |   |- index.tsx
  |   |   |- App.module.scss
  |   |   |- App.test.tsx
  |   |
  |   |- AnotherComponent
  |   |   |- index.tsx
  |   |   |- AnotherComponentpp.module.scss
  |   |   |- AnotherComponent.test.tsx
  |   |
  |   ...
  |
  |- index.tsx
  ...
```

When using Redux and Saga, the structure can be further modularized

```bash
src
  |- modules
  |   |- ModuleA
  |   |   |- Components
  |   |   |   |- ModuleASpecificComponentA
  |   |   |   |   |- index.tsx
  |   |   |   |   |- ModuleASpecificComponent.scss
  |   |   |   |   |- ModuleASpecificComponent.test.tsx
  |   |   |   |
  |   |   |   ...
  |   |   |
  |   |   |- index.tsx (exports ModuleA, reducers, sagas)
  |   |   |- ModuleA.test.tsx
  |   |   |- ModuleA.module.scss
  |   |   |- redux-saga
  |   |       |- actions.ts
  |   |       |- reducers.ts
  |   |       |- sagas.ts
  |   |       |- sagas.test.ts
  |   |
  |   ...
  |
  |- index.tsx (inits redux, saga as well as renders App)
  |- rootReducer.ts (imports and combines module reducers)
  |- rootSaga.ts (imports and yield all module sagas)
  ...
```

# 4. Enhance Test

## Add enzyme

To test React components, add `enzyme`, its react adapter, and type definitions.

```bash
yarn add enzyme @types/enzyme react-test-renderer
```

```bash
yarn add enzyme-adapter-react-16 @types/enzyme-adapter-react-16
```

Add `jest-enzyme` to use readable matchers.

```bash
yarn add jest-enzyme
```

## Setup Test

Add a `setupTest.js` file directly under the `src`

```bash
src
  |- ...
  |- setupTest.js
  ...
```

Add the `enzyme` setup in it.

```js
// src/setupTest.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

// Using TypeScript with Babel, all files need to have at least one export,
// otherwise the transpilation will throw an error
export default undefined;
```

Any global mock for tests can also go into the `setupTest.js` 

```js
// src/setupTest.js
...

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

...
```

## Test React Components

An example to test the App component with `enzyme`'s shallow rendering
and `jest-enzyme`'s readable matcher `toContainReact`

```tsx
// App/App.test.tsx
import { shallow } from 'enzyme';
import React from 'react';
import App from '.';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains a welcome message', () => {
    const wrapper = shallow(<App />);
    const welcome = <h2>Welcome to React</h2>;
    expect(wrapper).toContainReact(welcome);
  });

});

```

