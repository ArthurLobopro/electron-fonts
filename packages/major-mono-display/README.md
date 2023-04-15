# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MajorMonoDisplay from "@electron-fonts/major-mono-display"

window.addEventListener("DOMContentLoaded", () => {
    MajorMonoDisplay.inject()
})
```