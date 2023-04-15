# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Arima from "@electron-fonts/arima"

window.addEventListener("DOMContentLoaded", () => {
    Arima.inject()
})
```