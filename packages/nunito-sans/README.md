# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NunitoSans from "@electron-fonts/nunito-sans"

window.addEventListener("DOMContentLoaded", () => {
    NunitoSans.inject()
})
```