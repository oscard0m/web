---
title: Event.preventDefault() vs. Event.stopPropagation()
date: '2021-05-26'
tags: ['javascript', 'event-propagation', 'browser']
draft: false
summary: 'What is the difference between using `preventDefault` and `stopPropagation`?'
images: []
---

According to [Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) `preventDefault()`'s definition:

> `Event.preventDefault()` method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

It is important to consider also this detail on how `preventDefault` is interpreted by the browser:

> The event continues to propagate as usual, unless one of its event listeners calls `stopPropagation()` or `stopImmediatePropagation()`, either of which terminates propagation at once.

What this means is, when an event is triggered for a certain HTML Element, this same event will be propagated for its parent elements.

You can find an example in the following snippet of code:

<iframe src="https://codesandbox.io/embed/prevent-default-multiple-elements-c4ig7?fontsize=14&hidenavigation=1&theme=dark"
     title="prevent-default-multiple-elements"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

As you can see, when you click on the checkbox:

1. the `click` event is triggered
2. The _eventHandler_ associated to _checkbox_ is executed. In this case, it displays or hides a border to `<form>` element alternatively. The checkbox default behavior of adding or removing a tick to the checkbox is not happening due to `preventDefault()` sentence.
3. Also, the `click` _eventHandler_ for its parent element (`<form>`) is executed too. In this case, the styling `color` changes to `red` or `green` alternatively.

If you want to read more about `preventDefault` you can take a look to [my blog post](/blog/small-pills/event-prevent-default). Also, you can read more about the capturing and bubbling phases of Events in [Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#bubbling_and_capturing_explained).

On the other hand, if we apply the `.stopPropagation()` method, the result we will obtain is to assure the click event does not bubble up to parent elements.

You can play with the following snippet of code where you can see the differences:

<iframe src="https://codesandbox.io/embed/stop-propagation-7dzxs?fontsize=14&hidenavigation=1&theme=dark"
     title="stop-propagation"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
