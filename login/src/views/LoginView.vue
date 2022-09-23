<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="mb-12">
    <form @submit.prevent="submitForm"
      class=" flex flex-col w-[95%] md:w-2/4 lg:w-[580px] m-auto rounded-2xl shadow-2xl px-6 lg:px-12 lg:py-12 mt-10 bg-white">
      <h1 class="my-5 text-xl text-[#002d72] font-extrabold mb-4">Log into Your brsk Account</h1>
      <div id="input-group" class="relative">
        <input placeholder=" " class="form__input mb-4 w-full p-3 border-2 rounded-full mb-6 " type="text"
          v-model="email" />
        <label for="emailInput" :class="selectedClass"
          class="form__label text-[#002d72] absolute top-4 left-8 ">Email</label>
        <span id="error" v-if="v$.email.$error" class="text-red-500 text-sm pl-4 mb-4">
          {{v$.email.$errors[0].$message}}</span>
      </div>
      <div id="input-group" class="relative">
        <input placeholder=" " class="form__input password mb-4 p-3 w-full border-2 rounded-full  " type="password"
          v-model="password" />
        <label for="passInput" :class="selectedClass"
          class="form__label text-[#002d72] absolute top-4 left-8">Password</label>
        <span id="error" v-if="v$.password.$error"
          class="text-red-500 pl-4 text-sm block">{{v$.password.$errors[0].$message}}</span>

      </div>
      <div class="flex justify-between">
        <button id="forgot" @click="openForgotPass"
          class="py-2 my-4 px-6 mb-6 text-xl text-[#646363] border-2 border-[#9e9d9d] tracking-tight bg-[#e2e2e2] rounded-full hover:bg-[#9e9d9d]">
          Forgot your password
        </button>
        <button @click="submitForm"
          class="py-2 mt-4 mb-6 px-6 text-xl text-[#e8e8e8] tracking-tight bg-[#e10098] rounded-full hover:bg-[#f560c6]">
          Login
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  name: "LoginPage",
  data() {
    return {
      v$: useValidate(),
      email: "",
      password: "",
      showPassword: false,
    };
  },
  validations() {
    return {
      email: { required, email },
      password: { required, minLength: minLength(8) },
    };
  },

  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("The form has been submitted");
      }
    },
    toRegister() {
      navigator.to("/");
    },
  },
  computed: {
    selectedClass() {
      return this.v$.$error ? '!text-red-500' : ''
    }
  }
};
</script>

<style>
#error {
  position: absolute;
  top: 65px;
  left: 10px;
  margin-top: -8px;
}

#placeholder {
  transition: 0.3s;
  pointer-events: none;
}

#emailInput,
#passInput {
  border: 2px solid rgb(199, 198, 198)
}

.form__input:focus~.form__label,
.form__input:not(:placeholder-shown).form__input:not(:focus)~.form__label {
  top: -12px;
  color: #e10098;
  background: #fff;
  transition: 0.3s;

}

.form__input:focus {
  outline: none !important;
  border-color: #e10098;
}

button {
  transition: 0.3s;
}
</style>
