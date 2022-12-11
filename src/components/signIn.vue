<template>
    <div>
        <p id="title">註冊成為會員吧！</p>
        <div class="signin">
            <ul class="signinForm dropdown-menu position-static d-grid gap-1 mx-0 w-220px">
                <li>
                    <p>&emsp; * &emsp;</p>
                    <p>設定帳號：</p>
                    <input type="text" class="input1">
                </li>
                <li>
                    <p>此欄位為必填 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; 請注意：設定完帳號後未來不可更改 &emsp;&emsp;&emsp;&emsp;</p>
                </li>
                <li>
                    <p>&emsp; * &emsp;</p>
                    <p>設定密碼：</p>
                    <input type="text" class="input1">
                </li>
                <li>
                    <p>此欄位為必填 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 最少8個字元, 需要大小寫混合 &emsp;&emsp;&emsp;&emsp;</p>
                </li>
                <li>
                    <p>&emsp; * &emsp;</p>
                    <p>姓名：</p>
                    <input type="text" class="input2">
                    <p>&emsp;&emsp;&ensp; 性別：&emsp;</p>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    &emsp;
                    <label class="form-check-label" for="flexRadioDefault1">
                        男
                    </label>
                    &emsp;&emsp;&emsp;
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
                    &emsp;
                    <label class="form-check-label" for="flexRadioDefault2">
                        女 &emsp;
                    </label>
                </li>
                <li>
                    <p>&ensp;&emsp;&emsp;生日：&nbsp;</p>
                    <DatePicker v-model="date" :enable-time-picker="false" :clearable="false" class="input2"></DatePicker>
                </li>
                <li>
                    <p>&ensp;&emsp;&emsp;電話：</p>
                    <input type="text" class="input2">
                    <p>&ensp;&emsp;&emsp;手機：</p>
                    <input type="text" class="input2">
                </li>
                <li>
                    <button type="button" class="submitBtn">取消</button>
                    <button type="button" class="submitBtn">完成</button>
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
            date: null,
        }
    },
}   

</script>

<style scoped>
.input1 {
    width: 78.5%;
}
.input2 {
    width: 35%;
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
.signinForm li:nth-child(2) {
    justify-content: end;
}
.signinForm li:nth-child(4) {
    justify-content: end;
}
.signinForm li:nth-child(8) {
    justify-content: space-evenly;
}
</style>