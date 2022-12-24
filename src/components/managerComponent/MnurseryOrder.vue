<template>
    <div class="MnurseryOrder">
        <div v-if="!flag" class="Morderlist">
            <p class="tabletitle">托兒訂單列表</p>
                <table class="table table-striped table-sm tableType">
                    <thead class="tablehead">
                        <tr>
                            <th>訂單編號</th>
                            <th>會員帳號</th>
                            <th>會員姓名</th>
                        </tr>
                    </thead>
                    <tbody class="tablebody">
                        <tr v-for="(order, index) in orders" :key="order.nurseryPetOrderId" @click="handleClick(index)">
                            <td>{{order.nurseryPetOrderId}}</td>
                            <td>{{MemberD[index].memberName}}</td>
                            <td>{{MemberD[index].memberName}}</td>
                        </tr>
                    </tbody>
                </table>
        </div>

        <div v-if="!editflag" class="Morderlist">
            <div>
                <div v-if="flag">
                    <p class="tabletitle">托兒訂單資訊
                        <button @click="flag=!flag" class="backbutton">返回</button>
                        <button @click="adjust(orders[selectorder].price, orders[selectorder].status)" class="editbutton">修改</button>
                    </p>

                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-5">
                                    <p class="mb-0">訂單編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].nurseryPetOrderId}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <p class="mb-0">會員編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].memberId_NPO}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <p class="mb-0">寵物編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].petId_NPO}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <p class="mb-0">房間編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].roomId_NPO}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <p class="mb-0" >日期區間</p>
                                </div>
                                <div class="col-sm-7">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].startTime}} ~ {{orders[selectorder].endTime}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <p class="mb-0">金額</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">${{ orders[selectorder].price }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <p class="mb-0">訂單狀態</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{ orderSta[orders[selectorder].status] }}</p>
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
                <p class="tabletitle">托兒訂單資訊
                    <button @click="editflag=!editflag" class="backbutton">返回</button>
                    <button @click="modify" class="savebutton">確認</button>
                </p>
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-5">
                                    <p class="mb-0">訂單編號</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].nurseryPetOrderId}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <p class="mb-0">會員編號</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].memberId_NPO}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <p class="mb-0">寵物編號</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].petId_NPO}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <p class="mb-0">房間編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].roomId_NPO}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <p class="mb-0" >日期區間</p>
                                </div>
                                <div class="col-sm-7">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].startTime}} ~ {{orders[selectorder].endTime}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <p class="mb-0">金額</p>
                                </div>
                                <div class="col-sm-5">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">$</span>
                                        </div>
                                        <input type="number" class="form-control-sm" aria-label="Amount (to the nearest dollar)" size="5" v-model="price_T">
                                        </div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <label for="progress">訂單狀態</label>
                                </div>
                                <div class="col-sm-1">
                                        <select name="" id="" v-model="status_T">
                                            <option value=1>正常</option>
                                            <option value=2>管理者取消</option>
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
import NurserypetorderDataService from '@/services/NurserypetorderDataService';
import MemberDataService from '@/services/MemberDataService';
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

    export default {
        components: { DatePicker },
        data () {
            return {
                orders: [],
                MemberD: [],
                orderSta: ['使用者已刪除','正常','管理者已取消'],
                status_T: null,
                price_T: null,

                flag: false,
                selectorder: null,
                editflag: false,
                saveflag: false,
            }
        },

        methods:{
                //點擊某筆訂單
                handleClick(index){
                    this.flag = !this.flag
                    this.selectorder = index
                },

                //進入修改
                adjust(P, S) {
                    this.editflag=!this.editflag
                    this.status_T = S
                    this.price_T = P
                },

                //確認修改
                modify() {
                    this.orders[this.selectorder].price = this.price_T
                    this.orders[this.selectorder].status = this.status_T
                    console.log(this.orders[this.selectorder])
                    NurserypetorderDataService.update(this.orders[this.selectorder].nurseryPetOrderId, this.orders[this.selectorder])
                        .then(response => {
                            if(response.data == 'success') {
                                this.editflag=!this.editflag
                            }
                        })
                        .catch(e => {
                            console.log(e);
                        });

                },

                //更新訂單資料
                getNursery() {
                    this.MemberD = []
                    NurserypetorderDataService.getAll()
                        .then(response => {
                            this.orders = response.data
                            for(var i = 0; i< response.data.length; i++) {
                                MemberDataService.get(response.data[i].memberId_NPO)
                                    .then(response => {
                                        this.MemberD.push(response.data)
                                    })
                                    .catch(e => {
                                        console.log(e);
                                    });
                            }
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }
            },
            mounted() {
                this.getNursery()
            },
        }
</script>

<style>
.MnurseryOrder {
    font-size: 40px;
}

.datepicker {
    width: 200px;
}

.form-control {
    padding:5px 15px;  
    cursor:pointer;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    width: 50%;
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
</style>