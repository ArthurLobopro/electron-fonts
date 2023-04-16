# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SourceSerifPro from "@electron-fonts/source-serif-pro"

window.addEventListener("DOMContentLoaded", () => {
    SourceSerifPro.inject()
})
```