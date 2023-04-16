# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikMarkerHatch from "@electron-fonts/rubik-marker-hatch"

window.addEventListener("DOMContentLoaded", () => {
    RubikMarkerHatch.inject()
})
```