import type { ParentComponent } from 'solid-js';
import { Navigation } from '../../Components/Navigation';

export const MainLayout: ParentComponent = (props) => {
  return (
    <>
      <h1>Main Layout Test</h1>
      <Navigation />
      {props.children}
    </>
  );
};
