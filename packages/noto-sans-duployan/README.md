# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansDuployan from "@electron-fonts/noto-sans-duployan"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansDuployan.inject()
})
```