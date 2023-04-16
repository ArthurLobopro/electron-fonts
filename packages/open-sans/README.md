# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import OpenSans from "@electron-fonts/open-sans"

window.addEventListener("DOMContentLoaded", () => {
    OpenSans.inject()
})
```