---
title: Creating my personal `npm` card
date: '2021-06-20'
tags: ['javascript', 'npm', 'node', 'github-actions', 'semantic-release']
draft: false
summary: 'Created a personal `npm` card inspired by [bitandbang](https://github.com/bnb/bitandbang)'
images: []
---

Inpired by [bitandbang](https://github.com/bnb/bitandbang) I just created and published my personal `npm` card. I think it's
a funny way to integrate in our `npm/yarn` projects a table in terminal where anybody can see author's contact info in a fancey way.

You can find out how does it look running `npx oscard0m` in your terminal.

An issue that come up is, when my [semantic release](https://semantic-release.gitbook.io/semantic-release/) GitHub Action trying to publish in `npm` the latest changes of my card, I'm losing the color from the genereated `output` file.
I already [created a bug](https://github.com/oscard0m/npm-personal-card/issues/5) and I would like to write on the details of the issue once I 
identify what was causing problems there.
