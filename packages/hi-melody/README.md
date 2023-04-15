# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import HiMelody from "@electron-fonts/hi-melody"

window.addEventListener("DOMContentLoaded", () => {
    HiMelody.inject()
})
```