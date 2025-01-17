import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage as VeeErrorMessage,
} from "vee-validate";
import { required } from "@vee-validate/rules";

export default {
  install(app) {
    app.component("Form", VeeForm);
    app.component("Field", VeeField);
    app.component("ErrorMessage", VeeErrorMessage);

    defineRule("required", required);
  },
};
