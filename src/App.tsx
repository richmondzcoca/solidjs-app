import type { Component } from 'solid-js';

import { Route, Routes } from '@solidjs/router';
import { Home } from './Pages/Home';
import { Auth } from './Pages/Auth';
import { MainLayout } from './Layouts/Main';

const App: Component = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path={'/'} component={Home} />
          <Route path={'/auth'} component={Auth} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default App;
