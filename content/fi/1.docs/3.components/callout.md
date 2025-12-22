---
title: Huomautus
description: Korostaa tärkeää tietoa väritetyillä laatikoilla ja kuvakkeilla.
framework: nuxt
category: components
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Callout.vue
---

## Käyttö

Käytä markdownin oletusosiossa `callout`-komponenttia näyttääksesi silmiinpistävää tietoa sisällössä.

Käytä `icon` ja `color`-ominaisuuksia muokkaamiseen. Voit myös lisätä minkä tahansa ominaisuuden [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)-komponentista.

::component-code{slug="callout" prose}
---
prettier: true
props:
  icon: i-lucide-square-play
  color: neutral
  to: '/fi/docs/getting-started/installation'
  class: 'w-full my-0'
hide:
  - class
slots:
  default: Tämä on `callout` täydellä **markdown**-tuella.
---
Opi kuinka asentaa `@nuxt/ui` projektiin.
::

## Oikotiet
Voit myös käyttää `note`, `tip`, `warning` ja `caution`-oikoteitä esimääritetyillä kuvakkeilla ja väreillä.

::code-preview

:::div{class="flex flex-col gap-4 w-full"}

::note{class="w-full my-0"}
Tässä hieman lisätietoa.
::

::tip{class="w-full my-0"}
Hyödyllinen ehdotus.
::

::warning{class="w-full my-0"}
Tämä toiminto voi johtaa arvaamattomiin lopputuloksiin.
::

::caution{class="w-full my-0"}
Tämä toiminto on peruuttamaton.
::

:::

#code

```mdc
::note
Tässä hieman lisätietoa.
::

::tip
Hyödyllinen ehdotus.
::

::warning
Tämä toiminto voi johtaa arvaamattomiin lopputuloksiin.
::

::caution
Tämä toiminto on peruuttamaton.
::
```

::

## API

### Ominaisuudet

:component-props{prose}

### Osiot

:component-slots{prose}

## Teema

:component-theme{prose}
