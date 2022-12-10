<template>
  <div class="mainRoute">
    <!--上面的bar 基本上不會變-->
    <div class="mainBar">
      <ul class="nav mb-md-0">
        <li>
          <a href="#" @click="changeBody('defaultMain',0)" class="nav-link px-2 link-dark">思狗意</a>
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
            <p v-if="memberStatus.Login" @mouseover="(sideBar = true)" class="nav-link px-2 link-dark">{{ memberStatus.name }}小姐</p>
            <button v-if="!memberStatus.Login" type="button" @click="changeBody('signIn',0)" class="btn btn-outline-primary me-2">註冊</button>
            <button v-if="!memberStatus.Login" type="button" @click="changeBody('logIn',0)" class="btn btn-outline-primary me-2">登入</button>
          </div>
        </li>
      </ul>
    </div>
    <!--側邊的bar-->
    <div v-if="sideBar" class="userDrop">
      <ul class="dropdown-menu position-static d-grid gap-1 p-2 mx-0 shadow w-220px">
        <li>
          <a href="#" @click="changeBody('memberData',0)" class="dropdown-item rounded-2 active">個人基本資料</a>
        </li>
        <li>
          <a href="#" @click="changeBody('adoptData',0)" class="dropdown-item rounded-2 active">領養資料</a>
        </li>
        <li>
          <a href="#" @click="changeBody('petData',0)" class="dropdown-item rounded-2 active">寵物資料</a>
        </li>
        <li>
          <a href="#" @click="changeBody('myOrder',0)" class="dropdown-item rounded-2 active">我的訂單</a>
        </li>
        <li>
          <a v-if="memberStatus.Login" type="button" id="logOut" @click="logOut()" class="dropdown-item rounded-2 active">登出</a>
        </li>
      </ul>
    </div>
    <!--主要內容顯示的地方-->
    <component :memberStatus=memberStatus v-bind:is="currentComponent" class="mainBody" @getChild="childBack" @mouseover="(sideBar = false)" />
  </div>
</template>

<script>
import logIn from "../components/logIn.vue";
import signIn from "../components/signIn.vue"
import managerMain from "../components/managerMain.vue"
import whatWedo from "../components/whatWedo.vue"
import contactUs from "../components/contactUs.vue"
import defaultMain from "../components/defaultMain.vue"
import nurseryMain from "../components/nurseryMain.vue"
import adoptMain from "../components/adoptMain.vue"
import adoptData from "../components/memBasicData/adoptData.vue"
import memberData from "../components/memBasicData/memberData.vue"
import myOrder from "../components/memBasicData/myOrder.vue"
import petData from "../components/memBasicData/petData.vue"

export default {
  name: 'mainRoute',
  data () {
    return {
      currentComponent: 'defaultMain', //目前顯示的頁面，要到components註冊
      name: null, //bar上面顯示的名稱(會員or管理者)
      sideBar: false,
      memberStatus: {
        name: null,
        Login: false, //是否為登入狀態，會同步給各component
        pet: null,
        adopt: null,
      }
    }
  },
  components: {
    'logIn': logIn,
    'defaultMain': defaultMain,
    'managerMain': managerMain,
    'whatWedo': whatWedo,
    'contactUs': contactUs,
    'nurseryMain': nurseryMain,
    'adoptMain': adoptMain,
    'adoptData': adoptData,
    'memberData': memberData,
    'myOrder': myOrder,
    'petData': petData,
    'signIn': signIn
  },
  methods: {
    //登出，回出初始化
    logOut() {
      this.memberStatus.Login = false
      this.sideBar = false
      this.memberStatus.name = null
      this.currentComponent = 'defaultMain'
    },
    //接收component回傳回來的指令，
    childBack(_value) {
      if(_value.name) //如果是登入&登入成功
        this.memberStatus.Login = true
        this.memberStatus.name = _value.name
        this.memberStatus.pet = _value.petCheck
        this.memberStatus.adopt = _value.adoptCheck
      this.currentComponent = _value.desTination
    },
    //切換除bar以外的子頁面
    changeBody(id,log) {
      this.sideBar = false //讓sidebar消失
      if(log == 1) { //需要登入才能用的頁面
        if(this.memberStatus.Login == true) {
          this.currentComponent = id
        }
        else if(this.memberStatus.Login != true) {
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
  z-index: 10;
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
