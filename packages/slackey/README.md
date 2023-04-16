# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Slackey from "@electron-fonts/slackey"

window.addEventListener("DOMContentLoaded", () => {
    Slackey.inject()
})
```