# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Rationale from "@electron-fonts/rationale"

window.addEventListener("DOMContentLoaded", () => {
    Rationale.inject()
})
```