# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KumarOneOutline from "@electron-fonts/kumar-one-outline"

window.addEventListener("DOMContentLoaded", () => {
    KumarOneOutline.inject()
})
```