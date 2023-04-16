# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PathwayGothicOne from "@electron-fonts/pathway-gothic-one"

window.addEventListener("DOMContentLoaded", () => {
    PathwayGothicOne.inject()
})
```