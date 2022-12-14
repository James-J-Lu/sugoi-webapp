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
                </li>
                <li>
                    <p>&ensp;&emsp;&emsp;電話：</p>
                    <input v-model="memberData.memberTel" type="text" class="input2">
                    <p>&ensp;&emsp;&emsp;手機：</p>
                    <input v-model="memberData.memberPhone" type="text" class="input2">
                </li>
                <li>
                    <button type="button" class="submitBtn">取消</button>
                    <button type="button" class="submitBtn" @click="CreateMember">完成</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
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
        CreateMember() { //backend的create要負責retrive last memberId
            console.log(this.memberData.memberGender)
        },

        //檢查input值
        Checkinput() {

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
    font-size: 40px;
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
    font-size: 30px;
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