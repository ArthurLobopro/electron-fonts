# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Praise from "@electron-fonts/praise"

window.addEventListener("DOMContentLoaded", () => {
    Praise.inject()
})
```