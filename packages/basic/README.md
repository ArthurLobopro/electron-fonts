# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Basic from "@electron-fonts/basic"

window.addEventListener("DOMContentLoaded", () => {
    Basic.inject()
})
```