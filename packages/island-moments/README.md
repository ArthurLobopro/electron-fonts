# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IslandMoments from "@electron-fonts/island-moments"

window.addEventListener("DOMContentLoaded", () => {
    IslandMoments.inject()
})
```