export {}
declare global{
  type Recordable<T = any> = Record<string, T>;
  interface ImportMetaEnv {
    VITE_BASE_URL: string;
    VITE_PORT: number;
    VITE_API_BASE_URL: string;
  }

}
