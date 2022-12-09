<template>
  <div class="mainRoute">
    <!--上面的bar 基本上不會變-->
    <div class="mainBar">
      <ul class="nav mb-md-0">
        <li>
          <a href="#" @click="changeBody('adoptMain',0)" class="nav-link px-2 link-dark">思狗意</a>
        </li>
        <li>
          <a href="#" @click="changeBody('whatWedo',0)" class="nav-link px-2 link-dark">我們在做的事</a>
        </li>
        <li>
          <a href="#" @click="changeBody('nurseryMain',1)" class="nav-link px-2 link-dark">我要托兒</a>
        </li>
        <li>
          <a href="#" @click="changeBody('adoptMain',1)" class="nav-link px-2 link-dark">我要領養</a>
        </li>
        <li>
          <a href="#" @click="changeBody('contactUs',0)" class="nav-link px-2 link-dark">聯絡我們</a>
        </li>
        <li>
          <div class="bar-right nav-link px-2">
            <p v-if="ifLogin" @mouseover="(sideBar = true)" class="nav-link px-2 link-dark">{{ name }}&ensp;小姐<br>您好</p>
            <button v-if="!ifLogin" type="button" @click="changeBody('logIn',0)" class="btn btn-outline-primary me-2">登入</button>
          </div>
        </li>
      </ul>
    </div>
    <!--側邊的bar-->
    <div v-if="sideBar" class="userDrop">
      <ul class="dropdown-menu position-static d-grid gap-1 p-2 mx-0 shadow w-220px">
        <li>
          <a href="#" class="dropdown-item rounded-2 active">個人基本資料</a>
        </li>
        <li>
          <a href="#" class="dropdown-item rounded-2 active">個人基本資料</a>
        </li>
        <li>
          <a href="#" class="dropdown-item rounded-2 active">個人基本資料</a>
        </li>
        <li>
          <a href="#" class="dropdown-item rounded-2 active">個人基本資料</a>
        </li>
        <li>
          <a v-if="ifLogin" type="button" id="logOut" @click="logOut()" class="dropdown-item rounded-2 active">登出</a>
        </li>
      </ul>
    </div>
    <!--主要內容顯示的地方-->
    <component :login=ifLogin v-bind:is="currentComponent" class="mainBody" @getChild="childBack" @mouseover="(sideBar = false)" />
  </div>
</template>

<script>
import logIn from "../components/logIn.vue";
import managerMain from "../components/managerMain.vue"
import whatWedo from "../components/whatWedo.vue"
import contactUs from "../components/contactUs.vue"
import adoptMain from "../components/adoptMain.vue"
import nurseryMain from "../components/nurseryMain.vue"

export default {
  name: 'mainRoute',
  data () {
    return {
      currentComponent: 'adoptMain', //目前顯示的頁面，要到components註冊
      name: null, //bar上面顯示的名稱(會員or管理者)
      ifLogin: false, //是否為登入狀態，會同步給各component
      sideBar: false,
    }
  },
  components: {
    'logIn': logIn,
    'adoptMain': adoptMain,
    'managerMain': managerMain,
    'whatWedo': whatWedo,
    'contactUs': contactUs,
    'nurseryMain': nurseryMain
  },
  methods: {
    //登出，回出初始化
    logOut() {
      this.ifLogin = false
      this.sideBar = false
      this.name = null
      this.currentComponent = 'adoptMain'
    },
    //接收component回傳回來的指令
    childBack(_value) {
      if(_value.name) //如果是登入&登入成功
        this.ifLogin = true
        this.name = _value.name
      this.currentComponent = _value.desTination
    },
    //切換除bar以外的子頁面
    changeBody(id,log) {
      this.sideBar = false //讓sidebar消失
      if(log == 1) {
        if(this.ifLogin) {
          this.currentComponent = id
        }
        else if(!this.ifLogin) {
          console.log("go to login")
          this.currentComponent = 'logIn'
        }
      }
      else if(log == 0) {
        if (this.currentComponent == id)
          console.log('this is the page u want !!!')
        else
          this.currentComponent = id
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userDrop {
  position: absolute;
  top: 15%;
  right: 0;
  height: 50%;
  width: 16.6%;
}
.userDrop ul {
  height: 100%;
  background-color: #F9ECBE;
  --bs-dropdown-border-color: none;
  --bs-dropdown-border-radius: none;
}
.userDrop li a{
  font-size: 30px;
  font-weight: bold;
  color: black;
  background-color: #F9ECBE;
  display: flex;
  align-items: center!important;
  justify-content:center;
  height: 100%;
}
.mainRoute {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.mainBar {
  width: 100%;
  height: 15%;
  background-color: #F6E298;
  font-size: 40px;
  font-weight: bold;
}
.mainBar ul {
  display: flex;
  justify-content:Space-between;
  position:relative;
  height: 100%;
  width: 100%;
  align-items: center!important;
  padding-bottom: 1rem!important;
}
.mainBar li {
  width: 16.6%;
}
.bar-right {
  display: flex;
  justify-content:Space-between;
  align-items: center !important;
  justify-content: center !important;
}
.mainBody {
  display: block;
  height: 85%;
  background-color: #ffffff;
}
</style>
