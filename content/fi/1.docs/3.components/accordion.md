---
title: Haitari
description: Luo laajenevia sisältöosioita paremman tiedonhallinnan saavuttamiseksi.'
framework: nuxt
category: components
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Accordion.vue
---

## Käyttö

Käytä `accordion` ja `accordion-item`-haitarikomponentteja näyttääksesi [Haitarin](/fi/docs/components/accordion) sisällössä.

::code-preview{class="[&>div]:*:my-0"}

:::accordion
---
defaultValue:
  - '1'
---

::accordion-item{label="Onko Nuxt UI ilmainen käyttää?" icon="i-lucide-circle-help"}
Kyllä! Nuxt UI on täysin ilmainen ja perustuu avoimeen lähdekoodiin MIT-lisenssillä. Kaikki yli 100 komponenttia on kaikkien käytettävissä.
::

::accordion-item{label="Voinko käyttää Nuxt UI:ta Vuessa ilman Nuxtia?" icon="i-lucide-circle-help"}
Kyllä! Vaikka optimointi on Nuxtille, Nuxt UI toimii mainiosti monissa Vue-projekteissa Vite-lisäosan avulla. Voit lukea [asennusoppaan](/fi/docs/getting-started/installation) alkuun pääsemiseksi.
::

::accordion-item{label="Onko Nuxt UI tuotantovalmis?" icon="i-lucide-circle-help"}
Kyllä! Nuxt UI:ta käytetään tuhansissa ohjelmistoissa laajoine testeineen, tuoreine päivityksineen ja aktiivisella ylläpidolla.
::

:::

#code

```mdc
::accordion
---
defaultValue:
  - '1'
---

::accordion-item{label="Onko Nuxt UI ilmainen käyttää?" icon="i-lucide-circle-help"}
Kyllä! Nuxt UI on täysin ilmainen ja perustuu avoimeen lähdekoodiin MIT-lisenssillä. Kaikki yli 100 komponenttia on kaikkien käytettävissä.
::

::accordion-item{label="Voinko käyttää Nuxt UI:ta Vuessa ilman Nuxtia?" icon="i-lucide-circle-help"}
Kyllä! Vaikka optimointi on Nuxtille, Nuxt UI toimii mainiosti monissa Vue-projekteissa Vite-lisäosan avulla. Voit lukea [asennusoppaan](/fi/docs/getting-started/installation) alkuun pääsemiseksi.
::

::accordion-item{label="Onko Nuxt UI tuotantovalmis?" icon="i-lucide-circle-help"}
Kyllä! Nuxt UI:ta käytetään tuhansissa ohjelmistoissa laajoine testeineen, tuoreine päivityksineen ja aktiivisella ylläpidolla.
::

::
```

::

## API

### Ominaisuudet

:component-props{prose}

### Osiot

:component-slots{prose}

## Teema

::component-theme{prose}
---
extra:
  - accordionItem
---
::
