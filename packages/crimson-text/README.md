# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CrimsonText from "@electron-fonts/crimson-text"

window.addEventListener("DOMContentLoaded", () => {
    CrimsonText.inject()
})
```