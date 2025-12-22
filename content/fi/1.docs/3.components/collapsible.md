---
title: Supistuva
description: Vaihda sisällön näkyvyyttä sulavalla sulkemisella ja avaamisella.
framework: nuxt
category: components
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Collapsible.vue
---

## Käyttö

Lisää sisältö `collapsible`-komponenttiin näyttääksesi [Supistuksen](/docs/components/collapsible) sisällössä.

::code-preview{class="[&>div]:*:w-full [&>div]:*:my-0"}

::collapsible

| Ominaisuus    | Oletus   | Tyyppi              |
|---------|-----------|--------------------------|
| `name`  |           | `string`{lang="ts-type"} |
| `size`  | `md`      | `string`{lang="ts-type"} |
| `color` | `neutral` | `string`{lang="ts-type"} |

::

#code

```mdc
::collapsible

| Ominaisuus    | Oletus   | Tyyppi              |
|---------|-----------|--------------------------|
| `name`  |           | `string`{lang="ts-type"} |
| `size`  | `md`      | `string`{lang="ts-type"} |
| `color` | `neutral` | `string`{lang="ts-type"} |

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
