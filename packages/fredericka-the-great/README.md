# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FrederickatheGreat from "@electron-fonts/fredericka-the-great"

window.addEventListener("DOMContentLoaded", () => {
    FrederickatheGreat.inject()
})
```