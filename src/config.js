export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_u4P5553uqyPRonTF3e9ApyYL000h18XPuy",
    s3: {
      REGION: "eu-west-2",
      BUCKET: "notes-app-uploads-ia"
    },
    apiGateway: {
      REGION: "eu-west-2",
      URL: "https://fheplk9bea.execute-api.eu-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-west-2",
      USER_POOL_ID: "eu-west-2_LkLxsh8n1",
      APP_CLIENT_ID: "5o28od06glmdgj4j0bcufjoo2f",
      IDENTITY_POOL_ID: "eu-west-2:aa0a90cd-8723-4a9e-beae-fc22e167197c"
    }
  };