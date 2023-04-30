import type { ParentComponent } from 'solid-js';
import { Header } from '../../Components/Header';
import { Navigation } from '../../Components/Navigation';

export const MainLayout: ParentComponent = (props) => {
  return (
    <>
      <Header />
      {/* <Navigation /> */}
      {props.children}
    </>
  );
};
