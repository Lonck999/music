import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage as VeeErrorMessage,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("VeeErrorMessage", VeeErrorMessage);

    // 定義必填
    defineRule("required", required);
    // 定義最小值
    defineRule("min", min);
    // 定義最大值
    defineRule("max", max);
    // 定義字母和空格
    defineRule("alpha_spaces", alphaSpaces);
    // 定義電子郵件
    defineRule("email", email);
    // 定義數字最小值
    defineRule("min_value", minValue);
    // 定義數字最大值
    defineRule("max_value", maxValue);
    // 定義確認密碼
    defineRule("confirmed", confirmed);
    // 定義不在列表中
    defineRule("excluded", excluded);
  },
};
