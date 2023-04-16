# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SourceSans3 from "@electron-fonts/source-sans-3"

window.addEventListener("DOMContentLoaded", () => {
    SourceSans3.inject()
})
```