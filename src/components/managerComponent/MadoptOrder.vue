<template>
    <div class="MadoptOrder">
        <div v-if="!flag" class="Morderlist">
            <p class="tabletitle">領養訂單列表</p>
                <table class="table table-striped table-sm tableType">
                    <thead class="tablehead">
                        <tr>
                            <th>訂單編號</th>
                            <th>會員編號</th>
                            <th>狗狗編號</th>
                        </tr>
                    </thead>
                    <tbody class="tablebody">
                        <tr v-for="(order, index) in orders" :key="order.adoptionOrderId" @click="handleClick(index)">
                            <td>{{order.adoptionOrderId}}</td>
                            <td>{{order.memberId_AO}}</td>
                            <td>{{order.adoPetId_AO}}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
        <div v-if="!editflag" class="Morderlist">
            <div>
                <div v-if="flag">
                    <p class="tabletitle">領養訂單資訊
                    <button @click="flag=!flag" class="backbutton">返回</button>
                    <button @click="adjust" class="editbutton">修改</button>
                    </p>
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-4">
                                    <p class="mb-0">訂單編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].adoptionOrderId}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <p class="mb-0">會員編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].memberId_AO}}</p>
                                </div>
                            </div>
                            <!-- <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">會員姓名</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{Mname}}</p>
                                </div>
                            </div> -->
                            <div class="row">
                                <div class="col-sm-4">
                                    <p class="mb-0">狗狗編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].adoPetId_AO}}</p>
                                </div>
                            </div>
                            <!-- <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">狗狗名稱</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{Mname}}</p>
                                </div>
                            </div> -->
                            <div class="row">
                                <div class="col-sm-4">
                                    <p class="mb-0">約看時間</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].appointmentTime}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <p class="mb-0">領養進度</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orderSta[orders[selectorder].status]}}</p>
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
                                <div class="col-sm-4">
                                    <p class="mb-0">訂單編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].adoptionOrderId}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <p class="mb-0">會員編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].memberId_AO}}</p>
                                </div>
                            </div>
                            <!-- <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">會員姓名</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{Mname}}</p>
                                </div>
                            </div> -->
                            <div class="row">
                                <div class="col-sm-4">
                                    <p class="mb-0">狗狗編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].adoPetId_AO}}</p>
                                </div>
                            </div>
                            <!-- <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">狗狗名稱</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{Mname}}</p>
                                </div>
                            </div> -->
                            <div class="row">
                                <div class="col-sm-4">
                                    <p class="mb-0">約看時間</p>
                                </div>
                                <div class="col-sm-4">
                                    <DatePicker v-model="time_T" :enable-time-picker="false" :clearable="false" class="datepickers" placeholder="選擇時間"></DatePicker>
                                    <select v-model="selectHour" class="choseHour">
                                        <option disabled value="">Please select time</option>
                                        <option>10</option>
                                        <option>13</option>
                                        <option>16</option>
                                        <option>19</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <label for="progress">領養進度</label>
                                </div>
                                <div class="col-sm-1">
                                    <select v-model="status_T">
                                        <option value=0>會員已取消</option>
                                        <option value=1>受理中</option>
                                        <option value=2>配對完成</option>
                                        <option value=3>已完成訂單</option>
                                        <option value=4>管理者取消</option>
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
import AdoptionPetDataService from '@/services/AdoptionPetDataService';
import { format } from "date-fns";
import MemberDataService from '@/services/MemberDataService';
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    components: { DatePicker },
    data () {
        return {
            orders: [],
            orderSta: ['會員已取消', '受理中', '配對完成', '已完成訂單', '管理者取消'],
            time_T: null,
            selectHour: null, 
            status_T: null,

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

        //into adjust page
        adjust() {
            if(this.orders[this.selectorder].status == 1 || this.orders[this.selectorder].status == 2) {
                this.editflag=!this.editflag
                this.time_T = this.orders[this.selectorder].appointmentTime
                this.selectHour = this.orders[this.selectorder].appointmentTime.split('T')[1].split(':')[0]
                this.status_T = this.orders[this.selectorder].status
            }
            else {
                window.alert('訂單狀已無法修改')
            }
        },

        modify() {
            this.orders[this.selectorder].appointmentTime = this.time_T.split('T')[0] + ' ' + this.selectHour + ':00:00'
            this.orders[this.selectorder].status = this.status_T
            console.log(this.orders[this.selectorder])
            AdoptionOrderDataService.update(this.orders[this.selectorder].adoptionOrderId, this.orders[this.selectorder])
                .then(response => {
                    if(response.data == 'success') {
                        if(this.status_T == 4 || this.status_T == 0) {
                            AdoptionPetDataService.update(this.orders[this.selectorder].adoPetId_AO, { status: 2 })
                            .then(response => {
                                    window.alert('修改成功')
                                })
                                .catch(e => {
                                    console.log(e);
                                });
                        }
                        else
                            window.alert('修改成功')
                    }
                })
                .catch(e => {
                    console.log(e);
                });
            this.editflag=!this.editflag
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



