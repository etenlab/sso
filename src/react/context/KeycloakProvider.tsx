// import { invariant } from '../../utilities/globals';

import * as React from 'react';

import { KeycloakClient } from '../../core';
import { getKeycloakContext } from './KeycloakContext';
import { name as pname } from "../../../package.json"
import { Roarr } from 'roarr';
const logger = Roarr.child({package: pname})


export interface KeycloakProviderProps {
  client: KeycloakClient;
  children: React.ReactNode | React.ReactNode[] | null;
}

export const KeycloakProvider: React.FC<KeycloakProviderProps> = ({
  client,
  children
}) => {
  logger.info('Keycloakclient');
  logger.info(JSON.stringify(client));
  const KeycloakContext = getKeycloakContext();
  logger.info('KeycloakContext');
  logger.info(JSON.stringify(KeycloakContext));
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
