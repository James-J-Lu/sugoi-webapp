<template>
    <div class="memberData">
        <p id="title">會員基本資料</p>
        <div class="workspace">
            <form class="row g-3">
                <ul class="dropdown-menu position-static d-grid gap-1 mx-0 shadow w-220px">
                    <div class="first" v-if="visibility">

                        <label><span>姓名：{{ members }}</span></label>
                        <br>
                        <label><span>性別：</span></label>
                        <input type="radio" id="one" value="male" v-model="picked" disabled>
                        <label for="one">男性</label>
                        <input type="radio" id="two" value="female" v-model="picked" disabled>
                        <label for="two">女性</label>
                        <br>
                        <label><span>帳號：{{ account }}</span></label>
                        <br>
                        <label><span>生日：{{ date }}</span></label>
                        <br>
                        <label><span>電話：{{ telephone }}</span></label>
                        <br>
                        <label><span>手機：{{ phonenumber }}</span></label>
                        <br>
                        <label><span>電子郵箱：{{ email }}</span></label>
                        <br>
                        <label><span>地址：{{ address }}</span></label>
                        <li>
                        
                            <button type="button" class="confirm" v-on:click="edit">編輯</button>
                        </li>
                    </div>
                    <div class="second" v-if="!visibility">
                       
                            <label><span>姓名：<input style="background-color:#F9ECBE" name="name" v-model="members_t" class="form-control " placeholder="請輸入姓名"></span></label>
                            <br>
                            <label><span>  性別：</span></label>
                            <input type="radio" id="one" value="male" v-model="picked_t">
                            <label for="one">男性</label>
                            <input type="radio" id="two" value="female" v-model="picked_t">
                            <label for="two">女性</label>
                        
                        <br>
                        <label><span>帳號：{{ account }}</span></label>
                        <br>
                        <label><span>生日：</span></label>
                        <DatePicker style="background-color:#F9ECBE" v-model="date_t" :enable-time-picker="false" :clearable="false" class="input2"></DatePicker>
                        
                        <label><span>電話：<input style="background-color:#F9ECBE" type="text" name="telephone" v-model="telephone_t" class="form-control " placeholder="請輸入電話" /></span></label> 
                        <br>
                        <label><span>手機：<input style="background-color:#F9ECBE" type="text" name="phonenumber" v-model="phonenumber_t" class="form-control " placeholder="請輸入手機" /></span></label>
                        <br>
                        <label><span>電子郵箱：<input style="background-color:#F9ECBE" type="email" v-model="email_t" class="form-control " placeholder="請輸入電子郵箱" /></span></label>
                        <br>
                        <label><span>地址：</span></label>
                        <input style="background-color:#F9ECBE"  type="text" class="form-control " placeholder="請輸入地址"  v-model="address_t">
                        <br>
                        <li>
                            <button type="button" class="cancel" v-on:click="cancel">取消更改</button>
                            <button type="button" class="confirm"
                                v-on:click="modify(members_t, picked_t, telephone_t, phonenumber_t, email_t, address_t, date_t)">確認更改</button>
                        </li>

                    </div>
                </ul>
            </form>
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
            members_t: null,
            picked: "male",
            picked_t: null,
            account: "a12334",
            telephone: "071234567",
            telephone_t: null,
            phonenumber: "0903333333",
            phonenumber_t: null,
            email: "qqq123@ncu.edu.tw",
            email_t: null,
            address: "桃園市中壢區中大路300號",
            address_t: null,
            date: "12.01.2022",
            date_t: null,
            visibility: true,
            pop: false
        }
    },
    methods: {
        cancel() {
            this.visibility = true
            this.pop = false
        },
        edit() {
            this.visibility = false
            this.members_t = this.members
            this.picked_t = this.picked
            this.telephone_t = this.telephone
            this.phonenumber_t = this.phonenumber
            this.email_t = this.email
            this.address_t = this.address
            this.date_t = this.date
        },
        modify(members_t, picked_t, telephone_t, phonenumber_t, email_t, address_t, date_t) {
            this.members = members_t
            this.picked = picked_t
            this.telephone = telephone_t
            this.phonenumber = phonenumber_t
            this.email = email_t
            this.address = address_t
            this.date = date_t
            this.pop = true
            this.visibility = true
        }


    },

}
</script>

<style>
.first{
    font-size: 35px;
}
.second{
    font-size: 35px;
}
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