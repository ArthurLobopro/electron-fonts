# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TiroDevanagariSanskrit from "@electron-fonts/tiro-devanagari-sanskrit"

window.addEventListener("DOMContentLoaded", () => {
    TiroDevanagariSanskrit.inject()
})
```