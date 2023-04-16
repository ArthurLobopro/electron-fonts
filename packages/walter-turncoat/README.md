# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import WalterTurncoat from "@electron-fonts/walter-turncoat"

window.addEventListener("DOMContentLoaded", () => {
    WalterTurncoat.inject()
})
```