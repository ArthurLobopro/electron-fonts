# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KottaOne from "@electron-fonts/kotta-one"

window.addEventListener("DOMContentLoaded", () => {
    KottaOne.inject()
})
```