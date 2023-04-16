# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NovaSlim from "@electron-fonts/nova-slim"

window.addEventListener("DOMContentLoaded", () => {
    NovaSlim.inject()
})
```