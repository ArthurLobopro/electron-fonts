# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BethEllen from "@electron-fonts/beth-ellen"

window.addEventListener("DOMContentLoaded", () => {
    BethEllen.inject()
})
```