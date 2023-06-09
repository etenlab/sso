"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKeycloakClient = void 0;
// import { invariant } from '../../utilities/globals';
var react_1 = require("react");
var __1 = require("..");
function useKeycloakClient(override) {
    var testcontext = (0, __1.getKeycloakContext)();
    var context = (0, react_1.useContext)(testcontext);
    var client = override || context.client;
    // invariant(
    //   !!client,
    //   'Could not find "client" in the context or passed in as an option. ' +
    //   'Wrap the root component in an <KeycloakProvider>, or pass an KeycloakClient ' +
    //   'instance in via options.',
    // );
    return client;
}
exports.useKeycloakClient = useKeycloakClient;
