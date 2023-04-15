# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import B612Mono from "@electron-fonts/b612-mono"

window.addEventListener("DOMContentLoaded", () => {
    B612Mono.inject()
})
```