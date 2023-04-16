# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SourceCodePro from "@electron-fonts/source-code-pro"

window.addEventListener("DOMContentLoaded", () => {
    SourceCodePro.inject()
})
```