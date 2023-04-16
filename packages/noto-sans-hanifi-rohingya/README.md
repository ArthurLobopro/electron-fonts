# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansHanifiRohingya from "@electron-fonts/noto-sans-hanifi-rohingya"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansHanifiRohingya.inject()
})
```