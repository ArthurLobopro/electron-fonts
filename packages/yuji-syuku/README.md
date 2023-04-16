# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import YujiSyuku from "@electron-fonts/yuji-syuku"

window.addEventListener("DOMContentLoaded", () => {
    YujiSyuku.inject()
})
```