# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NewTegomin from "@electron-fonts/new-tegomin"

window.addEventListener("DOMContentLoaded", () => {
    NewTegomin.inject()
})
```