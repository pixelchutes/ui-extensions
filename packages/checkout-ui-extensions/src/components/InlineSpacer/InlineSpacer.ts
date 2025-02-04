import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeConditionalStyle} from '../../style';
import type {Spacing} from '../shared';

export interface InlineSpacerProps {
  /**
   * Adjust size of the spacer
   *
   * @defaultValue 'base'
   **/
  spacing?: MaybeConditionalStyle<
    Extract<Spacing, 'extraTight' | 'tight' | 'base' | 'loose' | 'extraLoose'>
  >;
}

/**
 * InlineSpacer is used to create empty inline space, typically when variable spacing
 * is needed between multiple elements.
 *
 * Note that you should favor InlineStack when spacing between all elements is the same.
 */
export const InlineSpacer = createRemoteComponent<
  'InlineSpacer',
  InlineSpacerProps
>('InlineSpacer');
