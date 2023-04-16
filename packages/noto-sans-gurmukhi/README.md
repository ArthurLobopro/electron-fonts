# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansGurmukhi from "@electron-fonts/noto-sans-gurmukhi"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansGurmukhi.inject()
})
```