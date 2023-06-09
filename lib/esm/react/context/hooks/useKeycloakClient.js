// import { invariant } from '../../utilities/globals';
import { useContext } from 'react';
import { getKeycloakContext } from '..';
export function useKeycloakClient(override) {
    var testcontext = getKeycloakContext();
    var context = useContext(testcontext);
    var client = override || context.client;
    // invariant(
    //   !!client,
    //   'Could not find "client" in the context or passed in as an option. ' +
    //   'Wrap the root component in an <KeycloakProvider>, or pass an KeycloakClient ' +
    //   'instance in via options.',
    // );
    return client;
}
