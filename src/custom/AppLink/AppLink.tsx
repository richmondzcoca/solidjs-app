import { Link } from '@solidjs/router';
import type { JSXElement, ParentComponent } from 'solid-js';

interface IAppLink {
    children?: JSXElement;
    href: string;
}

export const AppLink: ParentComponent<IAppLink> = (props) => {
  return (
    <>
      <Link href={props.href} >
        {props.children}
      </Link>
    </>
  );
};
