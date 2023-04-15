# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KiwiMaru from "@electron-fonts/kiwi-maru"

window.addEventListener("DOMContentLoaded", () => {
    KiwiMaru.inject()
})
```