# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Kings from "@electron-fonts/kings"

window.addEventListener("DOMContentLoaded", () => {
    Kings.inject()
})
```