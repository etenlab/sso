import * as React from 'react';
// To make sure KEYCLOAK Client doesn't create more than one React context
// (which can lead to problems like having an KEYCLOAK Client instance added
// in one context, then attempting to retrieve it from another different
// context), a single KEYCLOAK context is created and tracked in global state.
// const contextKey = canUseSymbol
//   ? Symbol.for('__KEYCLOAK_CONTEXT__')
//   : '__KEYCLOAK_CONTEXT__';
export function getKeycloakContext() {
    var context = React.createContext['__KEYCLOAK_CONTEXT__'];
    if (!context) {
        Object.defineProperty(React.createContext, '__KEYCLOAK_CONTEXT__', {
            value: context = React.createContext({}),
            enumerable: false,
            writable: false,
            configurable: true,
        });
        context.displayName = 'KeycloakContext';
    }
    return context;
}
export { getKeycloakContext as resetKeycloakContext };
