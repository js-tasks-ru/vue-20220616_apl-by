<template>
  <div class="toasts">
    <ui-toast v-for="[k, v] in toastsList" :key="k" :icon="v.icon" :mod="v.mod" :text="v.text" />
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiToast from './UiToast.vue';
export default {
  name: 'TheToaster',

  components: { UiIcon, UiToast },

  data() {
    return {
      toastsList: new Map(),
    };
  },

  methods: {
    _handleToastsList(options, time = 5000) {
      const id = Math.random().toString(36).substring(2, 12);
      this.toastsList.set(id, options);
      setTimeout(() => this.toastsList.delete(id), time);
    },

    success(text) {
      this._handleToastsList({ text, mod: 'success', icon: 'check-circle' });
    },

    error(text) {
      this._handleToastsList({ text, mod: 'error', icon: 'alert-circle' });
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
