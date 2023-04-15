# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GiveYouGlory from "@electron-fonts/give-you-glory"

window.addEventListener("DOMContentLoaded", () => {
    GiveYouGlory.inject()
})
```