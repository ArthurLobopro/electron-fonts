# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansMyanmar from "@electron-fonts/noto-sans-myanmar"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansMyanmar.inject()
})
```