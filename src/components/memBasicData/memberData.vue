<template>
    <div class="memberData">
        <p id="title">會員基本資料</p><!--鈺倫負責的-->
        <div class="workspace">
            <div v-if="pop && visibility" class="alert alert-warning alert-dismissible fade show" role="alert"><!--更新成功提示-->
                <strong>{{ originMdata.memberName }}您好：</strong> 會員資料已更新<br>{{now}}<!--儲存成功時間紀錄-->
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
                    v-on:click="popoff"></button>
            </div>
            <br>
            <form class="row g-3">
                <ul class="dropdown-menu position-static d-grid gap-1 mx-0 shadow w-220px">
                    <div class="first" v-if="visibility"><!--memberdataoverview-->

                        <label><span>姓名：{{ originMdata.memberName }}</span></label>
                        <br>
                        <label><span>性別：</span></label>
                        <input type="radio" id="one" value=0 v-model="originMdata.memberGender" disabled>
                        <label for="one">男性</label>
                        <input type="radio" id="two" value=1 v-model="originMdata.memberGender" disabled>
                        <label for="two">女性</label>
                        <br>
                        <label><span>帳號：{{ originMdata.memberAccount }}</span></label>
                        <br>
                        <label><span>生日：{{ originMdata.memberBirth }}</span></label>
                        <br>
                        <label><span>電話：{{ originMdata.memberTel }}</span></label>
                        <br>
                        <label><span>手機：{{ originMdata.memberPhone }}</span></label>
                        <br>
                        <label><span>電子郵箱：{{ originMdata.memberEmail }}</span></label>
                        <br>
                        <label><span>地址：{{ originMdata.memberAddress }}</span></label>
                        <li>
                            <button type="button" class="edit" v-on:click="edit">編輯</button>
                        </li>
                    </div>
                    <div class="second" v-if="!visibility"><!--memberdataedit-->

                        <label><span>姓名：<input style="background-color:#F9ECBE" name="name" v-model="editMdata.memberName"
                                    class="form-control " placeholder="請輸入姓名"></span></label>
                        <br>
                        <label><span> 性別：</span></label>
                        <input type="radio" id="one" value=0 v-model="editMdata.memberGender">
                        <label for="one">男性</label>
                        <input type="radio" id="two" value=1 v-model="editMdata.memberGender">
                        <label for="two">女性</label>

                        <br>
                        <label><span>帳號：{{ originMdata.memberAccount }}</span></label>
                        <br>
                        <label><span>生日：</span></label>
                        <DatePicker style="background-color:#F9ECBE" v-model="editMdata.memberBirth" :enable-time-picker="false"
                            :clearable="false" class="input2"></DatePicker>

                        <label><span>電話：<input style="background-color:#F9ECBE" type="text" name="originMdata.memberTel"
                                    v-model="editMdata.memberTel" class="form-control " placeholder="請輸入電話" /></span></label>
                        <br>
                        <label><span>手機：<input style="background-color:#F9ECBE" type="text" name="originMdata.memberPhone"
                                    v-model="editMdata.memberPhone" class="form-control " placeholder="請輸入手機" /></span></label>
                        <br>
                        <label><span>電子郵箱：<input style="background-color:#F9ECBE" type="originMdata.memberEmail" v-model="editMdata.memberEmail"
                                    class="form-control " placeholder="請輸入電子郵箱" /></span></label>
                        <br>
                        <label><span>地址：</span></label>
                        <input style="background-color:#F9ECBE" type="text" class="form-control " placeholder="請輸入地址"
                            v-model="editMdata.memberAddress">
                        <br>
                        <li>
                            <button type="button" class="cancel" v-on:click="cancel">取消更改</button><!--點了cancel回到overview-->
                            <button type="button" class="confirm"
                                v-on:click="modify">確認更改</button>
                        <!--點了confirm存入資料庫-->
                            </li>

                    </div>
                </ul>
            </form>
        </div>
    </div>
</template>

<script scoped>
import MemberDataService from "@/services/MemberDataService";
import { format } from "date-fns";
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


export default {
    name: 'MmemberData',
    components: {
        'DatePicker': DatePicker,
    },
    props: {
        memberStatus: Object,
    },
    data() {
        return {
            visibility: true,//是否為overview，true為overview
            pop: false,//是否顯示更改成功資訊
            now: null,//現在時間
            originMdata: {},
            editMdata: {},
        }},
    
    methods: {
        cancel() {
            this.visibility = true
            this.pop = false
        },
        edit() {
            this.visibility = false
            this.editMdata = this.originMdata
        },
        modify() {
            MemberDataService.update(this.memberStatus.id, this.editMdata)
                .then(response => {
                    this.originMdata = this.editMdata
                    if(this.editMdata.memberBirth!=null){
                        this.originMdata.memberBirth=format(this.editMdata.memberBirth, "yyyy-MM-dd")
                    }
                    this.pop = true
                    this.visibility = true
                    this.now=new Date()
                })
                .catch(e => {
                    console.log(e);
                });
        },
        popoff() {
            this.pop = false//關閉顯示更改成功資訊
        },
        getMemberData() {
            MemberDataService.get(this.memberStatus.id)
                .then(response => {
                    this.originMdata = response.data
                    console.log(this.originMdata)
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.getMemberData()
    },
}
</script>

<style scoped>
.first {
    font-size: 35px;
}

.second {
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
    justify-content: flex-start;
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

.alert alert-warning alert-dismissible fade show {
    border-radius: 20px;
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
    float: right;
    color: white;
    background: #114ABA;
    border-radius: 20px;
    font-size: 40px;
}
.edit {
    float: right;
    color: white;
    background: #114ABA;
    border-radius: 20px;
    font-size: 40px;
}
</style>