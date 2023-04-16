# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RoadRage from "@electron-fonts/road-rage"

window.addEventListener("DOMContentLoaded", () => {
    RoadRage.inject()
})
```