# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RuslanDisplay from "@electron-fonts/ruslan-display"

window.addEventListener("DOMContentLoaded", () => {
    RuslanDisplay.inject()
})
```