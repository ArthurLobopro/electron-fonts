# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SyneMono from "@electron-fonts/syne-mono"

window.addEventListener("DOMContentLoaded", () => {
    SyneMono.inject()
})
```