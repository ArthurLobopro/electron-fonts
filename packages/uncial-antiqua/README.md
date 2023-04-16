# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import UncialAntiqua from "@electron-fonts/uncial-antiqua"

window.addEventListener("DOMContentLoaded", () => {
    UncialAntiqua.inject()
})
```