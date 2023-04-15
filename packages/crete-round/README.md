# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CreteRound from "@electron-fonts/crete-round"

window.addEventListener("DOMContentLoaded", () => {
    CreteRound.inject()
})
```