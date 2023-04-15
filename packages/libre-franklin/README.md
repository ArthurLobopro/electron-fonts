# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LibreFranklin from "@electron-fonts/libre-franklin"

window.addEventListener("DOMContentLoaded", () => {
    LibreFranklin.inject()
})
```