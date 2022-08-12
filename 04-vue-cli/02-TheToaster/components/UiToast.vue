<template>
  <div class="toast" :class="{ [`toast_${mod}`]: mod }">
    <ui-icon class="toast__icon" :icon="icon" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'UiToast',

  components: { UiIcon },

  props: {
    mod: {
      type: String,
      required: false,
      validator: (value) => ['success', 'error'].includes(value),
    },

    icon: {
      type: String,
      required: true,
      validator: (value) => ['check-circle', 'alert-circle'].includes(value),
    },

    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
  margin-top: 20px;
}

.toast:first {
  margin-top: 0px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
