# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NerkoOne from "@electron-fonts/nerko-one"

window.addEventListener("DOMContentLoaded", () => {
    NerkoOne.inject()
})
```