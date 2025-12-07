<script setup lang="ts">
import { motion, useInView } from 'motion-v'

interface StatItemProps {
  value: number
  label: string
  icon: string
  delay?: number
  decimalPlaces?: number
  color?: string
}

interface ItemProps {
  year: string
  title: string
  description?: string
}

const sref = ref(null)
const isInView = useInView(sref, { once: true, amount: 0.3 })
const aboutRef = ref(null)
const statsRef = ref(null)
const timelineRef = ref(null)

const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 })

const stats: StatItemProps[] = [
  {
    value: 5000,
    label: 'Happy Clients',
    icon: 'lucide-users',
    delay: 0,
    color: 'from-rose-500 to-orange-500',
    decimalPlaces: 0
  },
  {
    value: 15,
    label: 'Years Experience',
    icon: 'lucide-clock',
    delay: 0.1,
    color: 'from-blue-500 to-cyan-500',
    decimalPlaces: 0
  },
  {
    value: 100,
    label: 'Projects Completed',
    icon: 'lucide-check-circle',
    delay: 0.2,
    color: 'from-green-500 to-emerald-500',
    decimalPlaces: 0
  },
  {
    value: 24,
    label: 'Awards Won',
    icon: 'lucide-award',
    delay: 0.3,
    color: 'from-purple-500 to-violet-500',
    decimalPlaces: 0
  }
]

const items: ItemProps[] = [
  {
    year: '2008',
    title: 'Founded',
    description:
      'Our company was established with a vision to transform digital experiences.'
  },
  {
    year: '2015',
    title: 'Global Expansion',
    description:
      'Expanded operations to serve clients across 20+ countries worldwide.'
  },
  {
    year: '2019',
    title: 'Innovation Award',
    description:
      'Recognized for our cutting-edge solutions and technological innovation.'
  },
  {
    year: '2023',
    title: 'New Horizons',
    description:
      'Launched new service offerings to meet evolving market demands.'
  }
]
</script>

<template>
  <section class="relative w-full overflow-hidden py-16 md:py-24">
    <div class="absolute inset-0 -z-10 opacity-[0.02]">
      <Icon name="lucide-info-circle" />
    </div>
    <div class="relative z-10 container mx-auto max-w-6xl px-4 md:px-6">
      <div class="mx-auto mb-16 max-w-3xl text-center">
        <motion.div
          :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, ease: 'easeOut' }" class="mb-4 flex justify-center">
          <UBadge variant="outline" class="border-primary/20 bg-primary/5 rounded-full px-4 py-1 text-sm font-medium">
            <Icon name="lucide-sparkles" class="text-primary mr-1 size-3.5" />
            About Us
          </UBadge>
        </motion.div>
        <motion.h1
          :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.1, ease: 'easeOut' }"
          class="from-default to-default/70 bg-linear-to-b bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          About Our Company
        </motion.h1>
        <motion.p
          :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.2, ease: 'easeOut' }" class="text-muted mt-4 text-xl">
          Delivering excellence for over 15 years
        </motion.p>
      </div>
      <div ref="statsRef" class="mb-20">
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            v-for="stat in stats" :key="stat.label" ref="sref" :initial="{ opacity: 0, y: 20 }"
            :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
            :transition="{ duration: 0.6, delay: stat.delay, ease: 'easeOut' }"
            class="group border-default/30 bg-muted/70 relative overflow-hidden rounded-xl border p-6">
            <div
              class="absolute -top-6 -right-6 size-24 rounded-full bg-linear-to-br opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-30 group-hover:blur-3xl"
              :class="stat.color" />
            <div class="flex items-center gap-4">
              <Icon
                :name="stat.icon" :class="stat.color"
                class="flex size-12 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-primary/20 to-default/80" />
              <div class="flex flex-col">
                <h3 class="flex items-baseline text-3xl font-bold tracking-tight">
                  {{ stat.value }}
                  <!--   <NumberTicker value={value} decimalPlaces={decimalPlaces} class="tabular-nums" /> -->
                  <span class="ml-1 text-sm font-medium opacity-70">+</span>
                </h3>
                <p class="text-muted text-sm font-medium">
                  {{ stat.label }}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div ref="aboutRef" class="relative mx-auto mb-20">
        <div class="grid gap-16 md:grid-cols-2">
          <motion.div
            :initial="{ opacity: 0, y: 30 }"
            :animate="aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }"
            :transition="{ duration: 0.7, delay: 0.1, ease: 'easeOut' }" class="relative space-y-6">
            <div
              class="from-primary/80 to-primary/60 inline-flex size-14 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg">
              <Icon name="lucide-zap" class="size-6" />
            </div>
            <h2 class="text-2xl font-bold tracking-tight">
              Our Mission
            </h2>
            <p class="text-muted text-base leading-relaxed">
              To empower businesses with innovative digital solutions that
              drive growth, enhance user experiences, and create lasting value
              in an ever-evolving technological landscape.
            </p>
          </motion.div>

          <motion.div
            :initial="{ opacity: 0, y: 30 }"
            :animate="aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }"
            :transition="{ duration: 0.7, delay: 0.3, ease: 'easeOut' }" class="relative space-y-6">
            <div
              class="inline-flex size-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-500/80 to-blue-500/60 text-white shadow-lg">
              <Icon name="lucide-line-chart" class="size-6" />
            </div>
            <h2 class="text-2xl font-bold tracking-tight">
              Our Vision
            </h2>
            <p class="text-muted text-base leading-relaxed">
              To be the leading provider of transformative digital
              experiences, recognized globally for our commitment to
              excellence, innovation, and client success.
            </p>
          </motion.div>
        </div>

        <motion.div
          :initial="{ opacity: 0, y: 30 }"
          :animate="aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }"
          :transition="{ duration: 0.7, delay: 0.5, ease: 'easeOut' }" class="mt-16 flex items-start gap-4">
          <div
            class="from-primary/20 to-primary/5 text-primary inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
            <Icon name="lucide-building" class="size-5" />
          </div>
          <p class="text-muted text-base leading-relaxed">
            We are a passionate team of experts dedicated to delivering
            exceptional solutions that help businesses thrive in the digital
            landscape. Our commitment to innovation and quality has made us a
            trusted partner for organizations worldwide.
          </p>
        </motion.div>
      </div>

      <div ref="timelineRef" class="relative mx-auto max-w-4xl">
        <motion.h2
          :initial="{ opacity: 0, y: 20 }"
          :animate="timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
          :transition="{ duration: 0.6, ease: 'easeOut' }"
          class="mb-10 text-center text-2xl font-bold tracking-tight md:text-3xl">
          Our Journey
        </motion.h2>

        <div class="border-border/60 relative ml-4 border-l pl-8 md:ml-0 md:border-none md:pl-0">
          <motion.div
            v-for="(item, index) in items" :key="item.title"
            :initial="{ opacity: 0, x: -20 }"
            :animate="timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }"
            :transition="{ duration: 0.5, delay: 0.1 * index, ease: 'easeOut' }"
            class=" relative mb-10 md:grid md:grid-cols-5 md:gap-8">
            <div class="md:col-span-1">
              <div
                class="border-border bg-muted/70 absolute -left-12 flex size-8 items-center justify-center rounded-full border text-sm font-bold md:static md:h-auto md:w-auto md:rounded-none md:border-none md:bg-transparent md:text-xl">
                {{ item.year }}
              </div>
            </div>
            <div class="md:col-span-4">
              <h3 class="text-lg font-bold md:text-xl">
                {{ item.title }}
              </h3>
              <p class="text-muted mt-1">
                {{ item.description }}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
</template>
