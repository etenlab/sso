import * as React from 'react';
import { KeycloakClient } from '../../core';
export interface KeycloakContextValue {
    client?: KeycloakClient;
}
export declare function getKeycloakContext(): React.Context<KeycloakContextValue>;
export { getKeycloakContext as resetKeycloakContext };
