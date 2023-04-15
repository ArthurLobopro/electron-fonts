# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GrandHotel from "@electron-fonts/grand-hotel"

window.addEventListener("DOMContentLoaded", () => {
    GrandHotel.inject()
})
```