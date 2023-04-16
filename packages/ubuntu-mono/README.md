# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import UbuntuMono from "@electron-fonts/ubuntu-mono"

window.addEventListener("DOMContentLoaded", () => {
    UbuntuMono.inject()
})
```