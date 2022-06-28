import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const App = defineComponent({
  name: 'App',
  data() {
    return {
      firstNum: '',
      secondNum: '',
      operator: undefined,
    };
  },

  computed: {
    result() {
      const a = this.firstNum;
      const b = this.secondNum;
      const operator = this.operator;
      if (a === '' || b === '') {
        return 0;
      }
      return operator === 'sum'
        ? a + b
        : operator === 'subtract'
        ? a - b
        : operator === 'multiply'
        ? a * b
        : operator === 'divide'
        ? a / b
        : 0;
    },
  },
});

const app = createApp(App);
const vm = app.mount('#app');
