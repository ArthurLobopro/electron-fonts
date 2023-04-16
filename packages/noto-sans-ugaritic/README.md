# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansUgaritic from "@electron-fonts/noto-sans-ugaritic"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansUgaritic.inject()
})
```