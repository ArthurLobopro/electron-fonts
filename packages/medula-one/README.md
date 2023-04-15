# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MedulaOne from "@electron-fonts/medula-one"

window.addEventListener("DOMContentLoaded", () => {
    MedulaOne.inject()
})
```