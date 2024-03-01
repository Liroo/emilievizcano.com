import productFragment from '../fragments/product';

export const queryProductByHandle = `
    query getProduct($handle: String!) {
      product(handle: $handle) {
        ...product
      }
    }
    ${productFragment}
  `;
