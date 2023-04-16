# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Redacted from "@electron-fonts/redacted"

window.addEventListener("DOMContentLoaded", () => {
    Redacted.inject()
})
```