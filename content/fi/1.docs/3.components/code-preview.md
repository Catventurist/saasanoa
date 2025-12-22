---
title: Koodin esikatselu
description: Näytä koodiesimerkkejä esikatselulla ja lähdekoodilla selkeämpään dokumentaatioon.
framework: nuxt
category: components
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodePreview.vue
---

## Käyttö
Lisää mitä tahansa sisältöä `code-preview`-komponentin sisään näyttääksesi esikatselun sekä lähdekoodin käyttäen `code`-osiota.

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full" label="Esikatselu"}

::code-preview{class="[&>div]:*:my-0"}
`inline code`

#code

```mdc
`inline code`
```

::

#code

````mdc
::code-preview
`inline code`

#code
```mdc
`inline code`
```
::
````

::

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Theme

:component-theme{prose}
