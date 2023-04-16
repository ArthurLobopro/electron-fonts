# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TenorSans from "@electron-fonts/tenor-sans"

window.addEventListener("DOMContentLoaded", () => {
    TenorSans.inject()
})
```