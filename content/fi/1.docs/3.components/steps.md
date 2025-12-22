---
title: Askeleet
description: Muunna otsikot numeroiduiksi vaiheittaisiksi oppaiksi ja ohjeiksi.
framework: nuxt
category: components
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Steps.vue
---

## Käyttö

Lisää otsikot Askel-komponenttiin näyttääksesi listan.

Käytä `level`-ominaisuutta määrittääksesi, mitä otsikoita käytetään askelissa. 

:::code-preview{class="[&>div]:*:w-full"}
::steps{level="4"}

#### Lisää Nuxt UI moduuli tiedostoon `nuxt.config.ts`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

#### Tuo Tailwind CSS-tiedostoon

```css [assets/css/main.css]
@import "tailwindcss";
```

#### Käynnistä kehityspalvelin

```bash
npm run dev
```

::

#code

````mdc
::steps{level="4"}

#### Lisää Nuxt UI moduuli tiedostoon `nuxt.config.ts`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

#### Tuo Tailwind CSS-tiedostoon

```css [assets/css/main.css]
@import "tailwindcss";
```

#### Käynnistä kehityspalvelin

```bash
npm run dev
```

::
````

:::

## API

### Ominaisuudet

:component-props{prose}

### Osiot

:component-slots{prose}

## Teema

:component-theme{prose}
