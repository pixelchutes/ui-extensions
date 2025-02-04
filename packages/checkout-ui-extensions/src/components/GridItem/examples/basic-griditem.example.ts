import {extend, Grid, GridItem, View} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const grid = root.createComponent(
    Grid,
    {
      columns: ['20%', 'fill', 'auto'],
      rows: [300, 'auto'],
    },
    [
      root.createComponent(
        View,
        {border: 'base', padding: 'base'},
        '20% / 300',
      ),
      root.createComponent(
        View,
        {border: 'base', padding: 'base'},
        'fill / 300',
      ),
      root.createComponent(
        View,
        {border: 'base', padding: 'base'},
        'auto / 300',
      ),
      root.createComponent(GridItem, {columnSpan: 2}, [
        root.createComponent(
          View,
          {border: 'base', padding: 'base'},
          '20% + fill / auto',
        ),
      ]),
      root.createComponent(
        View,
        {border: 'base', padding: 'base'},
        'auto / auto',
      ),
    ],
  );

  root.appendChild(grid);
});
