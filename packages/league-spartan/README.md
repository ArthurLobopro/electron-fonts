# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LeagueSpartan from "@electron-fonts/league-spartan"

window.addEventListener("DOMContentLoaded", () => {
    LeagueSpartan.inject()
})
```