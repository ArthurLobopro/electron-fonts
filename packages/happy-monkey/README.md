# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import HappyMonkey from "@electron-fonts/happy-monkey"

window.addEventListener("DOMContentLoaded", () => {
    HappyMonkey.inject()
})
```