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
                              value=""
                              id="flexCheckDefault"
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
                              value=""
                              id="flexCheckChecked"
                              checked
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
                              value=""
                              id="flexCheckChecked"
                              checked
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
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
                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-light btn1">
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
            <div class="col col-lg-1">
              <div class="dropdown">
                <button
                  class="btn btn-light dropdown-toggle btn2"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  choose role
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Admin</a></li>
                  <li><a class="dropdown-item" href="#">Super User</a></li>
                  <li><a class="dropdown-item" href="#">General User</a></li>
                </ul>
              </div>
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <i class="bi bi-pencil-square"></i>
                  &nbsp;&nbsp;
                  <i class="bi bi-trash-fill"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  <i class="bi bi-pencil-square"></i>
                  &nbsp;&nbsp;
                  <i class="bi bi-trash-fill"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <i class="bi bi-pencil-square"></i>
                  &nbsp;&nbsp;
                  <i class="bi bi-trash-fill"></i>
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
export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    this.axios.get(' http://localhost:3000')
      //   .then(response =>{ this.info = response.data.data})
      // console.log(response)
      .then(response => console.log(response))
  }
};
</script>

<style scoped>
.all {
  width: 1700px;
  height: 800px;
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