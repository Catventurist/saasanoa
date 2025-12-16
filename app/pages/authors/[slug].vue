<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: post } = await useAsyncData('authors-' + slug.value, () => queryCollection('authors_' + locale.value as keyof Collections).path(route.path).first(), {
  watch: [locale]
})
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: $t('empty.authors'), fatal: true })
}

const title = post.value.seo?.title || post.value.title
const description = post.value.seo?.description || post.value.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImageComponent('Saas')
</script>

<template>
  <UContainer v-if="post">
    <UPageHeader :title="post.title" :description="post.description">
      <template #headline>
        <UBadge :title="post.title" variant="subtle" />
      </template>
      <div class="flex flex-wrap items-center gap-3 mt-4">
        <UAvatar :src="post.avatar.src" alt="Avatar" size="2xl" />
        {{ post.name }}
      </div>
    </UPageHeader>
    <UPage>
      <UPageBody>
        <ContentRenderer v-if="post" :value="post" />
      </UPageBody>
    </UPage>
  </UContainer>
</template>
