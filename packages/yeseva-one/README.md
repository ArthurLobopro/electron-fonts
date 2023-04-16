# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import YesevaOne from "@electron-fonts/yeseva-one"

window.addEventListener("DOMContentLoaded", () => {
    YesevaOne.inject()
})
```