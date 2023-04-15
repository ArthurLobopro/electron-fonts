# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LibreBaskerville from "@electron-fonts/libre-baskerville"

window.addEventListener("DOMContentLoaded", () => {
    LibreBaskerville.inject()
})
```