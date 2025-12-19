<script setup lang="ts">
interface TeamMember {
  name: string
  role: string
  bio: string
  imageUrl: string
  location?: string
  socialLinks?: {
    platform: 'github' | 'gitlab' | 'hive'
    to: string
  }[]
}

const defaultMembers: TeamMember[] = [
  {
    name: $t('user.title'),
    role: $t('user.role'),
    bio: $t('user.description'),
    imageUrl: '/catbirchdark.webp',
    location: $t('user.location'),
    socialLinks: [
      { platform: 'gitlab', to: 'https://gitlab.com/catventurist' },
      { platform: 'github', to: 'https://github.com/catventurist' },
      { platform: 'hive', to: 'https://ecency.com/@catventurist' }
    ]
  },
  {
    name: $t('algo.title'),
    role: $t('algo.role'),
    bio: $t('algo.description'),
    imageUrl: '/catbirchdark.webp',
    location: $t('algo.location'),
    socialLinks: [
      { platform: 'gitlab', to: 'https://gitlab.com' },
      { platform: 'github', to: 'https://github.com' }
    ]
  }
]
</script>

<template>
  <section class="mx-auto max-w-7xl py-16 md:py-24">
    <div class="bg-primary/15 absolute top-0 left-0 h-96 w-96 rounded-full blur-3xl" />
    <div class="bg-primary/15 absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl" />
    <div class="container px-4 md:px-6">
      <div class="mx-auto mb-16 max-w-3xl text-center">
        <h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {{ $t('header.users.title') }}
        </h2>
        <p class="text-muted mx-auto max-w-2xl md:text-lg">
          {{ $t('header.users.description') }}
        </p>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-8">
        <div
          v-for="member in defaultMembers"
          :key="member.name"
          class="group bg-muted/70 h-[420px] w-96 overflow-hidden rounded-xl opacity-100 shadow-sm transition-opacity hover:opacity-75"
        >
          <div class="relative h-[200px] w-full overflow-hidden">
            <NuxtImg
              :src="member.imageUrl"
              :alt="member.name"
              class="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div class="flex h-[220px] flex-col p-5">
            <div
              v-if="member.location"
              class="text-muted mb-1 flex items-center text-xs duration-300 hover:text-default"
            >
              <div class="bg-info mr-1.5 size-1.5 rounded-full" />
              {{ member.location }}
            </div>
            <h3 class="mb-1 text-xl font-bold">
              {{ member.name }}
            </h3>
            <p class="text-primary mb-2 text-sm font-medium">
              {{ member.role }}
            </p>
            <div class="mb-4">
              <p class="text-muted text-sm">
                {{ member.bio }}
              </p>
            </div>
            <div class="mt-auto">
              <div
                v-if="member.socialLinks"
                class="flex space-x-3"
              >
                <NuxtLink
                  v-for="link in member.socialLinks"
                  :key="link.platform"
                  :to="link.to"
                  rel="noopener noreferrer"
                  class="bg-default/80 text-muted hover:bg-info/40 hover:text-primary flex size-8 items-center justify-center rounded-full transition-all"
                >
                  <Icon
                    v-if="link.platform === 'github'"
                    name="lucide-github"
                    class="size-4"
                  />
                  <Icon
                    v-if="link.platform === 'gitlab'"
                    name="lucide-gitlab"
                    class="size-4"
                  />
                  <Icon
                    v-if="link.platform === 'hive'"
                    name="simple-icons-hive-blockchain"
                    class="size-4"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
