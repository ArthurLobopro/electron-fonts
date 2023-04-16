# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import VastShadow from "@electron-fonts/vast-shadow"

window.addEventListener("DOMContentLoaded", () => {
    VastShadow.inject()
})
```