import Vue from "vue";
import moment from "moment";
Vue.mixin({
  methods: {
    formatDate(date, format) {
      if (date) {
        const momentDate = moment(date);
        if (momentDate.isValid) {
          format = format || "DD/MM/YYYY";
          return momentDate.format(format);
        } else {
          return "";
        }
      }
    },
  },
});
