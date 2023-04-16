# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifTibetan from "@electron-fonts/noto-serif-tibetan"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifTibetan.inject()
})
```