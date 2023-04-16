# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NovaRound from "@electron-fonts/nova-round"

window.addEventListener("DOMContentLoaded", () => {
    NovaRound.inject()
})
```