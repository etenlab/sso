import axios from 'axios';
import * as querystring from 'qs';

export type KeycloakClientOptions = {
  uri: string,
  realm: string,
  clientId: string,
  clientSecret: string,
};

export type LoginData = {
  username: string,
  password: string,
}

export type RegisterData = {
  username: string,
  password: string,
  email: string,
}


export class KeycloakClient {
  public uri: string;
  public realm: string;
  public clientId: string;
  public clientSecret: string;

  constructor(options: KeycloakClientOptions){
    const { 
      uri,
      realm,
      clientId,
      clientSecret
    } = options;

    this.uri = uri;
    this.realm = realm;
    this.clientId = clientId;
    this.clientSecret = clientSecret;

    this.getToken = this.getToken.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  async getToken() {
    try {
      return await axios.post(
        `${this.uri}/realms/${this.realm}/protocol/openid-connect/token`,
        querystring.stringify({
          client_id: 'admin-cli',
          client_secret: this.clientSecret,
          grant_type: 'client_credentials',
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then((response) => {
        return response.data;
      }).catch((error: any) => {
        return error;
      }) 
    } catch (error: any) {
      return error;
    }
  }

  async login(user: LoginData){
    try {
      return await axios
        .post(
          `${this.uri}/realms/${this.realm}/protocol/openid-connect/token`,
          querystring.stringify({
            client_id: this.clientId,
            username: user.username,
            password: user.password,
            grant_type: 'password',
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        )
        .then(async (response) => {
          return response.data;
        })
        .catch((error) => {
          return error;
        });
    } catch (error: any) {
      return error;
    }
  }

  async register(user: RegisterData){
    try {
      return await this.getToken().then(async (token) => {
        return await axios
        .post(
          `${this.uri}/admin/realms/${this.realm}/users`,
          {
            username: user.username,
            email: user.email,
            enabled: true,
            credentials: [
              {
                type: 'password',
                value: user.password,
              },
            ],
            emailVerified: true,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token.access_token}`,
            },
          },
        )
        .then((resp) => {
          return resp;
        }).catch((error: any) => {
          return error;
        });
      });
      
    } catch (error: any) {
      return error;
    }
  }

}