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

An example also found in [MDN documentation]() where this can be understood is the following one:

Take a look at this simple checkbox. If you check the source code, there is no javascript associated to the HTML document so, when a user does a click on the _checkbox_:

1. The `click` event will be triggered
2. The browser will apply the default behavior to the element which is:

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
2. The custom _eventHandler_ is executed, with its corresponding `event.preventDefault()`.

```js
document.querySelector('#id-checkbox').addEventListener(
  'click',
  function (event) {
    document.getElementById('output-box').innerHTML +=
      "Sorry! <code>preventDefault()</code> won't let you check this!<br>"
    event.preventDefault()
  },
  false
)
```

In this case, the checkbox won't change its status, only the custom code showing the message will happen.

<iframe src="https://codesandbox.io/embed/preventdefault-example-2l74y?fontsize=14&hidenavigation=1&theme=dark"
     title="preventDefault example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
