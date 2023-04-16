# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansNabataean from "@electron-fonts/noto-sans-nabataean"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansNabataean.inject()
})
```