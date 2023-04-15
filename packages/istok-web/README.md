# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IstokWeb from "@electron-fonts/istok-web"

window.addEventListener("DOMContentLoaded", () => {
    IstokWeb.inject()
})
```