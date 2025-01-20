import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage as VeeErrorMessage,
  configure,
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
    // 定義必填
    defineRule("tos", required);
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
    defineRule("password_mismatch", confirmed);
    // 定義不在列表中
    defineRule("excluded", excluded);
    // 定義不在列表中
    defineRule("country_excluded", excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required`,
          min: `The field ${ctx.field} is too short`,
          max: `The field ${ctx.field} is too long`,
          alpha_spaces: `The field ${ctx.field} may only contain alphabetical characters and spaces`,
          email: `The field ${ctx.field} must be a valid email`,
          min_value: `The field ${ctx.field} is too low`,
          max_value: `The field ${ctx.field} is too high`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}`,
          country_excluded: `Due to restrictions, we do not accept users from this location`,
          password_mismatch: `The password does not match`,
          tos: `You must accept the Terms of Service`,
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
