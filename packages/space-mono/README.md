# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SpaceMono from "@electron-fonts/space-mono"

window.addEventListener("DOMContentLoaded", () => {
    SpaceMono.inject()
})
```