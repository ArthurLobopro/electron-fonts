# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansEthiopic from "@electron-fonts/noto-sans-ethiopic"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansEthiopic.inject()
})
```