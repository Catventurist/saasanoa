<template>
  <UContainer>
    <AppHeader />
    <UMain class="flex justify-center">
      <UPageCard
        variant="subtle"
        class="max-w-sm w-full"
      >
        <slot />
      </UPageCard>
    </UMain>
    <AppFooter />
  </UContainer>
</template>
