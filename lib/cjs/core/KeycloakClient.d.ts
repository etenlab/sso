export type KeycloakClientOptions = {
    uri: string;
    realm: string;
    clientId: string;
    clientSecret: string;
};
export type LoginData = {
    username: string;
    password: string;
};
export type RegisterData = {
    username: string;
    password: string;
    email: string;
};
export declare class KeycloakClient {
    uri: string;
    realm: string;
    clientId: string;
    clientSecret: string;
    constructor(options: KeycloakClientOptions);
    getToken(): Promise<any>;
    login(user: LoginData): Promise<any>;
    register(user: RegisterData): Promise<any>;
}
