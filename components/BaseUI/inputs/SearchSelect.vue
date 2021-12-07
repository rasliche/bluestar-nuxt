<template>
  <OnClickOutside :do="close">
    <div class="relative mb-6 pb-3">
      <label v-if="label" class="block text-blue-800 font-bold text-sm mb-2">
        {{ label }}
      </label>
      <button
        ref="button"
        type="button"
        class="flex w-full rounded shadow appearance-none border-blue-200 border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
        @click="open"
      >
        <span v-if="value !== null" class="flex-auto">{{ value }}</span>
        <span v-else class="flex-auto">Select an option...</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-6 flex-none icon-cheveron-selection fill-current"
        >
          <path
            class="secondary"
            fill-rule="evenodd"
            d="M8.7 9.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 1 1-1.4 1.4L12 6.42l-3.3 3.3zm6.6 4.6a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
          ></path>
        </svg>
      </button>
      <div
        v-show="isOpen"
        ref="dropdown"
        class="absolute w-full px-2 py-1 rounded-md bg-gray-800 text-gray-200 z-10"
      >
        <input
          ref="search"
          v-model="search"
          class="block px-2 my-1 text-left w-full rounded-md text-gray-800"
          type="text"
          @keydown.esc="close"
          @keydown.down="highlightNext"
          @keydown.up="highlightPrev"
          @keydown.enter.prevent="selectHighlighted"
          @keydown.tab.prevent
        />
        <ul ref="options" class="rounded-md">
          <li
            v-for="(option, i) in filteredOptions"
            v-show="filteredOptions.length > 0"
            :key="option._id"
            class="px-2 my-1 rounded-md hover:bg-gray-700"
            :class="{ 'bg-gray-700': i === highlightedIndex }"
            @click="select(option)"
          >
            {{ option }}
          </li>
          <li
            v-show="filteredOptions.length === 0"
            class="px-2 my-1 rounded-md"
          >
            No Results Found For "{{ search }}"
          </li>
        </ul>
      </div>
    </div>
  </OnClickOutside>
</template>

<script>
import { createPopper } from '@popperjs/core'
import OnClickOutside from '@/components/BaseComponents/OnClickOutside.vue'

export default {
  name: 'SearchSelect',
  components: {
    OnClickOutside,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {},
    options: {
      type: Array,
      default: () => [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet',
      ],
    },
    filterFunction: {
      type: Function,
      default: (y, x) => x,
    },
  },
  data() {
    return {
      isOpen: false,
      search: '',
      highlightedIndex: 0,
    }
  },
  computed: {
    filteredOptions() {
      return this.filterFunction(this.search, this.options)
    },
  },
  beforeDestroy() {
    if (this.popper) this.popper.destroy()
  },
  methods: {
    open() {
      if (this.isOpen) return
      this.isOpen = true
      this.$nextTick(() => {
        this.setupPopper()
        this.$refs.search.focus()
        this.scrollToHighlighted()
      })
    },
    async setupPopper() {
      if (this.popper === undefined) {
        this.popper = createPopper(this.$refs.button, this.$refs.dropdown, {
          placement: 'bottom',
        })
      } else {
        await this.popper.update()
      }
    },
    close() {
      if (!this.isOpen) return
      this.isOpen = false
      this.$refs.button.focus()
    },
    select(option) {
      this.$emit('input', option)
      this.search = ''
      this.highlightedIndex = 0
      this.close()
    },
    selectHighlighted() {
      this.select(this.filteredOptions[this.highlightedIndex])
    },
    scrollToHighlighted() {
      this.$refs.options.children[this.highlightedIndex].scrollIntoView({
        block: 'nearest',
      })
    },
    highlight(index) {
      this.highlightedIndex = index
      if (this.highlightedIndex < 0) {
        this.highlightedIndex = this.filteredOptions.length - 1
      }
      if (this.highlightedIndex > this.filteredOptions.length - 1) {
        this.highlightedIndex = 0
      }
      this.scrollToHighlighted()
    },
    highlightPrev() {
      this.highlight(this.highlightedIndex - 1)
    },
    highlightNext() {
      this.highlight(this.highlightedIndex + 1)
    },
  },
}
</script>
