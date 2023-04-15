# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MartianMono from "@electron-fonts/martian-mono"

window.addEventListener("DOMContentLoaded", () => {
    MartianMono.inject()
})
```