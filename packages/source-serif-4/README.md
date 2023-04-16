# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SourceSerif4 from "@electron-fonts/source-serif-4"

window.addEventListener("DOMContentLoaded", () => {
    SourceSerif4.inject()
})
```