import * as React from 'react';
import { KeycloakClient } from '../core';
export interface KeycloakProviderProps {
    client: KeycloakClient;
    children: React.ReactNode | React.ReactNode[] | null;
}
export declare const KeycloakProvider: React.FC<KeycloakProviderProps>;
