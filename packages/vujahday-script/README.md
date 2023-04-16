# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import VujahdayScript from "@electron-fonts/vujahday-script"

window.addEventListener("DOMContentLoaded", () => {
    VujahdayScript.inject()
})
```