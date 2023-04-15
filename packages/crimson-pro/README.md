# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CrimsonPro from "@electron-fonts/crimson-pro"

window.addEventListener("DOMContentLoaded", () => {
    CrimsonPro.inject()
})
```