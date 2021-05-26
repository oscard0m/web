---
title: What is Event.preventDefault() for?
date: '2021-05-25'
tags: ['javascript', 'event-propagation', 'browser']
draft: false
summary: 'What is the difference between using preventDefault or not using it when creating an eventHandler'
images: []
---

According to [Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault):

> `Event.preventDefault()` method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

This means that, when `.preventDefault()` is used in an _eventHandler_ for an _HTML Element_, browser's default behavior assigned to that `event` for that _element_ simply will not occur.

An example based on the one in [MDN documentation]() where this can be understood is the following one:

Take a look at this simple checkbox. If you check the source code, there is an _eventHandler_ for the `click` event for the _checkbox_ element so, when a user does a click on the _checkbox_:

1. The `click` event will be triggered
2. The _eventHandler_ will execute the lines of code, in this case:

   - `if checkbox is not checked, apply red border to <form>` ☑️
   - `if checkbox is checked, remove red border to <form>` ◽.

3. The browser will apply the default behavior to the element which is:

   - `if checkbox is not checked, check it` ☑️
   - `if checkbox is checked, uncheck it` ◽.

You can play with it here:

<iframe src="https://codesandbox.io/embed/without-preventdefault-dirw5?fontsize=14&hidenavigation=1&theme=dark"
     title="without preventDefault"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Instead, when we create an _eventHandler_ to manage the `click` event for the checkbox HTML element, and we add a `event.preventDefault()` sentence, the `click` event is managed in the following way:

1. The `click` event will be triggered
2. The _eventHandler_ will execute the lines of code, in this case:

   - `if checkbox is not checked, apply red border to <form>` ☑️
   - `if checkbox is checked, remove red border to <form>` ◽.

3. The browser will NOT apply the default behavior to the element so the checkbox will not be marked.

The rest of clicks will not apply any change because the `checked` or not `checked` logic stopped working with `preventDefault()`

<iframe src="https://codesandbox.io/embed/preventdefault-example-2l74y?fontsize=14&hidenavigation=1&theme=dark"
     title="preventDefault example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
