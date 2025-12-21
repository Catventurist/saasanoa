<script setup lang="ts">
import { Motion } from 'motion-v'

const appConfig = useAppConfig()
const localePath = useLocalePath()
const columns = [{
  label: $t('header.resources'),
  children: [{
    label: $t('header.changelog.title'),
    to: localePath('/changelog'),
    icon: appConfig.ui.icons.logs
  }, {
    label: $t('header.docs'),
    icon: appConfig.ui.icons.book,
    to: localePath('/docs/getting-started')
  }, {
    label: $t('header.help'),
    icon: appConfig.ui.icons.help,
    to: localePath('/docs/getting-started')
  }, {
    label: $t('header.roadmap'),
    icon: appConfig.ui.icons.map,
    to: localePath('/pricing')
  }]
}, {
  label: $t('header.community'),
  children: [{
    label: $t('header.blog'),
    to: localePath('/blog'),
    icon: appConfig.ui.icons.notebook
  }, {
    label: $t('header.pricing.title'),
    to: localePath('/pricing'),
    icon: appConfig.ui.icons.bitcoin
  }, {
    label: $t('header.about'),
    to: localePath('/docs/getting-started'),
    icon: appConfig.ui.icons.about
  }, {
    label: $t('header.users.title'),
    to: localePath('/authors'),
    icon: appConfig.ui.icons.users
  }]
}]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  toast.add({
    title: $t('header.subscribed.title'),
    description: $t('header.subscribed.description')
  })
}
</script>

<template>
  <Motion
    as-child
    :initial="{ opacity: 0, y: 10 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.3, y: { type: 'spring', stiffness: 260, damping: 20 } }"
  >
    <USeparator
      icon="lucide:cat"
      class="h-1 bg-radial from-primary/40 to-transparent mt-2"
    />
    <UFooter :ui="{ top: 'border-b border-default' }">
      <template #top>
        <UContainer>
          <UFooterColumns :columns="columns">
            <template #right>
              <form @submit.prevent="onSubmit">
                <UFormField
                  name="email"
                  :label="$t('header.subscribe.description')"
                  size="lg"
                >
                  <UInput
                    v-model="email"
                    type="email"
                    class="w-full"
                    :placeholder="$t('header.subscribe.enter')"
                    disabled
                  >
                    <template #trailing>
                      <UButton
                        type="submit"
                        size="xs"
                        color="info"
                        variant="soft"
                        :trailing-icon="appConfig.ui.icons.send"
                        :label="$t('header.subscribe.title')"
                      />
                    </template>
                  </UInput>
                </UFormField>
              </form>
            </template>
          </UFooterColumns>
        </UContainer>
      </template>
      <template #left>
        <div class="text-muted text-sm flex text-center">
          Catventurist 💜 {{ new Date().getFullYear() }}
        </div>
      </template>
      <template #right>
        <UButton
          to="https://t.me/catventurists"
          target="_blank"
          icon="i-simple-icons-telegram"
          aria-label="Telegram"
          color="info"
          variant="ghost"
          title="Telegram"
        />
        <UButton
          to="https://ecency.com/@catventurist"
          target="_blank"
          icon="i-simple-icons-hive-blockchain"
          aria-label="Ecency/Hive"
          color="error"
          variant="ghost"
          title="Ecency/Hive"
        />
        <UButton
          to="https://github.com/catventurist"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
          title="Github"
        />
      </template>
    </UFooter>
  </Motion>
</template>
