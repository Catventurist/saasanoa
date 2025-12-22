---
title: Kenttäryhmä
description: Ryhmä yhdistettyjä kenttiä kattavaan API-dokumentaatioon.
framework: nuxt
category: components
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/FieldGroup.vue
---

## Käyttö

Ryhmä kenttiä yhdessä listassa.

::code-preview

::field-group{class="my-0"}

  ::field{name="analytics" type="boolean"}
  Oletuksena `false` - Mahdollistaa projektin analytiiikan(ei käytetä).
  ::

  ::field{name="blob" type="boolean"}
  Oletuksena `false` - Mahdollistaa blob-varaston staattisten tiedostojen tallentamisen, kuten kuvien, videoiden, yms.
  ::

  ::field{name="cache" type="boolean"}
  Oletuksena `false` - Mahdollistaa välimuistin tallentaaksesi palvelimen reittien vastaukset käyttäen Nitron `cachedEventHandler` ja `cachedFunction`-toimintoja
  ::

  ::field{name="database" type="boolean"}
  Oletuksena `false` - Mahdollistaa SQL-tietokannan tallentaaksesi ohjelmiston datan.
  ::

::

#code

```mdc
::field-group
  ::field{name="analytics" type="boolean"}
    Oletuksena `false` - Mahdollistaa projektin analytiiikan(ei käytetä).
  ::

  ::field{name="blob" type="boolean"}
    Oletuksena `false` - Mahdollistaa blob-varaston staattisten tiedostojen tallentamisen, kuten kuvien, videoiden, yms.
  ::

  ::field{name="cache" type="boolean"}
    Oletuksena `false` - Mahdollistaa välimuistin tallentaaksesi palvelimen reittien vastaukset käyttäen Nitron `cachedEventHandler` ja `cachedFunction`-toimintoja
  ::

  ::field{name="database" type="boolean"}
    Oletuksena `false` - Mahdollistaa SQL-tietokannan tallentaaksesi ohjelmiston datan.
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

:component-theme{prose}
