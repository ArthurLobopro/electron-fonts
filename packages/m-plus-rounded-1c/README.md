# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MPLUSRounded1c from "@electron-fonts/m-plus-rounded-1c"

window.addEventListener("DOMContentLoaded", () => {
    MPLUSRounded1c.inject()
})
```