<template>
  <div class="all">
    <!-- <div class="email"></div> -->
    <div class="container">
      <div class="row mt-3">
        <div class="col-3 chooseFileType ms-3">
          <select
            class="form-select"
            aria-label="Default select example"
            id="chooseFileType"
            v-model="fileTypeModel"
          >
            <option selected value="選擇檔案類型">選擇檔案類型</option>
            <option
              v-for="fileType in fileType"
              :key="fileType"
              for="chooseFileType"
            >
              {{ fileType }}
            </option>
          </select>
        </div>
        <div class="col-3 selectERP">
          <select
            class="form-select aa"
            aria-label="Defaul  t select example"
            :disabled="isBtnDisabled"
          >
            <option selected>選擇ERP對應管理</option>
            <option
              v-for="configuration in configuration"
              :key="configuration"
              value="configuration"
            >
              {{ configuration }}
            </option>
          </select>
        </div>
        <div class="col-3 addERP">
          <button
            type="button"
            class="btn btn-light w-100 btn"
            @click="addERP()"
          >
            <i class="fas fa-plus"></i>
            新增ERP對應管理
          </button>
        </div>
        <div class="col exit d-none">
          <button type="button" class="btn btn-light">編輯</button>
        </div>
        <div class="col nameERP d-none">
          <input
            class="form-control"
            type="text"
            placeholder="命名此ERP對應管理"
            aria-label="default input example"
          />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-3 reselect ms-3">
          <select
            class="form-select"
            aria-label="Default select example"
            id="chooseFileType"
          >
            <option selected>重新選擇檔案類型</option>
            <option value="PRL" for="chooseFileType">PRL</option>
            <option value="TOMMY" for="chooseFileType">TOMMY</option>
          </select>
        </div>
        <div class="col-4 rename">
          <input
            class="form-control"
            type="text"
            placeholder="重新命名此ERP對應管理"
            aria-label="default input example"
          />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-2 selectForm ms-3">
          <select
            class="form-select"
            aria-label="Default select example"
            id="chooseFileType"
          >
            <option selected>選擇表格模型</option>
            <option value="PRL" for="chooseFileType"></option>
            <option value="TOMMY" for="chooseFileType"></option>
          </select>
        </div>
        <div class="col-2 selectCellMode">
          <select
            class="form-select"
            aria-label="Default select example"
            id="chooseFileType"
          >
            <option selected>選擇單元格模</option>
            <option value="PRL" for="chooseFileType"></option>
            <option value="TOMMY" for="chooseFileType"></option>
          </select>
        </div>
        <div class="col-2 selectAssociation">
          <select
            class="form-select"
            aria-label="Default select example"
            id="chooseFileType"
          >
            <option selected>選擇關聯模型</option>
            <option value="PRL" for="chooseFileType"></option>
            <option value="TOMMY" for="chooseFileType"></option>
          </select>
        </div>
        <div class="col-3 renameModel">
          <input
            class="form-control"
            type="text"
            placeholder="重新命名此版本模型名稱"
            aria-label="default input example"
          />
        </div>
        <div class="col-2 addRules ms-3">
          <button type="button" class="btn btn-light w-75 btn">
            <i class="fas fa-plus"></i>
            新增規則
          </button>
        </div>
      </div>
    </div>
    <div class="container" v-for="item in 3" :key="item">
      <div class="row mt-4">
        <div class="col-1 check">
          <div
            class="form-check"
            style="display: flex; justify-content: center; align-items: center"
          >
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
        </div>
        <div class="col-10">
          <label
            class="label w-100"
            style="font-weight: bold; text-align: left"
          >
            <div
              class="row justify-content-start ms-auto mt-3 mb-4 w-100"
              v-for="(item, name) in table"
              :key="item"
            >
              <span class="col my-auto" style="width: 5%"
                ><input
                  class="form-check-input pe-0"
                  type="checkbox"
                  name=""
                  id=""
                  :value="name"
                  v-model="cheakbox"
              /></span>
            </div>
            <div class="col border pb-2 pt-2 ps-2 w-100">
              Board Number &ensp;
              <select
                class="js-example-basic-multiple w-75"
                name="states[]"
                multiple="multiple"
              >
                <option value="AL">Alabama</option>
                ...
                <option value="WY">Wyoming</option>
              </select>
            </div>
          </label>
        </div>
        <div
          class="col-1"
          style="display: flex; justify-content: center; align-items: center"
        >
          <i
            class="d3 fas fa-trash-alt fa-2x"
            style="display: flex; justify-content: center; align-items: center"
            id="trash_icon3"
          ></i>
        </div>
      </div>
    </div>
    <div class="next mt-4 pt-2 d-none" style="float: right">
      <button
        type="button"
        class="btn btn-light Cancelbtn me-4"
        style="width: 75px; height: 50px; text-align: center"
      >
        取消
      </button>
      <button
        type="button"
        class="btn btn-light me-5"
        style="width: 75px; height: 50px; text-align: center"
      >
        儲存
      </button>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import $ from "jquery";
import axios from "axios";
export default {
  data() {
    return {
      table: [],
      info: [],
      fileType: [],
      configuration: [],
      chooseFileType: "",
      fileTypeModel: "選擇檔案類型",
      // isBtnDisabled: true,
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/db")
      .then((response) => {
        console.log(response);
        this.info = response.data;
        for (const key in this.info.upload_file_option.data) {
          this.fileType.push(key);
        }
        for (const key in this.info.get_key_value_mapping.data) {
          this.configuration.push(key);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    $(document).ready(function () {
      $(".js-example-basic-multiple").select2({
        tags: true,
      });
    });
  },
  methods: {
    addERP() {

    }
  },
  computed: {
    isBtnDisabled: function () {
      console.log(this.fileTypeModel);
      if (this.fileTypeModel != "選擇檔案類型") {
        
        return false;
      }else{
        return true
      }
    },
  },
};
</script>

<style scoped>
option::after {
  content: "123";
}

* {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

.all {
  width: 950px;
  max-height: 600px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(181, 181, 181);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -300px;
  margin-left: -475px;
  padding-bottom: 35px;
}

.chooseFileType,
.selectERP,
.addERP,
.exit,
.nameERP,
.reselect,
.rename,
.selectForm,
.selectCellMode,
.selectAssociation,
.renameModel,
.addRules {
  padding: 5px;
  padding-top: 15px;
}

.btn {
  background-color: rgb(171, 202, 221);
  border-color: black;
  color: black;
  text-align: left;
}

.Cancelbtn {
  background-color: rgb(204, 204, 204);
  border-color: black;
  color: black;
  text-align: left;
}
.check {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>