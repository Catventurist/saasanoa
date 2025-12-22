---
title: Kenttä
description: Dokumentoi APIn parametrit, ominaisuudet ja asetusvaihtoehdot selkeästi.
framework: nuxt
category: components
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Field.vue
---

## Käyttö

Kenttä, ominaisuus tai parametri näytillä sisällössä.

::code-preview
::field{name="name" type="string" required class="w-full"}
`description` voidaan asettaa ominaisuudeksi tai oletuslohkoon täydellä **markdown**-tuella.
::

#code

```mdc
::field{name="name" type="string" required}
`description` voidaan asettaa ominaisuudeksi tai oletuslohkoon täydellä **markdown**-tuella.
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
