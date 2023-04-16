# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NewRocker from "@electron-fonts/new-rocker"

window.addEventListener("DOMContentLoaded", () => {
    NewRocker.inject()
})
```