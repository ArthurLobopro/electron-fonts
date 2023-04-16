# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TurretRoad from "@electron-fonts/turret-road"

window.addEventListener("DOMContentLoaded", () => {
    TurretRoad.inject()
})
```