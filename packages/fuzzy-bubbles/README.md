# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FuzzyBubbles from "@electron-fonts/fuzzy-bubbles"

window.addEventListener("DOMContentLoaded", () => {
    FuzzyBubbles.inject()
})
```