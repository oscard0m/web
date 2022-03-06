---
title: 'TMIL: Using the "value" attribute in forms with React'
date: '2022-03-02'
tags: ['javascript', 'react', 'this-month-i-have-learned']
draft: false
summary: Consolidated this concept while working on a website made in React
images: []
---

In React, `<input type="text">`, `<textarea>`, and `<select>` all work very similarly - they all accept a `value` attribute that you can use to implement a [_Controlled Component_](https://reactjs.org/docs/forms.html#controlled-components).

In HTML, these elements maintain their own state and update it based on user input but in React, mutable state is typically kept in the `state` property of components, and only updated with `setState()`.

If we combine these two by making the React state be the “single source of truth” we call it a [_Controlled Component_](https://reactjs.org/docs/forms.html#controlled-components).

## Resources

- [React Forms: Controlled Components](https://reactjs.org/docs/forms.html#controlled-components)

## Blog ideas

Here are some ideas I got as potential blog posts:

- [React: Controlled Components on detail](https://github.com/oscard0m/web/issues/129)
