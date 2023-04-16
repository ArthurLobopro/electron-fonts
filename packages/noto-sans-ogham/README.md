# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansOgham from "@electron-fonts/noto-sans-ogham"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansOgham.inject()
})
```