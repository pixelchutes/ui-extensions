# ScrollView

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| hint? | <code>"innerShadow" &#124; {type: "pill", content: string}</code> | Provides a hint to the user that the area is scrollable.<br /><br />`pill`: renders a pill with a message at the end of the the scrollable area. It disappear as soon as the user starts scrolling.<br /><br />`innerShadow`: renders an inner visual hint to indicate that the content is scrollable.  |
| minBlockSize? | <code>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill" &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill"<wbr>></code> | Adjust the minimum block size.<br /><br />`number`: size in pixels.<br /><br />`` `${number}%` ``: size in percentages.<br /><br />`fill`: takes all the available space.  |
| maxBlockSize? | <code>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill" &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill"<wbr>></code> | Adjust the maximum block size.<br /><br />`number`: size in pixels.<br /><br />`` `${number}%` ``: size in percentages.<br /><br />`fill`: takes all the available space.  |
| minInlineSize? | <code>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill" &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill"<wbr>></code> | Adjust the minimum inline size.<br /><br />`number`: size in pixels.<br /><br />`` `${number}%` ``: size in percentages.<br /><br />`fill`: takes all the available space.  |
| maxInlineSize? | <code>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill" &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill"<wbr>></code> | Adjust the maximum inline size.<br /><br />`number`: size in pixels.<br /><br />`` `${number}%` ``: size in percentages.<br /><br />`fill`: takes all the available space.  |
| direction? | <code>"block" &#124; "inline"</code> | The direction on which the content is scrollable.<br /><br />`block`: Indicates that the content is scrollable on the main axis.<br /><br />`inline`: Indicates that the content is scrollable on the cross axis.<br /><br />Default value: <code>block</code> |
| scrollTo? | <code>number &#124; HTMLElement</code> | Scroll to a specific position or to an element.  |
| onScroll? | <code>(args: <a href="#scrollviewevent">ScrollViewEvent</a>) => void</code> | Callback function that is called when the scroll position changes. Allows to listen to events inside the component returning the position of the scroll.<br /><br />Note: On touch devices, the onScroll event is fired only when the user finishes scrolling which differs from non touch devices, where the onScroll event is fired when the user scrolls  |
| onScrolledToEdge? | <code>(args: <a href="#scrollviewevent">ScrollViewEvent</a>) => void</code> | Callback function that is called when the scroll position reaches one of the edges.  |<a name="ScrollViewEvent"></a>

### ScrollViewEvent

| Name | Type | Description |
| --- | --- | --- |
| position | <code>{inline: number, block: number}</code> |  |
| scrolledTo | <code>{inline: "start" &#124; "end" &#124; null, block: "start" &#124; "end" &#124; null}</code> |  |<a name="ConditionalStyle"></a>

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