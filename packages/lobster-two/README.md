# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LobsterTwo from "@electron-fonts/lobster-two"

window.addEventListener("DOMContentLoaded", () => {
    LobsterTwo.inject()
})
```