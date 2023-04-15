# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FiraSans from "@electron-fonts/fira-sans"

window.addEventListener("DOMContentLoaded", () => {
    FiraSans.inject()
})
```