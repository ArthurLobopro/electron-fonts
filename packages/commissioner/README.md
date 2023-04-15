# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Commissioner from "@electron-fonts/commissioner"

window.addEventListener("DOMContentLoaded", () => {
    Commissioner.inject()
})
```