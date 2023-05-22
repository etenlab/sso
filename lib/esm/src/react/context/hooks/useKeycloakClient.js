// import { invariant } from '../../utilities/globals';
import { useContext } from 'react';
import { getKeycloakContext } from '..';
import { name as pname } from "../../../../package.json";
import { Roarr } from 'roarr';
var logger = Roarr.child({ package: pname });
export function useKeycloakClient(override) {
    var testcontext = getKeycloakContext();
    logger.info('testcontext');
    logger.info(JSON.stringify(testcontext));
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
