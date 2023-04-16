# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Petemoss from "@electron-fonts/petemoss"

window.addEventListener("DOMContentLoaded", () => {
    Petemoss.inject()
})
```