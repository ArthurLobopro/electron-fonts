# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KumbhSans from "@electron-fonts/kumbh-sans"

window.addEventListener("DOMContentLoaded", () => {
    KumbhSans.inject()
})
```