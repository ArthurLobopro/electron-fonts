# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AlumniSansCollegiateOne from "@electron-fonts/alumni-sans-collegiate-one"

window.addEventListener("DOMContentLoaded", () => {
    AlumniSansCollegiateOne.inject()
})
```