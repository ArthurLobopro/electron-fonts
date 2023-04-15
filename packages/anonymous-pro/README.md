# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AnonymousPro from "@electron-fonts/anonymous-pro"

window.addEventListener("DOMContentLoaded", () => {
    AnonymousPro.inject()
})
```