import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const HelloWorld = () => (<div>Hello World</div>);

const render = (Component) => ReactDOM.render(
    <AppContainer>
        <Component />
    </AppContainer>,
    document.getElementById("app"));

render(HelloWorld);
if (module.hot) {
    module.hot.accept('.', () => {
      render(HelloWorld);
    });
  }