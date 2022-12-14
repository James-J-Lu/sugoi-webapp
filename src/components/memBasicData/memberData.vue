<template>
    <div class="memberData">
        <p>會員基本資料</p>
        <div class="workspace">
            <ul class="dropdown-menu position-static d-grid gap-1 mx-0 shadow w-220px">
                <div class="first" v-if="visibility">
                    
                    <label><span>姓名</span></label>
                    <p>{{ members }}</p>
                    <label><span>性別：</span></label>
                    <input type="radio" id="one" value="male" v-model="picked" disabled>
                    <label for="one">男性</label>
                    <input type="radio" id="two" value="female" v-model="picked" disabled>
                    <label for="two">女性</label>
                    <br>
                    
                    <label><span>帳號：</span></label><p>{{ account }}</p>
                    
                    <br>
                    <label><span>生日：</span></label>
                    <p>{{ date }}</p>
                    <br>
                    <label><span>電話：</span></label>
                    <p>{{ telephone }}</p>
                    <br>
                    <label><span>手機：</span></label>
                    <p>{{ phonenumber }}</p>
                    <br>
                    <label><span>電子郵箱：</span></label>
                    <p>{{ email }}</p>
                    <br>
                    <label><span>地址：</span></label>
                    <p>{{ address }}</p>
                    <li>
                        <button type="button" class="confirm" v-on:click="edit">編輯</button>
                    </li>
                </div>
                <div class="second" v-if="!visibility">
                    <div class="controls-float">
                        <label><span>姓名</span></label>
                        <input type="text" name="name" v-model="members" placeholder="請輸入姓名" />

                        <label><span>性別：</span></label>
                        <input type="radio" id="one" value="male" v-model="picked">
                        <label for="one">男性</label>
                        <input type="radio" id="two" value="female" v-model="picked">
                        <label for="two">女性</label>
                    </div>
                    <br>
                    <label><span>帳號：</span></label>
                    <p>{{ account }}</p>
                    <br>
                    <label><span>生日：</span></label>
                    <DatePicker v-model="date" :enable-time-picker="false" :clearable="false" class="input2">
                    </DatePicker>
                    <br>
                    <label><span>電話：</span></label>
                    <input type="text" name="telephone" v-model="telephone" placeholder="請輸入電話" />
                    <label><span>手機：</span></label>
                    <input type="text" name="phonenumber" v-model="phonenumber" placeholder="請輸入手機" />
                    <br>
                    <label><span>電子郵箱：</span></label>
                    <input type="email" v-model="email" placeholder="請輸入電子郵箱" />
                    <label><span>地址：</span></label>
                    <input type="text" name="address" v-model="address" placeholder="請輸入地址" />
                    <li>
                        <button type="button" class="cancel" v-on:click="cancel">取消更改</button>
                        <button type="button" class="confirm">確認更改</button>
                    </li>
                </div>
            </ul>
        </div>
    </div>




</template>

<script>
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    name: 'MmemberData',
    components: {
        'DatePicker': DatePicker,
    },
    data() {
        return {
            members: "kelly",
            picked: "male",
            account: "a12334",
            telephone: "071234567",
            phonenumber: "0903333333",
            email: "qqq123@ncu.edu.tw",
            address: "桃園市中壢區中大路300號",
            date: "12/01/2022",
            visibility: true
        }
    },
    methods: {
        cancel() {
            this.visibility = true
        },
        edit() {
            this.visibility = false
        }
    }

}
</script>

<style>
.workspace ul {
    font-size: 25px;
    display: block;
    height: 100%;
    background-color: #F9ECBE;
    border-radius: 40px;
    padding: 2rem !important;
    --bs-dropdown-border-color: none;
    --bs-dropdown-border-radius: none;
}

.workspace li p {
    font-size: 30px;
    color: black !important;
    background-color: #F9ECBE !important;
    display: flex;
    align-items: center !important;
    height: 100%;
}

p {
    color: black;
}

#title {
    font-size: 50px;
    font-weight: bold;
    padding-left: 42%;
    display: flex;
    justify-content: start;
}

.workspace {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 60%;
    left: 50%;
    width: 65%;
    height: 70%;
    font-size: 30px;
}

.form-check {
    font-size: 30px;
}

.form-control {
    font-size: 35px;
}

.cancel {
    float: left;
    color: white;
    background: #9A9DA2;
    border-radius: 20px;
    font-size: 40px;
}

.confirm {
    font-family: 'Iansui094-Regular';
    float: right;
    color: white;
    background: #114ABA;
    border-radius: 20px;
    font-size: 40px;
}
</style>