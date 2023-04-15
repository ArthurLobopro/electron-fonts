# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GrapeNuts from "@electron-fonts/grape-nuts"

window.addEventListener("DOMContentLoaded", () => {
    GrapeNuts.inject()
})
```