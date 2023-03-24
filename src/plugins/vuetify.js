import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import lt from 'vuetify/lib/locale/lt';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { lt },
      current: 'lt',
    },
  icons: {
    iconfont: 'md',
  },
});
