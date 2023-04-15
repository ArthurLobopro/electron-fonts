# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CormorantUnicase from "@electron-fonts/cormorant-unicase"

window.addEventListener("DOMContentLoaded", () => {
    CormorantUnicase.inject()
})
```