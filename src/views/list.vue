<template>
  <div class="about">
    <div class="all">
      <div class="account mt-3">
        <div class="mail me-3">
          <div style="text-align: right">
            <span size="3" style="color: gray"
              ><label>account1@com.tw</label></span
            >&ensp;
            <i class="fas fa-info-circle fa-1x icon1" style="color: black"></i>
          </div>
        </div>
      </div>
      <hr />
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col">
              <button
                type="button"
                class="btn btn-light btn1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                新增人員
              </button>
              <!-- Modal -->
              <div
                ref="create"
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        新增人員
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-5">
                          <div
                            class="role mt-1 mb-3"
                            style="text-align: left; font-size: 18px"
                          >
                            角色
                          </div>
                          <div class="form-check" style="text-align: left">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Admin"
                              id="flexCheckDefault"
                              v-model="checkboxArray"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              Admin
                            </label>
                          </div>
                          <div class="form-check" style="text-align: left">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Super User"
                              id="flexCheckChecked"
                              v-model="checkboxArray"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              Super User
                            </label>
                          </div>
                          <div class="form-check" style="text-align: left">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="General User"
                              id="flexCheckChecked1"
                              v-model="checkboxArray"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked1"
                            >
                              General User
                            </label>
                          </div>
                        </div>
                        <div class="col-7">
                          <div
                            class="account mt-1 mb-3"
                            style="text-align: left; font-size: 18px"
                          >
                            帳號
                          </div>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            v-model="account"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-light btn1"
                        @click="addlist()"
                        data-bs-dismiss="modal"
                        :disabled="isBtnDisabled"
                      >
                        新增
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-auto">
              <div class="col-md-auto mt-1" style="font-size: 23px">
                選擇角色
              </div>
            </div>
            <div class="col col-lg-2">
              <select
                class="form-select form-select-lg"
                aria-label=".form-select-lg example"
                id="select"
                v-model="SelectRole"
                @change="Selectchange()"
              >
                <option selected value="" for="select">select role</option>
                <option value="Admin" for="select">Admin</option>
                <option value="Super User" for="select">Super User</option>
                <option value="General User" for="select">General User</option>
              </select>
            </div>
          </div>
        </div>
        <div class="item">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">帳號</th>
                <th scope="col">角色</th>
                <th scope="col">上次登入時間</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filterArray" :key="item">
                <td align="center" valign="middle">{{ item.account }}</td>
                <td align="center" valign="middle">
                  <div v-for="role in item.role" :key="role">{{ role }}</div>
                </td>
                <!-- <td>{{item.role[0]}}<br>{{item.role[1]}}</td>  <不用迴圈>  -->
                <td align="center" valign="middle">{{ item.time }}</td>
                <td align="center" valign="middle">
                  <i
                    type="button"
                    class="bi bi-pencil-square"
                    data-bs-toggle="modal"
                    data-bs-target="#exidModal"
                    @click="exid(item)"
                  >
                  </i>
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="exidModal"
                    tabindex="-1"
                    aria-labelledby="exidModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exidModalLabel">
                            編輯人員
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-5">
                              <div
                                class="role mt-1 mb-3"
                                style="text-align: left; font-size: 18px"
                              >
                                角色
                              </div>
                              <div class="form-check" style="text-align: left">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value="Admin"
                                  id="exidCheckDefault"
                                  v-model="exidcheckboxArray"
                                />
                                <label
                                  class="form-check-label"
                                  for="exidCheckDefault1"
                                >
                                  Admin
                                </label>
                              </div>
                              <div class="form-check" style="text-align: left">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value="Super User"
                                  id="exidCheckChecked"
                                  v-model="exidcheckboxArray"
                                />
                                <label
                                  class="form-check-label"
                                  for="exidCheckChecked2"
                                >
                                  Super User
                                </label>
                              </div>
                              <div class="form-check" style="text-align: left">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value="General User"
                                  id="exidCheckChecked"
                                  v-model="exidcheckboxArray"
                                />
                                <label
                                  class="form-check-label"
                                  for="exidCheckChecked3"
                                >
                                  General User
                                </label>
                              </div>
                            </div>
                            <div class="col-7">
                              <div
                                class="account mt-1 mb-3"
                                style="text-align: left; font-size: 18px"
                              >
                                帳號
                              </div>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                v-model="exidAccount"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-light btn1"
                            @click="editorialStaff(item)"
                            data-bs-dismiss="modal"
                            :disabled="
                              exidcheckboxArray.length == 0 ||
                              exidAccount.length == 0
                            "
                          >
                            確定
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  &nbsp;&nbsp;
                  <i class="bi bi-trash-fill" @click="remove(item)"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: [],
      checkboxArray: [],
      account: "",
      exidcheckboxArray: [],
      exidAccount: "",
      exidObj: "",
      exidinfo: [],
      exidrole: "",
      mapExid: 0,
      SelectRole: "",
      filterArray: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/data")
      .then((response) => {
        this.info = response.data;
        this.filterArray = this.info;
      })
      .catch(function (error) {
        console.log(error);
      });
    const th = this;
    this.$refs.create.addEventListener("hidden.bs.modal", function () {
      th.account = "";
      th.checkboxArray = [];
    });
    // this.$refs.create.addEventListener("hidden.bs.modal", function () {
    //   th.account = "";
    //   th.checkboxArray = [];
    // });
  },
  watch: {
    info() {
      const th = this;
      if (this.SelectRole == "") {
        this.filterArray = this.info;
      }
      else{
        this.filterArray = this.info.filter(function (x) {
          return x.role.includes(th.SelectRole) == true;
        });
      }

    },
  },
  methods: {
    getnowtime() {
      let data = new Date();
      let year = data.getFullYear();
      let month = data.getMonth() + 1;
      let day = data.getDay();
      let hour = data.getHours() + "";
      let minute = data.getMinutes() + "";
      let second = data.getSeconds() + "";
      return `${year}年${month}月${day}日 ${hour.padStart(
        2,
        "0"
      )}:${minute.padStart(2, "0")}:${second.padStart(2, "0")}`;
    },
    addlist() {
      const obj = {
        account: this.account,
        role: this.checkboxArray,
        time: this.getnowtime(),
      };
      this.info.push(obj);
    },
    exid(item) {
      const mapExid = this.info.map(function (x) {
        return x.account;
      });
      const exidIndex = mapExid.indexOf(item.account);
      this.exidAccount = this.info[exidIndex].account;
      this.exidcheckboxArray = this.info[exidIndex].role;
      this.mapExid = exidIndex;
    },

    editorialStaff() {
      const exidObj = {
        account: this.exidAccount,
        role: this.exidcheckboxArray,
        time: this.info[this.mapExid].time,
      };
      this.info[this.mapExid] = exidObj;
      this.exidAccount = "";
      this.exidcheckboxArray = [];
    },

    remove(item) {
      const mapAccount = this.info.map(function (x) {
        return x.account;
      });
      const removeIndex = mapAccount.indexOf(item.account);
      this.info.splice(removeIndex, 1);
    },

    Selectchange() {
      let th = this;
      this.filterArray = this.info.filter(function (x) {
        return x.role.includes(th.SelectRole) == true;
      });
      if (this.SelectRole == "") {
        this.filterArray = this.info;
      }
    },
  },
  computed: {
    isBtnDisabled: function () {
      return (
        this.info
          .map(function (x) {
            return x.account;
          })
          .includes(this.account) ||this.account.length == 0 ||this.checkboxArray.length == 0
      );
    },
  },
};
</script>

<style scoped>
.all {
  width: 1700px;
  min-height: 800px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(181, 181, 181);
  padding: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -400px;
  margin-left: -850px;
}

.features div {
  display: inline-block;
}

.btn1 {
  border-width: 1px;
  border-style: solid;
  border-color: rgb(181, 181, 181);
  float: left;
}

.btn2 {
  width: 130px;
  height: 40px;
  color: black;
  background-color: white;
  border-color: gray;
  margin-left: 15px;
  text-align: left;
  font-size: 16px;
}

.item {
  border-width: 1px;
  border-style: solid;
  border-color: rgb(181, 181, 181);
  width: 1600px;
  height: 610px;
  padding: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -800px;
}
</style>