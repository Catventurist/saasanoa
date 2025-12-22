---
title: Välilehdet
description: Järjestele aiheeseen liittyvät sisällöt interaktiivisiin välilehtiliittymiin.
framework: nuxt
category: components
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Tabs.vue
---

## Käyttö

Käytä `tabs` ja `tabs-item`-komponentteja näyttääksesi [Välilehdet](/fi/docs/components/tabs) sisällössä.

::code-preview{class="[&>div]:*:my-0"}

:::tabs{class="w-full"}

:::tabs-item{label="Koodi" icon="i-lucide-code"}

```mdc
::callout
Hellurei ja hellät tunteet!
::
```

:::

:::tabs-item{label="Esikatselu" icon="i-lucide-eye"}

::callout
Hellurei ja hellät tunteet!
::

:::

:::

#code

````mdc
::tabs

:::tabs-item{label="Koodi" icon="i-lucide-code"}

```mdc
::callout
Hellurei ja hellät tunteet!
::
```

:::

:::tabs-item{label="Esikatselu" icon="i-lucide-eye"}

::callout
Hellurei ja hellät tunteet!
::

:::

::
````

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
  - tabsItem
---
::
