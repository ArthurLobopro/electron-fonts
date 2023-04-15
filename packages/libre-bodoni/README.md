# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LibreBodoni from "@electron-fonts/libre-bodoni"

window.addEventListener("DOMContentLoaded", () => {
    LibreBodoni.inject()
})
```