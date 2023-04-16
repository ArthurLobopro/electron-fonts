# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Play from "@electron-fonts/play"

window.addEventListener("DOMContentLoaded", () => {
    Play.inject()
})
```