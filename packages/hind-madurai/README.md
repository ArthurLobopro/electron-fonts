# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import HindMadurai from "@electron-fonts/hind-madurai"

window.addEventListener("DOMContentLoaded", () => {
    HindMadurai.inject()
})
```