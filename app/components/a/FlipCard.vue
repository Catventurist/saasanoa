<script setup lang='ts'>
interface FlipCardProps {
  rotate?: 'x' | 'y'
  class?: string
}

const props = withDefaults(defineProps<FlipCardProps>(), {
  rotate: 'y'
})
const rotationClass = {
  x: ['group-hover:[transform:rotateX(180deg)]', '[transform:rotateX(180deg)]'],
  y: ['group-hover:[transform:rotateY(180deg)]', '[transform:rotateY(180deg)]']
}

const rotation = computed(() => rotationClass[props.rotate])
</script>

<template>
  <div :class="props.class" class="group h-72 w-56 perspective-[1000px]">
    <div :class="rotation[0]" class="relative h-full rounded-2xl transition-all duration-500 transform-3d">
      <div class="absolute size-full overflow-hidden rounded-2xl border border-muted backface-hidden">
        <slot name="front" />
      </div>
      <div :class="rotation[1]" class="absolute size-full overflow-hidden rounded-2xl border border-muted/80 p-4 text-default/80 backface-hidden">
        <slot name="back" />
      </div>
    </div>
  </div>
</template>
