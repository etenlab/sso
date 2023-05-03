// import { invariant } from '../../utilities/globals';
import { useContext } from 'react';
import { KeycloakClient } from '../../../core';
import { getKeycloakContext } from '..';

export function useKeycloakClient(
  override?: KeycloakClient,
): KeycloakClient {
  const testcontext = getKeycloakContext();
  console.log('testcontext');
  console.log(testcontext);
  const context = useContext(testcontext);
  const client = override || context.client;
  // invariant(
  //   !!client,
  //   'Could not find "client" in the context or passed in as an option. ' +
  //   'Wrap the root component in an <KeycloakProvider>, or pass an KeycloakClient ' +
  //   'instance in via options.',
  // );

  return client!;
}
