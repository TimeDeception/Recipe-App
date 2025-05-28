/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: string; // e.g., 'development' or 'production'
  readonly VITE_API_URL?: string; // Add custom environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}