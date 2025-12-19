<script setup lang="ts">
import colors from 'tailwindcss/colors'
import { useClipboard } from '@vueuse/core'
import { themeIcons } from '@/utils/theme'
import { omit } from '#ui/utils'

const appConfig = useAppConfig()
const colorMode = useColorMode()

const open = ref(false)

const { copy: copyCSS, copied: copiedCSS } = useClipboard()
const { copy: copyAppConfig, copied: copiedAppConfig } = useClipboard()

const neutralColors = [
  { name: $t('theme.slate'), label: 'slate' },
  { name: $t('theme.gray'), label: 'gray' },
  { name: $t('theme.zinc'), label: 'zinc' },
  { name: $t('theme.neutral'), label: 'neutral' },
  { name: $t('theme.stone'), label: 'stone' }
]

const mainColors = [
  { name: $t('theme.red'), label: 'red', src: colors.red },
  { name: $t('theme.orange'), label: 'orange', src: colors.orange },
  { name: $t('theme.amber'), label: 'amber', src: colors.amber },
  { name: $t('theme.yellow'), label: 'yellow', src: colors.yellow },
  { name: $t('theme.lime'), label: 'lime', src: colors.lime },
  { name: $t('theme.green'), label: 'green', src: colors.green },
  { name: $t('theme.emerald'), label: 'emerald', src: colors.emerald },
  { name: $t('theme.teal'), label: 'teal', src: colors.teal },
  { name: $t('theme.cyan'), label: 'cyan', src: colors.cyan },
  { name: $t('theme.sky'), label: 'sky', src: colors.sky },
  { name: $t('theme.blue'), label: 'blue', src: colors.blue },
  { name: $t('theme.indigo'), label: 'indigo', src: colors.indigo },
  { name: $t('theme.violet'), label: 'violet', src: colors.violet },
  { name: $t('theme.purple'), label: 'purple', src: colors.purple },
  { name: $t('theme.fuchsia'), label: 'fuchsia', src: colors.fuchsia },
  { name: $t('theme.pink'), label: 'pink', src: colors.pink },
  { name: $t('theme.rose'), label: 'rose', src: colors.rose }
]

const neutral = computed({
  get() {
    return appConfig.ui.colors.neutral
  },
  set(option) {
    appConfig.ui.colors.neutral = option
    window.localStorage.setItem('nuxt-ui-neutral', appConfig.ui.colors.neutral)
  }
})

/* const colorsToOmit = ['inherit', 'current', 'transparent', 'black', 'white', ...neutralColors]
const primaryColors = Object.keys(omit(colors, colorsToOmit as any)) */
const primary = computed({
  get() {
    return appConfig.ui.colors.primary
  },
  set(option) {
    appConfig.ui.colors.primary = option
    window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.colors.primary)
    setBlackAsPrimary(false)
  }
})

const radiuses = [0, 0.125, 0.25, 0.375, 0.5]
const radius = computed({
  get() {
    return appConfig.theme.radius
  },
  set(option) {
    appConfig.theme.radius = option
    window.localStorage.setItem('nuxt-ui-radius', String(appConfig.theme.radius))
  }
})

const fonts = ['Finlandica', 'Arima Madurai', 'Chivo Mono', 'Caveat']
const font = computed({
  get() {
    return appConfig.theme.font
  },
  set(option) {
    appConfig.theme.font = option
    window.localStorage.setItem('nuxt-ui-font', appConfig.theme.font)
  }
})

const icons = [{
  label: 'Lucide',
  icon: 'i-lucide-feather',
  value: 'lucide'
}, {
  label: 'Tabler',
  icon: 'i-tabler-brand-tabler',
  value: 'tabler'
}]
const icon = computed({
  get() {
    return appConfig.theme.icons
  },
  set(option) {
    appConfig.theme.icons = option
    appConfig.ui.icons = themeIcons[option as keyof typeof themeIcons] as any
    window.localStorage.setItem('nuxt-ui-icons', appConfig.theme.icons)
  }
})

const modes = [
  { label: 'light', name: $t('theme.light'), icon: appConfig.ui.icons.light },
  { label: 'dark', name: $t('theme.dark'), icon: appConfig.ui.icons.dark },
  { label: 'system', name: $t('theme.system'), icon: appConfig.ui.icons.system }
]
const mode = computed({
  get() {
    return colorMode.value
  },
  set(option) {
    colorMode.preference = option
  }
})

function setBlackAsPrimary(value: boolean) {
  appConfig.theme.blackAsPrimary = value
  window.localStorage.setItem('nuxt-ui-black-as-primary', String(value))
}

const hasCSSChanges = computed(() => {
  return appConfig.theme.radius !== 0.25
    || appConfig.theme.blackAsPrimary
    || appConfig.theme.font !== 'Finlandica'
})

const hasAppConfigChanges = computed(() => {
  return appConfig.ui.colors.primary !== 'purple'
    || appConfig.ui.colors.neutral !== 'neutral'
    || appConfig.theme.icons !== 'lucide'
})

function exportCSS() {
  const lines = [
    '@import "tailwindcss";',
    '@import "@nuxt/ui";'
  ]

  if (appConfig.theme.font !== 'Finlandica') {
    lines.push('', '@theme {', `  --font-sans: '${appConfig.theme.font}', sans-serif;`, '}')
  }

  const rootLines: string[] = []
  if (appConfig.theme.radius !== 0.25) {
    rootLines.push(`  --ui-radius: ${appConfig.theme.radius}rem;`)
  }
  if (appConfig.theme.blackAsPrimary) {
    rootLines.push('  --ui-primary: black;')
  }

  if (rootLines.length) {
    lines.push('', ':root {', ...rootLines, '}')
  }

  if (appConfig.theme.blackAsPrimary) {
    lines.push('', '.dark {', '  --ui-primary: white;', '}')
  }

  copyCSS(lines.join('\n'))
}

function exportAppConfig() {
  const config: Record<string, any> = {}

  if (appConfig.ui.colors.primary !== 'purple' || appConfig.ui.colors.neutral !== 'neutral') {
    config.ui = { colors: {} }
    if (appConfig.ui.colors.primary !== 'purple') {
      config.ui.colors.primary = appConfig.ui.colors.primary
    }
    if (appConfig.ui.colors.neutral !== 'neutral') {
      config.ui.colors.neutral = appConfig.ui.colors.neutral
    }
  }

  if (appConfig.theme.icons !== 'lucide') {
    const iconSet = appConfig.theme.icons
    const icons = themeIcons[iconSet as keyof typeof themeIcons]
    config.ui = config.ui || {}
    config.ui.icons = icons
  }

  const configString = JSON.stringify(config, null, 2)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"/g, '\'')

  const output = `export default defineAppConfig(${configString})`

  copyAppConfig(output)
}

function resetTheme() {
  appConfig.ui.colors.primary = 'purple'
  window.localStorage.removeItem('nuxt-ui-primary')

  appConfig.ui.colors.neutral = 'neutral'
  window.localStorage.removeItem('nuxt-ui-neutral')

  appConfig.theme.radius = 0.25
  window.localStorage.removeItem('nuxt-ui-radius')

  appConfig.theme.font = 'Finlandica'
  window.localStorage.removeItem('nuxt-ui-font')

  appConfig.theme.icons = 'lucide'
  appConfig.ui.icons = themeIcons.lucide as any
  window.localStorage.removeItem('nuxt-ui-icons')

  appConfig.theme.blackAsPrimary = false
  window.localStorage.removeItem('nuxt-ui-black-as-primary')
}
</script>

<template>
  <UPopover
    v-model:open="open"
    :ui="{ content: 'w-82 px-6 py-4 flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-5rem)]' }"
  >
    <template #default>
      <UButton
        icon="i-lucide-swatch-book"
        color="neutral"
        :variant="open ? 'soft' : 'ghost'"
        square
        :aria-label="$t('header.theme')"
        :title="$t('header.theme')"
        :ui="{ leadingIcon: 'text-primary' }"
      />
    </template>

    <template #content>
      <fieldset>
        <legend class="text-[11px] leading-none font-semibold mb-2 select-none flex items-center gap-1">
          {{ $t('theme.primary') }}
          <UButton
            to="/docs/getting-started"
            size="xs"
            color="neutral"
            variant="link"
            icon="i-lucide-help-circle"
            class="p-0 -my-0.5"
            :ui="{ leadingIcon: 'size-3' }"
          />
        </legend>

        <div class="grid grid-cols-3 gap-1 -mx-2">
          <ThemePickerButton
            :label="$t('theme.black')"
            :selected="appConfig.theme.blackAsPrimary"
            @click="setBlackAsPrimary(true)"
          >
            <template #leading>
              <span class="inline-block w-2 h-2 rounded-full bg-black dark:bg-white" />
            </template>
          </ThemePickerButton>

          <ThemePickerButton
            v-for="color in mainColors"
            :key="color.label"
            :label="color.name"
            :chip="color.label"
            :selected="!appConfig.theme.blackAsPrimary && primary === color.label"
            @click="primary = color.label"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend class="text-[11px] leading-none font-semibold mb-2 select-none flex items-center gap-1">
          {{ $t('theme.tone') }}
          <UButton
            to="/docs/getting-started"
            size="xs"
            color="neutral"
            variant="link"
            icon="i-lucide-help-circle"
            class="p-0 -my-0.5"
            :ui="{ leadingIcon: 'size-3' }"
          />
        </legend>

        <div class="grid grid-cols-3 gap-1 -mx-2">
          <ThemePickerButton
            v-for="color in neutralColors"
            :key="color.label"
            :label="color.name"
            :chip="color.label === 'neutral' ? 'old-neutral' : color.label"
            :selected="neutral === color.label"
            @click="neutral = color.label"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend class="text-[11px] leading-none font-semibold mb-2 select-none flex items-center gap-1">
          {{ $t('theme.radius') }}
          <UButton
            to="/docs/getting-started"
            size="xs"
            color="neutral"
            variant="link"
            icon="i-lucide-help-circle"
            class="p-0 -my-0.5"
            :ui="{ leadingIcon: 'size-3' }"
          />
        </legend>

        <div class="grid grid-cols-5 gap-1 -mx-2">
          <ThemePickerButton
            v-for="r in radiuses"
            :key="r"
            :label="String(r)"
            class="justify-center px-0"
            :selected="radius === r"
            @click="radius = r"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend class="text-[11px] leading-none font-semibold mb-2 select-none flex items-center gap-1">
          {{ $t('theme.font') }}
          <UButton
            to="/docs/getting-started"
            size="xs"
            color="neutral"
            variant="link"
            icon="i-lucide-help-circle"
            class="p-0 -my-0.5"
            :ui="{ leadingIcon: 'size-3' }"
          />
        </legend>

        <div class="-mx-2">
          <USelect
            v-model="font"
            size="sm"
            color="neutral"
            icon="i-lucide-type"
            :items="fonts"
            class="w-full ring-default rounded-sm hover:bg-elevated/50 text-[11px] data-[state=open]:bg-elevated/50"
            :ui="{ trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200' }"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend class="text-[11px] leading-none font-semibold mb-2 select-none flex items-center gap-1">
          {{ $t('theme.icons') }}

          <UButton
            to="/docs/getting-started"
            size="xs"
            color="neutral"
            variant="link"
            icon="i-lucide-help-circle"
            class="p-0 -my-0.5"
            :ui="{ leadingIcon: 'size-3' }"
          />
        </legend>

        <div class="-mx-2">
          <USelect
            v-model="icon"
            size="sm"
            color="neutral"
            :icon="icons.find(i => i.value === icon)?.icon"
            :items="icons"
            class="w-full ring-default rounded-sm hover:bg-elevated/50 capitalize text-[11px] data-[state=open]:bg-elevated/50"
            :ui="{ item: 'capitalize text-[11px]', trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200' }"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend class="text-[11px] leading-none font-semibold mb-2 select-none flex items-center gap-1">
          {{ $t('theme.mode') }}
          <UButton
            to="/docs/getting-started"
            size="xs"
            color="neutral"
            variant="link"
            icon="i-lucide-help-circle"
            class="p-0 -my-0.5"
            :ui="{ leadingIcon: 'size-3' }"
          />
        </legend>

        <div class="grid grid-cols-3 gap-1 -mx-2">
          <ThemePickerButton
            v-for="m in modes"
            :key="m.label"
            :label="m.name"
            :icon="m.icon"
            :selected="colorMode.preference === m.label"
            @click="mode = m.label"
          />
        </div>
      </fieldset>

      <fieldset v-if="hasCSSChanges || hasAppConfigChanges">
        <legend class="text-[11px] leading-none font-semibold mb-2 select-none">
          {{ $t('theme.export') }}
        </legend>

        <div class="flex items-center justify-between gap-1 -mx-2">
          <UButton
            v-if="hasCSSChanges"
            color="neutral"
            variant="soft"
            size="sm"
            label="main.css"
            class="flex-1 text-[11px]"
            :icon="copiedCSS ? 'i-lucide-copy-check' : 'i-lucide-copy'"
            @click="exportCSS"
          />
          <UButton
            v-if="hasAppConfigChanges"
            color="neutral"
            variant="soft"
            size="sm"
            label="app.config.ts"
            :icon="copiedAppConfig ? 'i-lucide-copy-check' : 'i-lucide-copy'"
            class="flex-1 text-[11px]"
            @click="exportAppConfig"
          />
          <UTooltip :text="$t('theme.mode')">
            <UButton
              color="neutral"
              variant="outline"
              size="sm"
              icon="i-lucide-rotate-ccw"
              class="ms-auto ring-default hover:bg-elevated/50"
              @click="resetTheme"
            />
          </UTooltip>
        </div>
      </fieldset>
    </template>
  </UPopover>
</template>
