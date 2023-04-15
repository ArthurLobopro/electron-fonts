# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AlumniSans from "@electron-fonts/alumni-sans"

window.addEventListener("DOMContentLoaded", () => {
    AlumniSans.inject()
})
```