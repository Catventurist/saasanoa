---
title: Korttiryhmä
description: Järjestä useita kortteja reagoiviin ruudukkoasetteluihin parempaan esittelyyn.
framework: nuxt
category: components
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CardGroup.vue
---

## Käyttö

Lisää `card`-korttikompponentit `card-group`-korttiryhmäkomponentin sisään yhdistääksesi ne ruudukkonäkymään.

::code-preview

:::card-group{class="w-full my-0"}

::card
---
title: Dashboard
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/dashboard
target: _blank
---
Kojelauta usean sarakkeen ulkoasulla.
::

::card
---
title: SaaS
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/saas
target: _blank
---
Malli etu-, hinta-, dokumentaatio- ja blogisivuille.
::

::card
---
title: Docs
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/docs
target: _blank
---
Dokumentaatiota `@nuxt/content`:n avulla.
::

::card
---
title: Landing
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/landing
target: _blank
---
Etusivu nopeaan aloitukseen.
::

:::

#code

```mdc
::card-group

::card
---
title: Dashboard
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/dashboard
target: _blank
---
Kojelauta usean sarakkeen ulkoasulla.
::

::card
---
title: SaaS
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/saas
target: _blank
---
Malli etu-, hinta-, dokumentaatio- ja blogisivuille.
::

::card
---
title: Docs
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/docs
target: _blank
---
Dokumentaatiota `@nuxt/content`:n avulla.
::

::card
---
title: Landing
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/landing
target: _blank
---
Etusivu nopeaan aloitukseen.
::

::
```

::

## API

### Osiot

:component-slots{prose}

## Teema

:component-theme{prose}
