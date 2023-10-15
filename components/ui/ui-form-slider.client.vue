<template>
  <div class="relative">
    <p class="mb-1 w-max text-sm text-black/60">{{ label }}</p>
    <div class="relative flex items-center">
      <template v-if="range">
        <div class="flex w-full items-center -space-x-px">
          <input
            v-for="(val, index) in formattedValue"
            :key="index"
            type="text"
            :value="val"
            @input="
              (event) =>
                setModel((event.target as HTMLInputElement).value, index)
            "
            :class="index === 0 ? 'rounded-l-md' : 'rounded-r-md'"
            class="border-input flex h-10 w-full border bg-white px-3 py-2 text-sm ring-offset-black transition-colors file:text-sm file:font-medium placeholder:text-black/10 focus-visible:border-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-black focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </template>
      <template v-else>
        <input
          type="text"
          :value="formattedValue"
          @input="(event) => setModel((event.target as HTMLInputElement).value)"
          class="border-input flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-black transition-colors file:text-sm file:font-medium placeholder:text-black/10 focus-visible:border-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-black focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </template>
    </div>
    <div
      v-if="isReady"
      class="absolute -bottom-[0.5625rem] left-0 isolate w-full px-3"
    >
      <vue-slider
        v-model="modelValue"
        :min="min"
        :max="max"
        :tooltip="'none'"
        :interval="interval"
        :range="range"
      />
    </div>
    <div v-auto-animate>
      <p
        class="absolute -bottom-5 left-0 isolate w-full px-3 text-xs text-error"
        v-show="error"
      >
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/dist-css/vue-slider-component.css'

const props = defineProps({
  modelValue: {
    type: [Array, Number],
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  interval: {
    type: Number,
    default: 1,
  },
  range: {
    type: Boolean,
    default: false,
  },
})

const modelValue = ref(
  props.range
    ? [
        Math.max((props.modelValue as number[])[0], props.min),
        Math.min((props.modelValue as number[])[1], props.max),
      ]
    : Math.max(props.modelValue as number, props.min),
)

const min = ref(props.min)
const max = ref(props.max)
const emit = defineEmits(['update:modelValue'])
const error = ref('')
const isReady = ref(false)
const sliderKey = ref(Math.random())

const formattedValue = computed(() => {
  if (
    props.range &&
    Array.isArray(modelValue.value) &&
    modelValue.value.every((value) => typeof value === 'number')
  ) {
    return (modelValue.value as number[]).map((value) =>
      new Intl.NumberFormat('ru-RU').format(value),
    )
  }

  if (typeof modelValue.value === 'number') {
    return new Intl.NumberFormat('ru-RU').format(modelValue.value as number)
  }

  return ''
})

const setModel = (input: string, index?: number) => {
  const inputValue = Number(input.replace(/[^0-9]/g, ''))

  if (props.range && Array.isArray(modelValue.value)) {
    if (index != null) {
      if (isNaN(inputValue)) {
        error.value = 'Enter valid numbers'
      } else if (inputValue < props.min) {
        error.value = `Min value should not be less than ${props.min}`
      } else if (inputValue > props.max) {
        error.value = `Max value should not be more than ${props.max}`
      } else if (index === 0 && inputValue > modelValue.value[1]) {
        error.value = 'Min value should not be more than Max value'
      } else if (index === 1 && inputValue < modelValue.value[0]) {
        error.value = 'Max value should not be less than Min value'
      } else {
        modelValue.value[index] = inputValue
        error.value = ''
      }
    }
  } else if (typeof modelValue.value === 'number') {
    if (isNaN(inputValue)) {
      error.value = 'Enter a valid number'
    } else if (inputValue < props.min) {
      error.value = `Value should not be less than ${props.min}`
    } else if (inputValue > props.max) {
      error.value = `Value should not be more than ${props.max}`
    } else {
      modelValue.value = inputValue
      error.value = ''
    }
  }

  if (error.value === '') {
    emit('update:modelValue', modelValue.value)
  }
}

watch(modelValue, () => {
  sliderKey.value = Math.random()
  emit('update:modelValue', modelValue.value)
})

watch(
  () => props.modelValue,
  () => {
    setTimeout(() => {
      if (Array.isArray(props.modelValue)) {
        modelValue.value = props.modelValue as number[]
      } else if (typeof props.modelValue === 'number') {
        modelValue.value = props.modelValue as number
      }
    }, 600)
  },
)

watch(
  () => props.min,
  () => {
    setTimeout(() => {
      min.value = props.min
    }, 600)
  },
)

watch(
  () => props.max,
  () => {
    max.value = props.max
  },
)

onMounted(() => {
  isReady.value = true
})
</script>

<style lang="postcss">
.vue-slider-process {
  @apply rounded-full bg-primary;
}
.vue-slider-rail {
  height: 3px !important;
  @apply cursor-pointer rounded-full bg-primary  bg-opacity-0;
}
.vue-slider-dot {
  width: 0.675rem !important;
  height: 0.675rem !important;
  @apply transform cursor-grab rounded-full bg-primary shadow transition-all duration-300 hover:scale-110;
}
</style>
