// src/SDK.ts
// src/SDK.ts
import type { SDKEnvironment } from './types/SDKEnvironment';

class NTSSDK {
  private static instance: NTSSDK;
  private initialized = false;
  private environment: SDKEnvironment | null = null;

  private constructor() {}

  static getInstance(): NTSSDK {
    if (!NTSSDK.instance) {
      NTSSDK.instance = new NTSSDK();
    }
    return NTSSDK.instance;
  }

  initialize(env: SDKEnvironment): void {
    if (this.initialized) {
      console.warn('SDK is already initialized.');
      return;
    }
    this.environment = env;
    this.initialized = true;
    console.log(`SDK initialized with environment: ${JSON.stringify(env)}`);
  }

  getEnvironment(): SDKEnvironment | null {
    if (!this.initialized) {
      throw new Error(
        'SDK is not initialized. Please call initialize() first.'
      );
    }
    return this.environment;
  }

  // Add other SDK methods below
}

export const SDK = NTSSDK.getInstance();
