# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Petrona from "@electron-fonts/petrona"

window.addEventListener("DOMContentLoaded", () => {
    Petrona.inject()
})
```