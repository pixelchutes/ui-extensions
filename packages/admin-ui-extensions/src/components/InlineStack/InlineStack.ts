import {createRemoteComponent} from '@remote-ui/core';
import type {BaseInlineStackProps} from '@shopify/ui-extensions';

export type {BaseInlineStackProps as InlineStackProps} from '@shopify/ui-extensions';

/**
 * Use to lay out a horizontal row of components.
 *
 * A stack is made of flexible items that wrap each of the stack’s children. Options provide control of the alignment and spacing of the items in the stack.
 * Use `StackItem` to group multiple elements inside a `InlineStack` together.
 */
export const InlineStack = createRemoteComponent<
  'InlineStack',
  BaseInlineStackProps
>('InlineStack');
