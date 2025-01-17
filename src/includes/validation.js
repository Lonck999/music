import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage as VeeErrorMessage,
} from "vee-validate";

export default {
  install(app) {
    app.component("Form", VeeForm);
    app.component("Field", VeeField);
    app.component("ErrorMessage", VeeErrorMessage);
  },
};
