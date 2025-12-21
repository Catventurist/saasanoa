<script setup lang="ts">
const localePath = useLocalePath()
const appConfig = useAppConfig()
</script>

<template>
  <div class="flex flex-col gap-2 w-full items-center justify-around">
    <UButton
      :to="localePath('/blog')"
      :icon="appConfig.ui.icons.notebook"
      :aria-label="$t('header.blog.title')"
      color="info"
      variant="ghost"
      :title="$t('header.blog.title')"
    />
    <UButton
      :to="localePath('/changelog')"
      :icon="appConfig.ui.icons.logs"
      :aria-label="$t('header.changelog.title')"
      color="error"
      variant="ghost"
      :title="$t('header.changelog.title')"
    />
    <UButton
      :to="localePath('/pricing')"
      :icon="appConfig.ui.icons.bitcoin"
      :aria-label="$t('header.pricing.title')"
      color="neutral"
      variant="ghost"
      :title="$t('header.pricing.title')"
    />
  </div>
</template>
