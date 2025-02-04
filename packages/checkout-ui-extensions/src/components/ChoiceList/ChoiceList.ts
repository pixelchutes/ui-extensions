import {createRemoteComponent} from '@remote-ui/core';

export interface ChoiceListProps<T extends string | string[]> {
  /**
   * An identifier for the field that is unique within the nearest
   * containing `Form` component.
   */
  name: string;
  /**
   * A `string` or `string[]` indicating the ids of selected choices. When
   * a string is set, choices render as radios. When a string array is
   * set, choices render as checkboxes.
   */
  value: T;
  /**
   * A callback that is run whenever the choice list is changed. This callback
   * is called with a string or array of strings indicating the ids of choices
   * that should now be selected. This component is
   * [controlled](https://reactjs.org/docs/forms.html#controlled-components),
   * so you **must** store this value in state and reflect it back in the
   * `value` prop.
   */
  onChange(value: T): void;
}

/**
 * Use choice lists to present a list of choices where buyers can make
 * a single selection or multiple selections.
 */
export const ChoiceList = createRemoteComponent<
  'ChoiceList',
  ChoiceListProps<string | string[]>
>('ChoiceList');
