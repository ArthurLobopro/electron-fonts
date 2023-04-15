# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DonegalOne from "@electron-fonts/donegal-one"

window.addEventListener("DOMContentLoaded", () => {
    DonegalOne.inject()
})
```