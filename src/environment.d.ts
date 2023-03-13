declare global {
  namespace NodeJS {
    interface ProcessEnv {
        DB_HOST: string;
        DB_DATABASE: string;
        DB_USER: string;
        DB_PASSWORD: string;
        DB_PORT: number;
        ACCESS_TOKEN_SECRET: string;
        REFRESH_TOKEN_SECRET: string;
    }
  }
}

export {}