# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NovaCut from "@electron-fonts/nova-cut"

window.addEventListener("DOMContentLoaded", () => {
    NovaCut.inject()
})
```