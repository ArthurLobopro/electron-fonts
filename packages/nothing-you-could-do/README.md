# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NothingYouCouldDo from "@electron-fonts/nothing-you-could-do"

window.addEventListener("DOMContentLoaded", () => {
    NothingYouCouldDo.inject()
})
```