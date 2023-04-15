# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DrSugiyama from "@electron-fonts/dr-sugiyama"

window.addEventListener("DOMContentLoaded", () => {
    DrSugiyama.inject()
})
```