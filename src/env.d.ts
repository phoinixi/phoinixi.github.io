/// <reference types="astro/client" />

interface ImportMetaEnv {
  // Public environment variables
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_GOOGLE_ANALYTICS_ID?: string;
  readonly PUBLIC_COUNTER_DEV_ID?: string;

  // Private environment variables
  readonly GITHUB_TOKEN?: string;
  readonly API_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
