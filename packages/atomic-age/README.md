# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AtomicAge from "@electron-fonts/atomic-age"

window.addEventListener("DOMContentLoaded", () => {
    AtomicAge.inject()
})
```