# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansTC from "@electron-fonts/noto-sans-tc"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansTC.inject()
})
```