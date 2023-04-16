# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RockSalt from "@electron-fonts/rock-salt"

window.addEventListener("DOMContentLoaded", () => {
    RockSalt.inject()
})
```