import { createMsalInstance } from '@azure/msal-vue';

export const msalConfig = {
  auth: {
    clientId: '<your-frontend-client-id>',
    authority: 'https://login.microsoftonline.com/<your-tenant-id>',
    redirectUri: 'http://localhost:5173',
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
  scopes: ['api://<your-api-client-id>/user_impersonation']
};

export const msalInstance = createMsalInstance(msalConfig);