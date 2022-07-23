// import config from '../../auth_config.json';

const { domain, clientId, audience, apiUri, errorPath } = {
  "domain": "dev-houbwu7k.us.auth0.com",
  "clientId": "iZ2TZkLE2ltFW5x95PnKUrbUsM1aJO5d",
  "audience": "YOUR_API_IDENTIFIER",
  "apiUri": "http://localhost:3001",
  "appUri": "https://ahmedessam291194.github.io/scheduleTweets/",
  "errorPath": "/error"
} as {
  domain: string;
  clientId: string;
  audience?: string;
  apiUri: string;
  errorPath: string;
};

export const environment = {
  production: true,
  auth: {
    domain,
    clientId,
    ...(audience && audience !== "YOUR_API_IDENTIFIER" ? { audience } : null),
    redirectUri: window.location.origin,
    errorPath,
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`],
  },
};
