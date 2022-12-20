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
                        <tr v-for="(order, index) in orders" :key="order.id" @click="handleClick(index)">
                            <td>{{order.nurseryPetOrderId}}</td>
                            <td>{{order.Maccount}}</td>
                            <td>{{order.Mname}}</td>
                        </tr>
                    </tbody>
                </table>
        </div>

        <div v-if="!editflag" class="Morderlist">
            <div>
                <div v-if="flag">
                    <p class="tabletitle">托兒訂單資訊
                        <button @click="flag=!flag" class="backbutton">返回</button>
                        <button @click="editflag=!editflag" class="editbutton">修改</button>
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
                                    <p class="text-muted mb-0" style="text-align: left">${{orders[selectorder].price}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <p class="mb-0">訂單狀態</p>
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
                                        <input type="number" class="form-control-sm" aria-label="Amount (to the nearest dollar)" size="5" v-model="orders[selectorder].price">
                                        </div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <label for="progress">訂單狀態</label>
                                </div>
                                <div class="col-sm-1">
                                        <select name="" id="" v-model="orders[selectorder].status">
                                            <option value=0>受理中</option>
                                            <option value=1>配對中</option>
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
import NurserypetorderDataService from '@/services/NurserypetorderDataService';
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

    export default {
        components: { DatePicker },
        data () {
            return {
                orders: [],
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

                getNursery() {
                    NurserypetorderDataService.getAll()
                        .then(response => {
                            this.orders = response.data
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