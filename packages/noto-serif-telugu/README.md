# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifTelugu from "@electron-fonts/noto-serif-telugu"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifTelugu.inject()
})
```