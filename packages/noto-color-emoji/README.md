# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoColorEmoji from "@electron-fonts/noto-color-emoji"

window.addEventListener("DOMContentLoaded", () => {
    NotoColorEmoji.inject()
})
```