# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansTagbanwa from "@electron-fonts/noto-sans-tagbanwa"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansTagbanwa.inject()
})
```