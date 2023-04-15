# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Mallanna from "@electron-fonts/mallanna"

window.addEventListener("DOMContentLoaded", () => {
    Mallanna.inject()
})
```