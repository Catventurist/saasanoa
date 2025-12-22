---
title: Kortti
description: Luo korostettuja sisältölaatiokoita linkeillä ja navigaatiolla.
framework: nuxt
category: components
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Card.vue
---

## Käytä

Käytä markdownin oletusosiossa `card`-komponenttia korostaaksesi sisältöä.

Käytä `title`, `icon` ja `color`-ominaisuuksia muokataksesi. Voit myös lisätä minkä tahansa ominaisuuden [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)-komponentista.

::component-code{slug="card" prose}
---
hide:
  - class
ignore:
  - target
props:
  class: 'my-0 w-96'
  title: Startup
  icon: i-lucide-users
  color: primary
  to: 'https://nuxt.com'
  target: '_blank'
slots:
  default: Soveltuu parhaiten pienille ryhmille.
---

Soveltuu parhaiten pienille ryhmille.
::

## API

### Ominaisuudet

:component-props{prose}

### Osiot

:component-slots{prose}

## Teema

:component-theme{prose}
