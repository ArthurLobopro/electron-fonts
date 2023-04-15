# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ClimateCrisis from "@electron-fonts/climate-crisis"

window.addEventListener("DOMContentLoaded", () => {
    ClimateCrisis.inject()
})
```