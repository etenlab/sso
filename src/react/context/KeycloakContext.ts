import * as React from 'react';
import { KeycloakClient } from '../../core';
import { Roarr } from 'roarr';
// import { canUseSymbol } from '../../utilities';
// import type { RenderPromises } from '../ssr';
import { name as pname } from "../../../package.json"
const logger = Roarr.child({package: pname})
export interface KeycloakContextValue {
  client?: KeycloakClient;
  // renderPromises?: RenderPromises;
}

// To make sure KEYCLOAK Client doesn't create more than one React context
// (which can lead to problems like having an KEYCLOAK Client instance added
// in one context, then attempting to retrieve it from another different
// context), a single KEYCLOAK context is created and tracked in global state.
// const contextKey = canUseSymbol
//   ? Symbol.for('__KEYCLOAK_CONTEXT__')
//   : '__KEYCLOAK_CONTEXT__';

export function getKeycloakContext(): React.Context<KeycloakContextValue> {
  let context = (React.createContext as any)['__KEYCLOAK_CONTEXT__'] as React.Context<KeycloakContextValue>;
  logger.info('into context');
  if (!context) {
    logger.info('in context');
    Object.defineProperty(React.createContext, '__KEYCLOAK_CONTEXT__', {
      value: context = React.createContext<KeycloakContextValue>({}),
      enumerable: false,
      writable: false,
      configurable: true,
    });
    context.displayName = 'KeycloakContext';
  }
  return context;
}

export { getKeycloakContext as resetKeycloakContext }
