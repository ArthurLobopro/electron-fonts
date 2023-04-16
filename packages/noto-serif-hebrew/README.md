# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifHebrew from "@electron-fonts/noto-serif-hebrew"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifHebrew.inject()
})
```