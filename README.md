#[Kuali-UI](https://kualico.github.io/kuali-ui/)
[npm package](https://www.npmjs.com/package/kuali-ui)

Kuali-UI is a customized version of Material-UI, which is a set of [React](http://facebook.github.io/react/) components that implement
[Google's Material Design](https://www.google.com/design/spec/material-design/introduction.html)
specification.

Check out our [documentation site](https://kualico.github.io/kuali-ui/) for live examples.
It's still a work in progress, but hopefully you can see where we're headed.

## Installation

Kuali-UI is available as an [npm package](https://www.npmjs.com/package/kuali-ui).

**Stable channel**
```sh
npm install kuali-ui
```

### React-Tap-Event-Plugin

Some components use
[react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin) to
listen for touch events because onClick is not fast enough
_This dependency is temporary and will eventually go away._ Until then,
be sure to inject this plugin at the start of your app.

```js
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
```

## Usage

Kuali-UI components require a theme to be provided. The quickest way to get up and running is by using the `MuiThemeProvider` to inject the theme into your application context. Following that, you can to use any of the components as demonstrated in the documentation.

Here is a quick example to get you started:

**./App.js**
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'kuali-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

**./MyAwesomeReactComponent.js**
```jsx
import React from 'react';
import RaisedButton from 'kuali-ui/RaisedButton';

const MyAwesomeReactComponent = () => (
  <RaisedButton label="Default" />
);

export default MyAwesomeReactComponent;
```

Please refer to each component's documentation page to see how they should be imported.

## License
This project is licensed under the terms of the
[MIT license](https://github.com/KualiCo/kuali-ui/blob/master/LICENSE)
