<template>
  <div class="relative">
    <p class="mb-1 w-max text-sm text-black/60">
      {{ label }}
    </p>
    <div class="flex items-center gap-2">
      <label
        v-for="item in data"
        :key="item.id"
        class="group cursor-pointer items-center justify-center"
      >
        <input
          v-model="model"
          class="peer z-10 hidden h-10 w-10"
          type="checkbox"
          :value="item.value"
          :disabled="disabled"
        />
        <div
          class="flex h-10 w-10 items-center justify-center rounded-md border border-black text-sm font-medium uppercase leading-none transition-colors hover:bg-primary/5 peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white"
        >
          <span>{{ item.name }}</span>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Data {
  id: number
  name: string
  value: string
}

const props = defineProps({
  modelValue: {
    type: [Array, Boolean],
    required: true,
  },
  data: {
    type: Array as PropType<Data[]>,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>
