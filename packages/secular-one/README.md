# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SecularOne from "@electron-fonts/secular-one"

window.addEventListener("DOMContentLoaded", () => {
    SecularOne.inject()
})
```