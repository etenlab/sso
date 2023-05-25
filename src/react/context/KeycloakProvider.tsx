// import { invariant } from '../../utilities/globals';

import * as React from 'react';

import { KeycloakClient } from '../../core';
import { getKeycloakContext } from './KeycloakContext';

export interface KeycloakProviderProps {
  client: KeycloakClient;
  children: React.ReactNode | React.ReactNode[] | null;
}

export const KeycloakProvider: React.FC<KeycloakProviderProps> = ({
  client,
  children
}) => {
  const KeycloakContext = getKeycloakContext();
  return (
    <KeycloakContext.Consumer>
      {(context: any = {}) => {
        if (client && context.client !== client) {
          context = Object.assign({}, context, { client });
        }

        // invariant(
        //   context.client,
        //   'KeycloakProvider was not passed a client instance. Make ' +
        //     'sure you pass in your client via the "client" prop.'
        // );

        return (
          <KeycloakContext.Provider value={context}>
            {children}
          </KeycloakContext.Provider>
        );
      }}
    </KeycloakContext.Consumer>
  );
};
