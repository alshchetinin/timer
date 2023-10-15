<template>
  <Listbox v-model="selected" as="div" class="group relative text-sm">
    <ListboxLabel class="mb-1 w-max text-sm text-black/60" as="div">{{
      label
    }}</ListboxLabel>
    <ListboxButton
      ref="ignoreElRef"
      @click="isOpen = !isOpen"
      :class="isOpen ? 'border-black' : ' border-black'"
      class="border-input relative flex h-10 w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-sm ring-offset-black transition-colors file:text-sm file:font-medium placeholder:text-black/10 focus-visible:border-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-black focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 group-hover:border-black"
    >
      {{ selected[value] }}

      <TailwindSvgIcon
        name="ui/select-arrow"
        class="origin-center transform transition-transform"
        :class="isOpen ? 'rotate-180' : 'rotate-0'"
      />
    </ListboxButton>
    <div v-auto-animate class="absolute left-0 z-20 mt-1 w-full bg-white">
      <div v-if="isOpen" v-on-click-outside="onClickOutsideHandler">
        <ListboxOptions
          static
          class="border-input relative max-h-60 w-full overflow-y-scroll rounded-md border bg-white text-sm ring-offset-black transition-colors file:text-sm file:font-medium placeholder:text-black/10 focus-visible:border-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-black focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ListboxOption
            v-for="item in data"
            :key="item.id"
            v-slot="{ selected }"
            :value="item"
            class="border-b last:border-b-0"
          >
            <div
              class="flex cursor-pointer items-center gap-2 px-3 py-2 transition-colors hover:bg-primary/5"
              :class="selected ? 'bg-primary/5' : ''"
            >
              {{ item[value] }}
            </div>
          </ListboxOption>
        </ListboxOptions>
      </div>
    </div>
  </Listbox>
</template>

<script setup>
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import { useVModels } from '@vueuse/core'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {},
  },
  data: {
    type: Array,
    default: () => [],
  },
  value: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:count'])

const selected = useVModel(props, 'modelValue', emit)
const isOpen = ref(false)

const ignoreElRef = ref()

const onClickOutsideHandler = [
  (ev) => {
    isOpen.value = false
  },
  { ignore: [ignoreElRef] },
]
watch(selected, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    isOpen.value = false
  }
})
</script>
