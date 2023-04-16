# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SourceSansPro from "@electron-fonts/source-sans-pro"

window.addEventListener("DOMContentLoaded", () => {
    SourceSansPro.inject()
})
```