import {extend, TextBlock} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::Render', (root) => {
  const textBlock = root.createComponent(TextBlock, undefined, 'Textblock');

  root.appendChild(textBlock);
});
