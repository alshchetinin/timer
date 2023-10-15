<script setup lang="ts">
interface variants {
  default: string
  secondary: string
  outline: string
  ghost: string
  link: string
}

enum enumVariants {
  default = 'default',
  secondary = 'secondary',
  outline = 'outline',
  ghost = 'ghost',
  link = 'link',
}

interface sizes {
  default?: string
  sm?: string
  lg: string
  icon?: string
}

enum enumSizes {
  sm = 'sm',
  default = 'default',
  lg = 'lg',
  icon = 'icon',
}

const props = defineProps({
  variant: {
    type: String as PropType<keyof typeof enumVariants>,
    default: 'default',
  },
  icon: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<keyof typeof enumSizes>,
    default: 'default',
  },
  link: {
    type: String,
    default: '',
  },
})
const attrs = useAttrs()
const styleSize: sizes = {
  default: 'h-10 px-5 py-1',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10',
}

const styleButton: variants = {
  default: 'bg-primary text-white hover:bg-primary/70',
  outline:
    'border border-input bg-background hover:bg-primary/10 hover:text-accent-foreground',
  secondary: 'bg-secondary text-black/80 hover:bg-secondary/70',
  ghost: 'hover:bg-secondary/70 text-black ',
  link: 'text-primary underline-offset-4 hover:underline',
}

const componentType = computed(() => (props.link ? 'NuxtLink' : 'button'))
const styleClass = computed(() => styleButton[props.variant])
const styleSizeClass = computed(() => styleSize[props.size])
</script>

<template>
  <component
    v-bind="attrs"
    :is="componentType"
    :to="link"
    :class="[styleClass, styleSizeClass]"
    class="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  >
    <slot />
  </component>
</template>
