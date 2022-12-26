<template>
    <div>
        <p id="title">註冊成為會員吧！</p>
        <div class="signin">
            <ul class="signinForm dropdown-menu position-static d-grid gap-1 mx-0 w-220px">
                <li>
                    <p>&emsp; * &emsp;</p>
                    <p>設定帳號：</p>
                    <input v-model="memberData.memberAccount" type="text" class="input1">
                </li>
                <li>
                    <p>此欄位為必填</p>
                    <p>請注意：設定完帳號後未來不可更改</p>
                </li>
                <li>
                    <p>&emsp; * &emsp;</p>
                    <p>設定密碼：</p>
                    <input v-model="memberData.memberPassword" type="text" class="input1">
                </li>
                <li>
                    <p>此欄位為必填</p>
                    <p>最少8個字元, 需要大小寫混合</p>
                </li>
                <li>
                    <p>&emsp; * &emsp;</p>
                    <p>姓名：</p>
                    <input v-model="memberData.memberName" type="text" class="input2">
                    <p>&emsp;&emsp;&ensp; 性別：&emsp;</p>
                    <input v-model="memberData.memberGender" v-bind:value="0" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    &emsp;
                    <label class="form-check-label" for="flexRadioDefault1">
                        男
                    </label>
                    &emsp;&emsp;&emsp;
                    <input v-model="memberData.memberGender" v-bind:value="1" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
                    &emsp;
                    <label class="form-check-label" for="flexRadioDefault2">
                        女 &emsp;
                    </label>
                </li>
                <li>
                    <p>&ensp;&emsp;&emsp;生日：&nbsp;</p>
                    <DatePicker v-model="memberData.memberBirth" :enable-time-picker="false" :clearable="false" class="input2"></DatePicker>
                    <p>&ensp;&emsp;&emsp;Email：</p>
                    <input v-model="memberData.memberEmail" type="text" class="input2">
                </li>
                <li>
                    <p>&ensp;&emsp;&emsp;電話：</p>
                    <input v-model="memberData.memberTel" type="text" class="input2">
                    <p>&ensp;&emsp;&emsp;手機：</p>
                    <input v-model="memberData.memberPhone" type="text" class="input2">
                </li>
                <li>
                    <button type="button" class="submitBtn" @click="CancelSignin('defaultMain')">取消</button>
                    <button type="button" class="submitBtn" @click="Checkinput">完成</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MemberDataService from "../services/MemberDataService";
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    name: 'signIn',
    components: {
        'DatePicker': DatePicker,
    },
    data () {
        return {
            memberData: {
                'memberId': null,
                'memberAccount': null,
                'memberPassword': null,
                'memberName': null,
                'memberGender': null,
                'memberBirth': null,
                'memberTel': null,
                'memberPhone': null,
                'memberAddress': null, //介面沒有
                'memberEmail': null, //介面沒有
            }
        }
    },
    methods: {
        Checkinput() {
            var re = new RegExp("[\u4E00-\u9FA5]+")
            var number = new RegExp("[0-9]+")
            var email = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

            if(re.test(this.memberData.memberAccount) || re.test(this.memberData.memberPassword)) {
                window.alert("帳號 或 密碼請勿輸入中文")
                return;
            }
                
            if(this.memberData.memberAccount == null || this.memberData.memberPassword == null) {
                window.alert("帳號 或 密碼請勿空白")
                return;
            }
                
            if(this.memberData.memberAccount.length < 8 || this.memberData.memberAccount.length > 20 || this.memberData.memberPassword.length < 8 || this.memberData.memberPassword.length > 20) {
                window.alert("帳號 或 密碼請符合長度，8~20字元")
                return;
            }
            
            if(!number.test(this.memberData.memberPhone) || !number.test(this.memberData.memberTel)) {
                window.alert("電話 或 手機只能輸入數字")
                return;
            }

            if(!email.test(this.memberData.memberEmail)) {
                window.alert("Email格式錯誤")
                return;
            }

            this.CreateMember()
        },

        CreateMember() {
            var data = { //傳給後端的登入資料
                account: this.memberData.memberAccount,
                pw: this.memberData.memberPassword
            };

            // 確認帳號是否已重複
            MemberDataService.logIn(data)
                .then(response => {
                    // 沒有重複，所以新增會員
                    if(response.data == 'can sign in') {
                        MemberDataService.create(this.memberData)
                            .then(response => {
                                if(response.data.length != 0) {
                                    window.alert("註冊成功瞜！")
                                    // 跳轉到註冊
                                    this.CancelSignin('logIn')
                                }
                            })
                            .catch(e => {
                                console.log(e);
                            });
                    }
                    else
                        window.alert("該帳號已被註冊瞜！")
                })
                .catch(e => {
                    console.log(e);
                });
        },

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
    },
}   

</script>

<style scoped>
.input1 {
    width: 78.5%;
    border-radius: 15px;
    border-style: none !important;
}
.input2 {
    width: 35%;
    border-radius: 15px;
    border-style: none !important;
}
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
#title {
    font-size: 30px;
    font-weight: bold;
    height: 10%;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
}
.signin {
    margin-left: 14%;
    width: 72%;
    height: 85%;
    background-color: #F9ECBE;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 27px;
}
.signinForm {
    grid-template-rows: 1fr 0.5fr 1fr 0.5fr 1fr 1fr 1fr 1fr;
    width: 100%;
    height: 95%;
    background-color: #F9ECBE;
    --bs-dropdown-border-color: none;
    --bs-dropdown-border-radius: none;
}
.signinForm li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 20px;
    font-weight: bold;
}
.signinForm li:nth-child(1)  p:nth-child(1){
    color: #FF0000;
}
.signinForm li:nth-child(3)  p:nth-child(1){
    color: #FF0000;
}
.signinForm li:nth-child(5)  p:nth-child(1){
    color: #FF0000;
}
.signinForm li:nth-child(2) p:nth-child(1){
    padding-left: 18%;
    color: #FF0000;
}
.signinForm li:nth-child(2) p:nth-child(2){
    padding-left: 24%;
}
.signinForm li:nth-child(4) p:nth-child(1){
    padding-left: 18%;
    color: #FF0000;
}
.signinForm li:nth-child(4) p:nth-child(2){
    padding-left: 32%;
}
.signinForm li:nth-child(8) {
    justify-content: space-evenly;
}
</style>