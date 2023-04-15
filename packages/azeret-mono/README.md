# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AzeretMono from "@electron-fonts/azeret-mono"

window.addEventListener("DOMContentLoaded", () => {
    AzeretMono.inject()
})
```