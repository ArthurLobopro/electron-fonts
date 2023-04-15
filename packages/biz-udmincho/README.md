# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BIZUDMincho from "@electron-fonts/biz-udmincho"

window.addEventListener("DOMContentLoaded", () => {
    BIZUDMincho.inject()
})
```