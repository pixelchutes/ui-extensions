import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeConditionalStyle} from '../../style';
import type {
  ViewLikeAccessibilityRole,
  Spacing,
  InlineAlignment,
  BlockAlignment,
  Columns,
  Rows,
} from '../shared';

export interface GridProps {
  /**
   * Sizes for each column of the layout.
   *
   *
   * `auto`: intrinsic size of the content.
   *
   * `fill`: fills the remaining available space. When multiple columns are set to `fill`, the remaining space is shared equally.
   *
   * `` `${number}%` ``: size in percentages.
   *
   * `` `${number}fr` ``: size in fractions.
   *
   * `number`: size in pixels.
   *
   *
   * - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.
   *
   * - When only one size is set and outside of an array, the grid will have one column of that size.
   *
   * @defaultValue 'fill'
   */
  columns?: MaybeConditionalStyle<Columns>;
  /**
   * Sizes for each row of the layout.
   *
   *
   * `auto`: intrinsic size of the content.
   *
   * `fill`: fills the remaining available space. When multiple rows are set to `fill`, the remaining space is shared equally.
   *
   * `` `${number}%` ``: size in percentages.
   *
   * `` `${number}fr` ``: size in fractions.
   *
   * `number`: size in pixels.
   *
   *
   * - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.
   *
   * - When only one size is set and outside of an array, the grid will have one row of that size.
   *
   * @defaultValue 'fill'
   */
  rows?: MaybeConditionalStyle<Rows>;
  /**
   * Adjust spacing between children
   *
   * @defaultValue 'none'
   **/
  spacing?: MaybeConditionalStyle<Spacing>;
  /**
   * Position children along the cross axis
   */
  blockAlignment?: MaybeConditionalStyle<BlockAlignment>;
  /**
   * Position children along the main axis
   */
  inlineAlignment?: MaybeConditionalStyle<InlineAlignment>;
  /**
   * Sets the semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help buyers
   * navigate the page.
   *
   *
   * Examples:
   *
   * - In an HTML host a `['listItem', 'separator']` tuple will render: <li role='separator'>
   *
   * - In an HTML host a `listItem` string will render: <li>
   */
  accessibilityRole?: ViewLikeAccessibilityRole;
  /**
   * A label that describes the purpose or contents of the element. When set,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;
}

/**
 * Grid is used to lay out content in a matrix of rows and columns.
 */
export const Grid = createRemoteComponent<'Grid', GridProps>('Grid');
