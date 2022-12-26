<template>
    <div>
        <p id="_title">會員登入</p>
        <div class="login">
            <ul class="loginForm dropdown-menu position-static d-grid gap-1 mx-0 w-220px">
                <li>
                    <p>&emsp; * &emsp;</p>
                    <p>帳號：</p>
                    <input v-model="account" type="text" class="input1">
                </li>
                <li>
                    <p>請填寫帳號</p>
                </li>
                <li>
                    <p>&emsp; * &emsp;</p>
                    <p>密碼：</p>
                    <input v-model="password" type="text" class="input1">
                </li>
                <li>
                    <p>請填寫密碼</p>
                    <p>最少8個字元，需要大小寫混合</p>
                </li>
                <li>
                    <p>超過20字元</p>
                </li>
                <li>
                    <button type="button" class="submitBtn" @click="logIn">確認</button>
                </li>
                <li>
                    <p @click="CancelSignin('signIn')">註冊會員</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MemberDataService from "../services/MemberDataService";
import MemberPetDataService from "@/services/MemberPetDataService";
import AdoptionDataService from "@/services/AdoptionDataService";

export default {
    name: 'logIn',
    data () {
        return {
            isMember: null,
            account: 'kelly',
            password: '123',
            memberData: [],
            otherVal: {
                desTination: null,
                petCheck: null,
                adoptCheck: null,
                manager: null,
            }
        }
    },
    methods: {
        CancelSignin(where) {
            var _value = {
                id: null,
                desTination: null,
                name: null,
                petCheck: null,
                adoptCheck: null
            }
            _value.desTination = where
            this.$emit('getChild', _value)
        },

        //回到default主頁
        back2Main(_login) {
            //是會員
            if(this.isMember == 'member') {
                this.otherVal.desTination = 'defaultMain'
                this.otherVal.manager = false
                console.log(this.otherVal)
                Object.assign(this.memberData, this.otherVal);
                console.log(this.memberData)
                this.$emit('getChild', this.memberData)
            }
            //是管理員
            else if (this.isMember == 'manager'){
                this.otherVal.desTination = 'managerMain'
                this.otherVal.manager = true
                Object.assign(this.memberData, this.otherVal);
                this.$emit('getChild', this.memberData)
            }
        },

        //登入submit
        logIn () {
            this.otherVal.desTination=null
            this.otherVal.petCheck=null
            this.otherVal.adoptCheck=null
            this.otherVal.manager=null
            this.memberData = []

            this.Checkinput() //檢查輸入

            var data = { //傳給後端的登入資料
                account: this.account,
                pw: this.password,
            };
            MemberDataService.logIn(data)
                .then(response => {
                    //登入成功
                    if(response.data != false) {
                        this.memberData = response.data
                        if(response.data.memberAccount != 'manager') {
                            this.isMember = 'member'
                            this.ifAdopt_Pet(this.memberData.memberId)
                        }
                        else if(response.data.memberAccount == 'manager') {
                            this.isMember = 'manager'
                            this.back2Main(1)
                        }
                    }
                    else
                        console.log('登入失敗')
                })
                .catch(e => {
                    console.log(e);
                });
        },

        ifAdopt_Pet(id) {
            MemberPetDataService.findByMID(id)
                .then(response => {
                    if(response.data.length != 0)
                        this.otherVal.petCheck = true
                    else
                        this.otherVal.petCheck = false
                })
                .catch(e => {
                    console.log(e);
                });
            
            AdoptionDataService.findByMID(id)
                .then(response => {
                    if(response.data.length != 0)
                        this.otherVal.adoptCheck = true
                    else
                        this.otherVal.adoptCheck = false
                    this.back2Main(1)
                })
                .catch(e => {
                    console.log(e);
                });
        },

        //檢查input值
        Checkinput() {

        },
    }
}
</script>

<style scoped>
.submitBtn {
    display: inline-block;
    width: 13%;
    height: 60%;
    line-height: 100%;
    background-color: #114ABA !important;
    border-radius: 20px;
    background: rgba(17, 74, 186, 0.81) !important;
    font-size: 35px;
    color: white;
}
.input1 {
    width: 78.5%;
    border-radius: 15px;
    border-style: none !important;
}
#_title {
    font-size: 50px;
    font-weight: bold;
    height: 10%;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2%;
}
.login {
    margin-left: 14%;
    width: 72%;
    height: 75%;
    background-color: #F9ECBE;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 27px;
    margin-top: 2%;
}
.loginForm {
    grid-template-rows: 1fr 0.5fr 1fr 0.5fr 0.5fr 1fr 0.5fr;
    width: 100%;
    height: 95%;
    background-color: #F9ECBE;
    --bs-dropdown-border-color: none;
    --bs-dropdown-border-radius: none;
}
.loginForm li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 35px;
    font-weight: bold;
}
.loginForm li:nth-child(1)  p:nth-child(1){
    color: #FF0000;
}
.loginForm li:nth-child(3)  p:nth-child(1){
    color: #FF0000;
}
.loginForm li:nth-child(2)  p{
    padding-left: 18%;
    color: #FF0000;
}
.loginForm li:nth-child(4) p:nth-child(1){
    padding-left: 18%;
    color: #FF0000;
}
.loginForm li:nth-child(4) p:nth-child(2){
    padding-left: 25%;
    color: #FF0000;
}
.loginForm li:nth-child(5)  p{
    padding-left: 18%;
    color: #FF0000;
}
.loginForm li:nth-child(6) {
    justify-content: center;
}
.loginForm li:nth-child(7) {
    justify-content: center;
}
</style>