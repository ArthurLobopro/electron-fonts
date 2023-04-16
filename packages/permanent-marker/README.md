# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PermanentMarker from "@electron-fonts/permanent-marker"

window.addEventListener("DOMContentLoaded", () => {
    PermanentMarker.inject()
})
```