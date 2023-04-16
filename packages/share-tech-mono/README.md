# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ShareTechMono from "@electron-fonts/share-tech-mono"

window.addEventListener("DOMContentLoaded", () => {
    ShareTechMono.inject()
})
```