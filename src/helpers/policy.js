const RegExpRegister = {
  name: {
    regExpOnChange: null,
    regExpValue: null
  },
  password: {
    regExpOnChange: null,
    regExpValue: null
  },
  email: {
    regExpOnChange: null,
    regExpValue: null
  }
};
export const messages = {
  nameIsEmpty: "Без имени ты ничто!",
  nameTooShort: "Хотябы 3 символа",
  passIsEmpty: "Без пароля никак!",
  passTooShort: "Мловато будет. Хотябы 3 символа",
  emailIsEmpty: "Так не пойдет...",
  emailNotValid: "Это не похоже на правду..."
};
// export const serverMessages = {
//     001: "Такой адрес электронной почты уже зарегистрирован :(",
//     002: "Что то не так с паролем или почтой"
// }
export const policy = {
  name: {
    minLength: 4,
    minLengthMessage: "Минимум 4 символа",
    maxLength: 20,
    maxLengthMessage: "Максимум 20 символов",
    required: true,
    requiredMessage: "Без имени ты ничто!",
    regExpOnChange: RegExpRegister.name.regExpOnChange,
    regExpOnChangeMessage: "Этот символ нельзя.. Так надо...",
    regExpValue: RegExpRegister.name.regExpValue,
    regExpValueMessage: "Что-то не похоже на правду..."
  },
  password: {
    minLength: 4,
    minLengthMessage: "Минимум 4 символа",
    maxLength: 20,
    maxLengthMessage: "Максимум 20 символов",
    required: true,
    requiredMessage: "Без пароля никак!",
    regExpOnChange: RegExpRegister.password.regExpOnChange,
    regExpOnChangeMessage: "Этот символ нельзя.. Так надо...",
    regExpValue: RegExpRegister.password.regExpValue,
    regExpValueMessage: "Что-то не похоже на правду..."
  },
  email: {
    minLength: 4,
    minLengthMessage: "Минимум 4 символа",
    maxLength: 20,
    maxLengthMessage: "Максимум 20 символов",
    required: true,
    requiredMessage: "В наше время у всех есть электронная почта",
    regExpOnChange: RegExpRegister.email.regExpOnChange,
    regExpOnChangeMessage: "Этот символ нельзя.. Так надо...",
    regExpValue: /^([a-zA-Z0-9_.-]+)@([a-z0-9_.-]+).([a-z.]{2,6})$/,
    regExpValueMessage: "Что-то не похоже на электронную почту..."
  }
};
// export const testByRegExp = (value, regexpName) = {

// }
