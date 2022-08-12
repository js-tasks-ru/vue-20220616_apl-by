import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      validator: (value) => typeof value === 'number',
      default: 0,
    },
  },

  emits: ['update:count'],

  // Шаблон лучше держать максимально простым, а логику выносить в методы
  methods: {
    increase() {
      this.$emit('update:count', this.count + 1);
    },
  },

  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="increase(count)" >{{ count }}</button>`,
});
