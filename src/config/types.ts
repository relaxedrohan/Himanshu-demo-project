export interface ThirdPartyConfig {
  thirPartyBaseUrl: string;
}

export interface DatabaseConfig {
  host: string;
  dbport: number;
  username: string;
  password: string;
  database: string;
}

export interface AppConfig extends ThirdPartyConfig, DatabaseConfig {
  port: number;
  environment: string;
}
