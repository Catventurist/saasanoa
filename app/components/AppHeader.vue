<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const appConfig = useAppConfig()

const items = computed(() => [{
  label: $t('header.docs'),
  to: localePath('/docs/getting-started'),
  icon: appConfig.ui.icons.book,
  active: route.path.startsWith(localePath('/docs')),
  children: [
    {
      label: $t('header.introduction.title'),
      description: $t('header.introduction.description'),
      icon: appConfig.ui.icons.book,
      to: localePath('/docs/getting-started')
    },
    {
      label: $t('header.essentials.title'),
      description: $t('header.essentials.description'),
      icon: appConfig.ui.icons.wrench,
      to: localePath('/docs/essentials')
    }
  ]
}, {
  label: $t('header.pages'),
  icon: appConfig.ui.icons.pages,
  children: [
    {
      label: $t('header.changelog.title'),
      description: $t('header.changelog.description'),
      to: localePath('/changelog'),
      icon: appConfig.ui.icons.logs
    }, {
      label: $t('header.pricing.title'),
      description: $t('header.pricing.description'),
      to: localePath('/pricing'),
      icon: appConfig.ui.icons.bitcoin
    }, {
      label: $t('header.users.title'),
      description: $t('header.users.description'),
      to: localePath('/authors'),
      icon: appConfig.ui.icons.users
    }
  ]
}, {
  label: $t('header.blog'),
  to: localePath('/blog'),
  icon: appConfig.ui.icons.notebook,
  active: route.path.startsWith(localePath('/blog'))
}])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink
        :to="localePath('/')"
        class="flex flex-row gap-2 items-center rounded-xl duration-300 hover:scale-110 focus:scale-90"
      >
        <UColorModeImage
          light="/logo-light.webp"
          dark="/logo-dark.webp"
          :width="24"
          :height="24"
          alt="Logo"
          class="w-auto h-6 shrink-0"
        />
        <p class="text-xl text-primary">
          {{ $t('nav.site.title') }}
        </p>
      </NuxtLink>
    </template>
    <UNavigationMenu
      :items="items"
      variant="link"
      class="flex-1"
    />

    <template #right>
      <LangSwitcher />
      <UContentSearchButton />
      <ThemePicker />
      <ColorModeButton />
      <UButton
        :icon="appConfig.ui.icons.login"
        color="neutral"
        variant="ghost"
        :to="localePath('/login')"
        class="lg:hidden"
      />
      <UButton
        :title="$t('header.signin')"
        color="neutral"
        variant="ghost"
        :to="localePath('/login')"
        :icon="appConfig.ui.icons.login"
        class="hidden lg:inline-flex"
      />
      <UButton
        :title="$t('header.signup')"
        color="neutral"
        :trailing-icon="appConfig.ui.icons.signup"
        variant="soft"
        class="hidden lg:inline-flex"
        :to="localePath('/signup')"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
      <USeparator class="my-6" />
      <UButton
        :icon="appConfig.ui.icons.login"
        :title="$t('header.signin')"
        color="neutral"
        variant="subtle"
        :to="localePath('/login')"
        block
        class="mb-3"
      />
      <UButton
        :icon="appConfig.ui.icons.signup"
        :title="$t('header.signup')"
        color="neutral"
        variant="soft"
        :to="localePath('/signup')"
        block
      />
    </template>
  </UHeader>
</template>
