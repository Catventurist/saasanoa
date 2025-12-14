<script setup lang="ts">
import { motion, useScroll, useTransform } from 'motion-v'

const images = [
  'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=800',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800',
  'https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?q=80&w=800',
  'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800',
  'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?q=80&w=800',
  'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=800'
]

const con = ref()

const { scrollYProgress } = useScroll({
  target: con,
  offset: ['start start', 'end end']
})

const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])
const leftX = useTransform(scrollYProgress, [0, 1], ['-10%', '-100%'])
const rightX = useTransform(scrollYProgress, [0, 1], ['10%', '100%'])
</script>

<template>
  <div ref="con" class="container min-h-100">
    <div class="sticky z-20">
      <h2 class="text-3xl md:text-5xl font-bold text-center px-4">
        Timeless Beauty
      </h2>
    </div>
    <div class="absolute top-60 md:top-30 left-0 right-0 w-full px-4 flex justify-between z-10 max-w-screen mx-auto">
      <motion.div class="flex flex-col gap-4 w-1/4" :style="{ y, scale, x: leftX }">
        <NuxtImg :src="images[0]" class="aspect-portrait w-full h-auto" />
        <NuxtImg :src="images[1]" class="aspect-portrait w-full h-auto" />
      </motion.div>
      <motion.div class="flex flex-row justify-center gap-4 w-1/4 items-center" :style="{ y, scale }">
        <NuxtImg :src="images[2]" class="aspect-portrait w-full h-auto" />
        <NuxtImg :src="images[3]" class="aspect-portrait w-full h-auto" />
      </motion.div>
      <motion.div class="flex flex-col gap-4 w-1/4" :style="{ y, scale, x: rightX }">
        <NuxtImg :src="images[4]" class="aspect-portrait w-full h-auto" />
        <NuxtImg :src="images[5]" class="aspect-portrait w-full h-auto" />
      </motion.div>
    </div>
  </div>
</template>
