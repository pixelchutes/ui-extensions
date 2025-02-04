# View

View is a generic container component. Its contents will always be their
“natural” size, so this component can be useful in layout components (like `Grid`,
`BlockStack`, `InlineStack`) that would otherwise stretch their children to fit.

Note: View’s box model related properties like `padding`, `border`, `borderRadius`, and `borderColor` are implemented as
[CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts).

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| maxInlineSize? | <code>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill" &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill"<wbr>></code> | Adjust the maximum inline size.<br /><br />`number`: size in pixels.<br /><br />`` `${number}%` ``: size in percentages.<br /><br />`fill`: takes all the available space.  |
| minInlineSize? | <code>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill" &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill"<wbr>></code> | Adjust the minimum inline size.<br /><br />`number`: size in pixels.<br /><br />`` `${number}%` ``: size in percentages.<br /><br />`fill`: takes all the available space.  |
| minBlockSize? | <code>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill" &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill"<wbr>></code> | Adjust the block size.<br /><br />`number`: size in pixels.<br /><br />`` `${number}%` ``: size in percentages.<br /><br />`fill`: takes all the available space.  |
| padding? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><wbr>></code> | Adjust the padding.<br /><br />To shorten the code, it is possible to specify all the padding properties in one property.<br /><br /> Examples:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart paddings are `base`<br /><br />- [`base`, `none`] means blockStart and blockEnd paddings are `base`, inlineStart and inlineEnd paddings are `none`<br /><br />- [`base`, `none`, `loose`, `tight`] means blockStart padding is `base`, inlineEnd padding is `none`, blockEnd padding is `loose` and  blockStart padding is `tight`  |
| visibility? | <code>"hidden"</code> | Changes the visibility of the element.<br /><br />`hidden` visually hides the component while keeping it accessible to assistive technology (for example, a screen reader). Hidden elements do not take any visual space contrary to CSS visibility: hidden;  |
| accessibilityVisibility? | <code>"hidden"</code> | Changes the visibility of the element to assistive technologies.<br /><br />`hidden` hides the component from assistive technology (for example, a screen reader) but remains visually visible.  |
| display? | <code>"block" &#124; "inline"</code> | Changes the display of the View.<br /><br /> `inline` follows the direction of words in a sentence based on the document’s writing mode.<br /><br />`block` follows the direction of paragraphs based on the document’s writing mode.<br /><br /> Default value: <code>'block'</code> |
| id? | <code>string</code> | A unique identifier for the View.  |
| opacity? | <code>10 &#124; 20 &#124; 30 &#124; 40 &#124; 50 &#124; 60 &#124; 70 &#124; 80 &#124; 90</code> | Sets the opacity of the View. The opacity will be applied to the background as well as all the childrens of the View. Use carefully as this could decrease the contrast ratio between the background and foreground elements resulting in unreadable and inaccessible text.  |
| accessibilityLabel? | <code>string</code> | A label that describes the purpose or contents of the element. When set, it will be announced to buyers using assistive technologies and will provide them with more context.  |
| accessibilityRole? | <code><a href="#nonpresentationalaccessibilityrole">NonPresentationalAccessibilityRole</a> &#124; [<a href="#nonpresentationalaccessibilityrole">NonPresentationalAccessibilityRole</a>, <a href="#nonpresentationalaccessibilityrole">NonPresentationalAccessibilityRole</a>]</code> | Sets the semantic meaning of the component’s content. When set, the role will be used by assistive technologies to help buyers navigate the page.<br /><br /> Examples:<br /><br />- In an HTML host a `['listItem', 'separator']` tuple will render: &lt;li role='separator'&gt;<br /><br />- In an HTML host a `listItem` string will render: &lt;li&gt;  |
| position? | <code>Position &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>Position<wbr>></code> | Changes how the View is positioned.  |
| translate? | <code><a href="#translate">Translate</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#translate">Translate</a><wbr>></code> | Specifies a two-dimensional translation of the View.  |
| blockAlignment? | <code>"start" &#124; "center" &#124; "end" &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>"start" &#124; "center" &#124; "end"<wbr>></code> | Position children along the cross axis  |
| inlineAlignment? | <code><a href="#inlinealignment">InlineAlignment</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#inlinealignment">InlineAlignment</a><wbr>></code> | Position children along the main axis  |
| border? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><wbr>></code> | Adjust the border style.<br /><br />To shorten the code, it is possible to specify all the border style properties in one property.<br /><br />Examples: - `base` means blockStart, inlineEnd, blockEnd and inlineStart border styles are `base` - [`base`, `none`] means blockStart and blockEnd border styles are `base`, inlineStart and inlineEnd border styles are `none` - [`base`, `none`, `dotted`, `base`] means blockStart border style is `base`, inlineEnd border style is `none`, blockEnd border style is `dotted` and  blockStart border style is `base`  |
| borderWidth? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><wbr>></code> | Adjust the border width.<br /><br />To shorten the code, it is possible to specify all the border width properties in one property.<br /><br />Examples: - `base` means blockStart, inlineEnd, blockEnd and inlineStart border widths are `base` - [`base`, `medium`] means blockStart and blockEnd border widths are `base`, inlineStart and inlineEnd border widths are `medium` - [`base`, `medium`, `medium`, `base`] means blockStart border width is `base`, inlineEnd border width is `medium`, blockEnd border width is `medium` and  blockStart border width is `base`  |
| borderRadius? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><wbr>></code> | Adjust the border radius.<br /><br />To shorten the code, it is possible to specify all the border width properties in one property.<br /><br />Examples: - `base` means blockStart, inlineEnd, blockEnd and inlineStart border radii are `base` - [`base`, `none`] means blockStart and blockEnd border radii are `base`, inlineStart and inlineEnd border radii are `none` - [`base`, `none`, `tight`, `base`] means blockStart border radius is `base`, inlineEnd border radius is `none`, blockEnd border radius is `tight` and  blockStart border radius is `base`  |
<a name="InlineAlignment"></a>

### InlineAlignment

<code>"start" &#124; "center" &#124; "end"</code><a name="Translate"></a>

### Translate

| Name | Type | Description |
| --- | --- | --- |
| block? | <code>number &#124; &#96;&dollar;{number}%&#96;</code> | Adjust the translation on the cross axis.<br /><br />A percentage value refers to the block size of the View.  |
| inline? | <code>number &#124; &#96;&dollar;{number}%&#96;</code> | Adjust the translation on the main axis.<br /><br />A percentage value refers to the inline size of the View.  |
<a name="NonPresentationalAccessibilityRole"></a>

### NonPresentationalAccessibilityRole

| Value | Description |
| --- | --- |
| <code>"main"</code> | Used to indicate the primary content. |
| <code>"header"</code> | Used to indicate the component is a header. |
| <code>"footer"</code> | Used to display information such as copyright information, navigation links, and privacy statements. |
| <code>"section"</code> | Used to indicate a generic section. |
| <code>"complementary"</code> | Used to designate a supporting section that relates to the main content. |
| <code>"navigation"</code> | Used to identify major groups of links used for navigating. |
| <code>"orderedList"</code> | Used to identify a list of ordered items. |
| <code>"listItem"</code> | Used to identify an item inside a list of items. |
| <code>"unorderedList"</code> | Used to identify a list of unordered items. |
| <code>"separator"</code> | Used to indicates the component acts as a divider that separates and distinguishes sections of content. |
| <code>"status"</code> | Used to define a live region containing advisory information for the user that is not important enough to be an alert. |
| <code>"alert"</code> | Used for important, and usually time-sensitive, information. |
<a name="MaybeShorthandProperty"></a>

### MaybeShorthandProperty

<code>Property &#124; <a href="#shorthandproperty">ShorthandProperty</a></code>
<a name="ShorthandProperty"></a>

### ShorthandProperty

<code>[Property, Property] &#124; [Property, Property, Property, Property]</code><a name="ConditionalStyle"></a>

### ConditionalStyle

| Name | Type | Description |
| --- | --- | --- |
| default? | <code>T</code> | The default value applied when none of the conditional values specified in `conditionals` are met.  |
| conditionals | <code><a href="#conditionalvalue">ConditionalValue</a><<wbr>T<wbr>>[]</code> | An array of conditional values.  |<a name="ConditionalValue"></a>

### ConditionalValue

| Name | Type | Description |
| --- | --- | --- |
| conditions | <code>Conditions</code> | The conditions that must be met for the value to be applied. At least one condition must be specified.  |
| value | <code>T</code> | The value that will be applied if the conditions are met.  |