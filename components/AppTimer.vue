<template>
  <div class="flex flex-col items-center">
    <h2
      class="text-center text-[150px] font-medium text-black"
      style="font-variant-numeric: tabular-nums"
    >
      {{ displayTime }}
    </h2>

    <div>
      <div class="flex gap-2">
        <ui-button v-if="!isActive" @click="startTimer"> Старт </ui-button>
        <ui-button v-if="isActive" variant="ghost" @click="pauseTimer">
          Пауза
        </ui-button>
        <ui-button v-if="isActive" variant="ghost" @click="resetTimer">
          Сбросить
        </ui-button>
        <ui-button
          v-if="!isActive"
          variant="ghost"
          @click="settings = !settings"
        >
          Настройки
        </ui-button>
      </div>
    </div>
    <div>
      <div v-if="settings" class="py-5">
        <div class="flex w-full items-center gap-2">
          <div>
            <p class="mb-1 w-max text-sm text-black/60">Время в секундах</p>

            <input
              type="number"
              v-model="time"
              class="border-input flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-black transition-colors file:text-sm file:font-medium placeholder:text-black/10 focus-visible:border-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-black focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div>
            <p class="mb-1 w-max text-sm text-black/60">
              Количество миллисекунд
            </p>
            <input
              type="number"
              v-model="customMilliseconds"
              placeholder="Количество миллисекунд"
              class="border-input flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-black transition-colors file:text-sm file:font-medium placeholder:text-black/10 focus-visible:border-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-black focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIntervalFn } from '@vueuse/core'

const settings = ref(false)
const time = ref(0) // время в секундах
const customMilliseconds = ref(1000) // 1 секунда по умолчанию равна 1000 мс

const displayTime = computed(() => {
  const minutes = Math.floor(time.value / 60)
  const seconds = time.value % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
})

const {
  pause: pauseInterval,
  resume: resumeInterval,
  isActive,
} = useIntervalFn(
  () => {
    if (time.value > 0) time.value--
    else pauseInterval()
  },
  customMilliseconds,
  false,
)

function startTimer() {
  if (isActive.value) pauseInterval() // Если интервал уже активен, приостановите его
  settings.value = false
  resumeInterval()
}

function pauseTimer() {
  pauseInterval()
}

function resetTimer() {
  if (isActive.value) pauseInterval() // Если интервал активен, приостановите его
  time.value = 0
}
</script>
