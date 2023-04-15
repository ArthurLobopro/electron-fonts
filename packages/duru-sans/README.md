# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DuruSans from "@electron-fonts/duru-sans"

window.addEventListener("DOMContentLoaded", () => {
    DuruSans.inject()
})
```