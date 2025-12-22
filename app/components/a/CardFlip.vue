<script setup lang="ts">
</script>

<template>
  <div class="flex items-center justify-center">
    <AFlipCard>
      <template #front>
        <UColorModeImage
          dark="/catbirchdark.webp"
          light="/catbirch.webp"
          alt="cat"
          :height="200"
          :width="200"
          class="size-full rounded-md object-cover"
        />
        <div class="absolute bottom-4 left-4 text-2xl font-bold text-primary text-shadow-xs text-shadow-white">
          {{ $t('site.title') }}
        </div>
      </template>
      <template #back>
        <div class="relative flex min-h-full items-center text-center rounded-xl flex-col gap-2 bg-linear-to-t from-primary/20 to-default/80">
          <UColorModeAvatar
            light="/logo-light.webp"
            dark="/logo-dark.webp"
          />
          <h1 class="text-xl font-bold text-primary text-shadow-sm text-shadow-white">
            {{ $t('site.title') }}
          </h1>
          <p class="mt-1 py-4 text-base font-medium leading-normal text-muted">
            {{ $t('site.description') }}
          </p>
          <ASnowBg class="absolute top-0 size-full" />
        </div>
      </template>
    </AFlipCard>
  </div>
</template>
