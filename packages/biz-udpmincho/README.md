# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BIZUDPMincho from "@electron-fonts/biz-udpmincho"

window.addEventListener("DOMContentLoaded", () => {
    BIZUDPMincho.inject()
})
```