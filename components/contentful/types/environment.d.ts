declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTENTFUL_SPACE_ID: string;
      CONTENTFUL_MANAGEMENT_TOKEN: string;
      CONTENTFUL_ACCESS_TOKEN: string;
      CONTENTFUL_PREVIEW_ACCESS_TOKEN: string;
      CONTENTFUL_PREVIEW_SECRET: string;
      CONTENTFUL_ENVIRONMENT: string;
      SENDGRID_API_KEY: string;
      NEXT_PUBLIC_RECAPTCHA_KEY: string;
      NEXT_PUBLIC_DOMAIN_URL: string;
      NEXT_PUBLIC_GTM: string;
    }
  }
}

export {};
