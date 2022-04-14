![spirus](/public/made_with_spirus.png?height=100)
# Spirus
HTML5 Electron Typescript Canvas game engine thing, scrapped off one of my games called Yushite

## How to use?
Download with degit
```bash
eclipse@root $: npx degit spirusdev/spirus spirus-project
eclipse@root $: cd spirus-project
```

## Get started
Install dependencies
```bash
eclipse@root $: npm install
```

Now develop real-time with
```bash
eclipse@root $: npm run watch
```

You should get an electron window pop up, if so then good job.

## Compilation
If you wish to compile, you will have to do it yourself.
Use something like electron-packager, but make sure to build.
```bash
eclipse@root $: npm run build
```

Or if you just want the HTML file for an HTML5 build (e.g: itch.io),
simply copy the `/public` folder. Remember that electron-only nessescities may not work.