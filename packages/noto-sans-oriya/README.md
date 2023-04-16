# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansOriya from "@electron-fonts/noto-sans-oriya"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansOriya.inject()
})
```