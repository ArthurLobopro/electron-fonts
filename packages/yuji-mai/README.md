# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import YujiMai from "@electron-fonts/yuji-mai"

window.addEventListener("DOMContentLoaded", () => {
    YujiMai.inject()
})
```