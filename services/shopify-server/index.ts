import { ApiVersion, shopifyApi } from '@shopify/shopify-api';
import '@shopify/shopify-api/adapters/node';
import { restResources } from '@shopify/shopify-api/rest/admin/2024-01';

const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_APP_API_KEY,
  apiSecretKey: process.env.SHOPIFY_APP_API_SECRET_KEY,
  scopes: ['price_rules'],
  hostName: process.env.SHOPIFY_APP_HOST_NAME,
  adminApiAccessToken: process.env.SHOPIFY_APP_ACCESS_TOKEN,
  apiVersion: ApiVersion.January24,
  isCustomStoreApp: true,
  isEmbeddedApp: false,
  restResources,
});

const session = shopify.session.customAppSession('92f26b-47.myshopify.com');

export default shopify;
export { session };
