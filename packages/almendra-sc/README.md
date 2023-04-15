# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AlmendraSC from "@electron-fonts/almendra-sc"

window.addEventListener("DOMContentLoaded", () => {
    AlmendraSC.inject()
})
```