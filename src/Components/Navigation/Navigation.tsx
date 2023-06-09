import type { Component } from 'solid-js';
import { AppLink } from '../../Custom/AppLink';

export const Navigation: Component = () => {
  return (
    <>
        <ul>
          <li>
            <AppLink href='/'>Home</AppLink>
          </li>
          <li>
            <AppLink href='/about'>About</AppLink>
          </li>
      </ul>
    </>
  );
};
