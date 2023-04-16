# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansSoraSompeng from "@electron-fonts/noto-sans-sora-sompeng"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansSoraSompeng.inject()
})
```