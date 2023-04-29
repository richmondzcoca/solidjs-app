import type { ParentComponent } from 'solid-js';
import { Navigation } from '../../Components/Navigation';

export const MainLayout: ParentComponent = (props) => {
  return (
    <>
      <h1>Main Layout</h1>
      <Navigation />
      {props.children}
    </>
  );
};
