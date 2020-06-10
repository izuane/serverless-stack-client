const dev = {
  STRIPE_KEY: "pk_test_u4P5553uqyPRonTF3e9ApyYL000h18XPuy",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-168ozznemnr9v"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://kni26lp60l.execute-api.eu-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_mNGA8tIMt",
    APP_CLIENT_ID: "i13ecm1iumnv2isssf6ls52hs",
    IDENTITY_POOL_ID: "eu-west-2:dd5d76f1-4fc2-4ce7-b3e4-bdff8a1ca5ed"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_u4P5553uqyPRonTF3e9ApyYL000h18XPuy",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-76vdt1buk49g"
  },
  apiGateway: {
    REGION: "YOUR_PROD_API_GATEWAY_REGION",
    URL: "YOUR_PROD_API_GATEWAY_URL"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_tauEla7HV",
    APP_CLIENT_ID: "2rtketbj7ahktsekrdahtbnit5",
    IDENTITY_POOL_ID: "eu-west-2:5f2a4b88-086a-4906-a079-f8f934e35d63"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};