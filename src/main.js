
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defineRule, configure} from "vee-validate";
import {required, email} from "@vee-validate/rules"


import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)


app.mount('#app')



function validatePhone(value) {
    const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return phoneRegex.test(value);
  }
  defineRule('phoneNum', validatePhone);
  defineRule('required', required)
  defineRule('email', email)

configure({
    validateOnModelUpdate: false,
    validateOnChange: false,
    generateMessage: (ctx) =>{
        const message = {
            required: "поле обязательно к заполнению",
            phoneNum: "неверный формат номера"
        };
        return message[ctx.rule.name]
    }
})
