<script setup lang="ts">
const videoModalOpen = ref(false)
const isMobile = ref(false)
onMounted(() => {
  isMobile.value = window.innerWidth < 768
})
</script>

<template>
  <div class="">
    <UButton
      size="xl"
      color="neutral"
      variant="subtle"
      trailing-icon="i-lucide-play-circle"
      @click="videoModalOpen = true"
    >
      Video
    </UButton>
    <UModal
      v-model:open="videoModalOpen"
      :ui="{ content: 'sm:max-w-4xl lg:max-w-5xl aspect-[16/9]' }"
    >
      <template #content>
        <div class="p-3 h-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/dCxSsr5xuL8"
            title="Nuxt in 100 Seconds"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </template>
    </UModal>
  </div>
</template>
