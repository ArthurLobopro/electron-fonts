# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BrunoAce from "@electron-fonts/bruno-ace"

window.addEventListener("DOMContentLoaded", () => {
    BrunoAce.inject()
})
```