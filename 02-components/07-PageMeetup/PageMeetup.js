import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../06-MeetupView/MeetupView';
import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      isLoading: false,
      error: null,
    };
  },

  watch: {
    meetupId: {
      immediate: true,
      handler(newValue) {
        this.isLoading = true;
        this.error = null;
        fetchMeetupById(newValue)
          .then((res) => (this.meetup = res))
          .catch((err) => (this.error = err))
          .finally(() => (this.isLoading = false));
      },
    },
  },

  template: `
    <div class="page-meetup">
      <ui-container v-if="isLoading">
        <ui-alert >Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-else-if="error" >
        <ui-alert>{{ error.message }}</ui-alert>
      </ui-container>

      <meetup-view v-else :meetup="meetup"/>

    </div>`,
});
