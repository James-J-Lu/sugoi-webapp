<template>
    <div class="MadoptOrder">
        <div v-if="!flag" class="Morderlist">
            <p class="tabletitle">領養訂單列表</p>
                <table class="table table-striped table-sm tableType">
                    <thead class="tablehead">
                        <tr>
                            <th>訂單編號</th>
                            <th>會員帳號</th>
                            <th>會員姓名</th>
                        </tr>
                    </thead>
                    <tbody class="tablebody">
                        <tr v-for="(order, index) in orders" :key="order.adoptionOrderId" @click="handleClick(index)">
                            <td>{{order.adoptionOrderId}}</td>
                            <td>{{Maccount}}</td>
                            <td>{{Mname}}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
        <div v-if="!editflag" class="Morderlist">
            <div>
                <div v-if="flag">
                    <p class="tabletitle">領養訂單資訊
                    <button @click="flag=!flag" class="backbutton">返回</button>
                    <button @click="editflag=!editflag" class="editbutton">修改</button>
                    </p>
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">訂單編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].adoptionOrderId}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">會員帳號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{Maccount}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">會員姓名</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{Mname}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">約看時間</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].appointmentTime}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">領養進度</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].status}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!saveflag">
            <div>
                <div v-if="editflag">
                <p class="tabletitle">領養訂單資訊
                <button @click="editflag=!editflag" class="backbutton">返回</button>
                <button @click="modify" class="savebutton">確認</button>
                </p>
                
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">訂單編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].adoptionOrderId}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">會員帳號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{Maccount}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">會員姓名</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{Mname}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">約看時間</p>
                                </div>
                                <div class="col-sm-4">
                                    <DatePicker v-model="orders[selectorder].appointmentTime" class="datepickers" placeholder="選擇時間"></DatePicker>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <label for="progress">領養進度</label>
                                </div>
                                <div class="col-sm-1">
                                        <select v-model="orders[selectorder].status">
                                            <option value=0>提出申請</option>
                                            <option value=1>約看中</option>
                                            <option value=2>領養完成</option>
                                        </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdoptionOrderDataService from '@/services/AdoptionOrderDataService';
import MemberDataService from '@/services/MemberDataService';
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    components: { DatePicker },
    data () {
        return {
            orders: [],
            Maccount: null,
            Mname: null,
            flag: false,
            selectorder: null,
            editflag: false,
            saveflag: false,
        }
    },

    methods:{
        handleClick(index){
            this.flag = !this.flag
            this.selectorder = index
        },

        modify() {
            this.editflag=!this.editflag
            console.log(this.orders[this.selectorder])
        },

        getAdoOrder() {
            AdoptionOrderDataService.getAll()
                .then(response => {
                    this.orders = response.data
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.getAdoOrder()
    },
}
</script>

<style>
.MadoptOrder {
    font-size: 40px;
    background-color: white
}

.tabletitle {
    text-align: left;
}

.tablehead {
    background-color:rgb(218,217,217);
}

.tablebody {
    background-color:white;
    font-size: 28px;
}

td, th {
  border: 1px solid #706D6D;
  text-align: center;
  padding: 8px;
}

.workspace{
    position: absolute;
    top: 3.8%;
    right: 2%;
    width: 72.5%;
    height: 93%;
    background-color: white;
}

.backbutton {
    position: relative;
    left: 55%;
    border-radius: 30px;
    background: rgba(148, 148, 148, 0.5);
}

.editbutton {
    position: relative;
    left: 57%;
    background: rgb(255, 228, 181);
    border-radius: 30px;
}

.savebutton {
    position: relative;
    left: 57%;
    background-color: rgb(244, 164, 96);
    border-radius: 30px;
}

.card mb-4 {
    position: relative;
    left: 50%;
}

.orderdetail {
    position: relative;
    left: 110%;
}

.card-body {
    background-color: white;
}

.datepickers {
    width: 200px;
}

.progresser {
    margin-left: 0px;
}

.mb-0 {
    text-align: center;
}


</style>



