<template>
  <div class="all">
    <form class="row g-3">
      <div class="account">
        <div class="input-group d1 mb-4">
          <span class="input-group-text" id="basic-addon1"
            ><i class="fas fa-user-circle fa-2x"></i
          ></span>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': accountStatus }"
            placeholder="(輸入帳號)"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="account"
            required
          />
          <div class="invalid-feedback">請輸入帳號</div>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1"
            ><i class="fas fa-pencil-alt fa-2x"></i>
          </span>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': passwordStatus }"
            placeholder="(輸入密碼)"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="password"
            required
          />
          <div class="invalid-feedback">請輸入密碼</div>
        </div>
        <div class="login mt-4">
          <button type="button" class="btn btn-secondary" @click="login">
            登入
          </button>
          
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      account: "",
      password: "",
      accountStatus: false,
      passwordStatus: false,
    };
  },
  watch: {
    account() {
      this.accountStatus = false;
    },
    password() {
      this.passwordStatus = false;
    },
  },
  methods: {
    login() {
      if (this.account.length == 0) {
        this.accountStatus = true;
      }
      if (this.password.length == 0) {
        this.passwordStatus = true;
      }
    },
  },
  mounted() {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

 <style scoped>
.all {
  width: 850px;
  height: 475px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(181, 181, 181);
  padding: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -237px;
  margin-left: -425px;
}

.input-group {
  width: 315px;
  height: 50px;
  margin: auto;
}

.account {
  width: 400px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -200px;
}
</style>
