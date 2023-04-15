# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BalsamiqSans from "@electron-fonts/balsamiq-sans"

window.addEventListener("DOMContentLoaded", () => {
    BalsamiqSans.inject()
})
```