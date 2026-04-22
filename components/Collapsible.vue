<template>
  <div class="collapsible">
    <div
      class="collapsible-header"
      role="button"
      tabindex="0"
      @click="onClick"
      @keydown="onKeydown"
      :aria-expanded="isOpen.toString()"
    >
      <div class="header-content">
        <slot name="header">
          <span class="collapsible-title">{{ title }}</span>
        </slot>
      </div>
      <span class="chev" :class="{ open: isOpen }" aria-hidden="true">▾</span>
    </div>

    <div class="collapsible-content-wrap" ref="contentRef">
      <div class="collapsible-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  open: { type: Boolean, default: false },
})

const isOpen = ref(props.open)
const contentRef = ref(null)

const toggle = async () => {
  isOpen.value = !isOpen.value
  await nextTick()
  const el = contentRef.value
  if (!el) return
  if (isOpen.value) {
    // open: expand to scrollHeight then set to auto
    el.style.height = el.scrollHeight + 'px'
    const onEnd = () => {
      el.style.height = 'auto'
      el.removeEventListener('transitionend', onEnd)
    }
    el.addEventListener('transitionend', onEnd)
  } else {
    // close: fix current height then animate to 0
    const start = el.scrollHeight
    el.style.height = start + 'px'
    void el.offsetHeight
    el.style.height = '0px'
  }
}

const onClick = (e) => {
  const interactive = 'a, button, input, textarea, select, label'
  if (e && e.target && e.target.closest && e.target.closest(interactive)) return
  toggle()
}

const onKeydown = (e) => {
  const interactive = 'a, button, input, textarea, select, label'
  const isToggleKey = e.key === 'Enter' || e.code === 'Space' || e.key === ' '
  if (!isToggleKey) return
  if (e && e.target && e.target.closest && e.target.closest(interactive)) return
  e.preventDefault()
  toggle()
}

onMounted(() => {
  const el = contentRef.value
  if (!el) return
  if (isOpen.value) el.style.height = 'auto'
  else el.style.height = '0px'
})

watch(() => props.open, (v) => {
  isOpen.value = v
  nextTick().then(() => {
    const el = contentRef.value
    if (!el) return
    el.style.height = isOpen.value ? 'auto' : '0px'
  })
})
</script>

<style scoped>
.collapsible {
  border-radius: 4px;
  margin-bottom: 1rem;
}
.collapsible-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  padding: 0.25rem 0;
  cursor: pointer;
  text-align: left;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: none;
}

.collapsible-header::-moz-focus-inner {
  border: 0;
  padding: 0;
}

.collapsible-header:hover,
.collapsible-header:active {
  background: transparent;
  box-shadow: none;
}

.collapsible-header:focus {
  outline: none;
}

.collapsible-header:focus-visible {
  outline: 2px solid rgba(0,0,0,0.12);
}
.header-content {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}
.chev {
  transition: transform .2s ease;
  font-size: 1rem;
  font-size: 1.5rem;
}
.chev.open {
  transform: rotate(180deg);
}
.collapsible-content-wrap {
  overflow: hidden;
  transition: height .25s ease;
  height: 0;
}
.collapsible-content {
  padding-top: 0.5rem;
}
</style>
