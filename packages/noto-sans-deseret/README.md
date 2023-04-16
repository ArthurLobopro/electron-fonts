# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansDeseret from "@electron-fonts/noto-sans-deseret"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansDeseret.inject()
})
```