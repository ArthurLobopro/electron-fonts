# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PTSans from "@electron-fonts/pt-sans"

window.addEventListener("DOMContentLoaded", () => {
    PTSans.inject()
})
```