# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TiroDevanagariMarathi from "@electron-fonts/tiro-devanagari-marathi"

window.addEventListener("DOMContentLoaded", () => {
    TiroDevanagariMarathi.inject()
})
```