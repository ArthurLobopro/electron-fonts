# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Karma from "@electron-fonts/karma"

window.addEventListener("DOMContentLoaded", () => {
    Karma.inject()
})
```