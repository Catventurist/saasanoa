---
title: Koodiryhmä
description: Yhdistä useampi koodiesimerkki välilehtiin vertailun helpottamiseksi.
framework: nuxt
category: components
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeGroup.vue
---

## Usage
Lisää koodilohkot `code-group`-komponentin sisään ryhmittäen ne välilehtiin.

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full"}

:::code-group

```bash [pnpm]
pnpm add @nuxt/ui
```

```bash [yarn]
yarn add @nuxt/ui
```

```bash [npm]
npm install @nuxt/ui
```

```bash [bun]
bun add @nuxt/ui
```

:::

#code

````mdc
::code-group

```bash [pnpm]
pnpm add @nuxt/ui
```

```bash [yarn]
yarn add @nuxt/ui
```

```bash [npm]
npm install @nuxt/ui
```

```bash [bun]
bun add @nuxt/ui
```

::
````

::

::note{to="/fi/docs/essentials/code-blocks"}

`ProsePre`-komponentin tapaan `CodeGroup` hoitaa tiedostonimet, kuvakkeet ja kopiointipainikkeen.
::

## API

### Ominaisuudet

:component-props{prose}

### Osiot

:component-slots{prose}

## Teema

:component-theme{prose}
