# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FugazOne from "@electron-fonts/fugaz-one"

window.addEventListener("DOMContentLoaded", () => {
    FugazOne.inject()
})
```