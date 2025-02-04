import {extend, Icon} from '@shopify/admin-ui-extensions';

extend('Playground', (root) => {
  const icon = root.createComponent(Icon, {
    source: 'cancelSmallMinor',
  });

  icon.appendChild('This is the best extension.');
  root.appendChild(icon);

  root.mount();
});
