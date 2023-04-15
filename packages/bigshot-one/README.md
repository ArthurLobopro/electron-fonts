# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BigshotOne from "@electron-fonts/bigshot-one"

window.addEventListener("DOMContentLoaded", () => {
    BigshotOne.inject()
})
```