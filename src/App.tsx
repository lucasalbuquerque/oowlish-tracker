import React from 'react';
import ThemeConfig from './theme';

import Router from "./routes";

function App(): JSX.Element {
  return (
     <ThemeConfig>
      <Router />
    </ThemeConfig>
  );
}

export default App;
