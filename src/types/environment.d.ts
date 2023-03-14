// Seem to be ignored by our compiler :'(
declare namespace NodeJS {
  export interface ProcessEnv {
      DB_HOST: string;
      DB_DATABASE: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_PORT: string;
      ACCESS_TOKEN_SECRET: string;
      REFRESH_TOKEN_SECRET: string;
  }
}