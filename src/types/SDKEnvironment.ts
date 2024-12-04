// src/types/SDKEnvironment.ts
export interface SDKEnvironment {
  apiKey: string;
  apiSecret: string;
  apiProvider: string;
  apiClientId: string;
  baseUrl: string;
  environment?: 'development' | 'staging' | 'production';
}
