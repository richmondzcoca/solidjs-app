import { Component, lazy } from 'solid-js';
import { Route, Routes } from '@solidjs/router';
import { MainLayout } from './Layouts/Main';

const Home = lazy(() => import('./Pages/Home/Home'));
const Auth = lazy(() => import('./Pages/Auth/Auth'));

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
