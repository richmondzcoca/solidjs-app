import type { Component } from 'solid-js';

import { Route, Routes } from '@solidjs/router';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { MainLayout } from './Layouts/Main';

const App: Component = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path={'/'} component={Home} />
          <Route path={'/about'} component={About} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default App;
