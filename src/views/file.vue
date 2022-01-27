<template>
  <div class="about">
    <div class="all">
      <div class="account mt-3">
        <div class="mail me-3">
          <div style="text-align: right">
            <font size="3" style="color: gray"
              ><label>account1@com.tw</label></font
            >&ensp;
            <i class="fas fa-info-circle fa-1x icon1" style="color: black"></i>
          </div>
        </div>
      </div>
      <hr />
      <div class="content">
        <div class="choose">
          <div class="container">
            <div class="row">
              <div class="col">
                <label for="exampleFormControlInput1" class="form-label"
                  >選擇廠商</label
                >
                <div class="dropdown">
                  <button
                    class="btn btn-light dropdown-toggle btn1"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Choose a manufacturer
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li><a class="dropdown-item" href="#">PRL</a></li>
                    <li><a class="dropdown-item" href="#">TOMMY</a></li>
                  </ul>
                </div>
              </div>
              <div class="col">
                <label for="exampleFormControlInput1" class="form-label"
                  >選擇檔案類型</label
                >
                <div class="dropdown">
                  <button
                    class="btn btn-light dropdown-toggle btn1"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Choose file type
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li><a class="dropdown-item" href="#">TechPack</a></li>
                    <li><a class="dropdown-item" href="#">PO</a></li>
                    <li><a class="dropdown-item" href="#">Packing</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="drop" ref="select_drop">
          <div class="input" v-if="status">
            <label for="formFile" class="btn btn btn-outline-secondary" >
              <input class="form-control" type="file" id="formFile" style="display:none" ref="select"  @change="addfile()"/>將檔案上傳
            </label>
          </div>


          <div class="input" v-else>
            <ul>
              <li v-for="item in fileName" :key="item">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="next">
        <button type="button" class="btn btn-light btn2" >
          (super user)<br />下一步
        </button>
        <button type="button" class="btn btn-light btn3" style="font-size:25px">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: true,
      fileName:[]
     
    }
  },
  methods: {
    addfile(){
      this.status=!this.status
      const data = this.$refs.select.files;
      console.log(data)
      if(data.lenght < 1){
        return
      }
      this.fileName.push(data[0].name)
    }
  },
  watch:{
    fileName:{
      handler: function(){
        this.status = false
      },
      deep:true
    }
  },

  mounted() {
    const th=this;
    document.addEventListener("dragover",(e)=>{
      e.preventDefault();
    });
    this.$refs.select_drop.ondrop = function(e){
      e.preventDefault();
      const data = e.dataTransfer.files;
      console.log(data);
      if(data.lenght<1){
        return;
      }
      th.fileName.push(data[0].name)
    }
  },
};
</script>

<style scoped>
.all {
  width: 850px;
  height: 515px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(181, 181, 181);
  padding: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -257px;
  margin-left: -425px;
}

.form-label {
  font-size: 20px;
}

.btn1 {
  width: 230px;
  height: 50px;
  color: black;
  background-color: white;
  border-color: gray;
}

.drop {
  width: 680px;
  height: 210px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(181, 181, 181);
  padding: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -65px;
  margin-left: -340px;
}

.form-control {
  width: 250px;
  text-align: center;
}

.input {
  width: 250px;
  height: 40px;
  padding: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -125px;
}

.btn2 {
  width:100px;
  height: 45px;
  font-size: 10px;
  margin-top: 285px;
  margin-left: 500px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(181, 181, 181);
  text-align: center 
  
}

.btn3 {
  width: 150px;
  height: 60px;
  font-size: 10px;
  margin-top: 270px;
  margin-left: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(181, 181, 181);
  text-align: center 
}
</style>