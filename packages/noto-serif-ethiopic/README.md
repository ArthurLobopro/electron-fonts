# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifEthiopic from "@electron-fonts/noto-serif-ethiopic"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifEthiopic.inject()
})
```