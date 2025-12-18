<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: author } = await useAsyncData('authors-' + slug.value, () => queryCollection('authors_' + locale.value as keyof Collections).path(route.path).first(), {
  watch: [locale]
})
if (!author.value) {
  throw createError({ statusCode: 404, statusMessage: $t('empty.authors'), fatal: true })
}

const title = author.value.seo?.title || author.value.title
const description = author.value.seo?.description || author.value.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImageComponent('Saas')
</script>

<template>
  <UContainer v-if="author">
    <UPageHeader
      :title="author.title"
      :description="author.description"
    >
      <template #headline>
        <UBadge
          :title="author.title"
          variant="subtle"
        />
      </template>
      <div class="flex flex-wrap items-center gap-3 mt-4">
        <UAvatar
          :src="author.avatar.src"
          alt="Avatar"
          size="2xl"
        />
        {{ author.name }}
      </div>
    </UPageHeader>
    <UPage>
      <UPageBody>
        <ContentRenderer
          v-if="author"
          :value="author"
        />
      </UPageBody>
    </UPage>
  </UContainer>
</template>
