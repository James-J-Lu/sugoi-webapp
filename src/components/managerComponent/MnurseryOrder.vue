<template>
    <div class="MnurseryOrder">
        <div v-if="!flag" class="Morderlist">
            <p class="tabletitle">托兒訂單列表</p>
                <table class="table table-striped table-sm tableType">
                    <thead class="tablehead">
                        <tr>
                            <th width="100px"><input class="form-check-input me-1" type="checkbox"></th>
                            <th>訂單編號</th>
                            <th>會員帳號</th>
                            <th>會員姓名</th>
                            <th style="width:40%">說明</th>
                        </tr>
                    </thead>
                    <tbody class="tablebody">
                        <tr v-for="order in orders" :key="order.id" @click="handleClick(order.orderID)">
                            <td width="100px"><input class="form-check-input me-1" type="checkbox"></td>
                            <td>{{order.orderID}}</td>
                            <td>{{order.Maccount}}</td>
                            <td>{{order.Mname}}</td>
                            <td>{{order.Description}}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
        <div v-if="!editflag" class="Morderlist">
            <div>
                <div v-if="flag">
                    <p class="tabletitle">托兒訂單資訊</p>
                    <div class="button">
                        <button @click="flag=!flag" class="backbutton">返回</button>
                        <button @click="editflag=!editflag" class="editbutton">修改</button>
                    </div>
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">訂單編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].orderID}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">會員編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].Maccount}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">寵物編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].PetID}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">房間編號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].roomID}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0" >日期區間</p>
                                </div>
                                <div class="col-sm-5">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].startTime}} ~ {{orders[selectorder].endTime}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">金額</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">${{orders[selectorder].amount}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">訂單狀態</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].status}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">建立時間</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].createDate}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">修改時間</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].modifyDate}}</p>
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
                <p class="tabletitle">托兒訂單資訊</p>
                <div>
                    <button @click="editflag=!editflag" class="backbutton">返回</button>
                    <button @click="modify(s_startTime,s_endTime,s_amount,s_roomID,s_status)" class="savebutton">確認</button>
                </div>
                <!-- <input type="button" value="儲存" @click="modify(x)"> -->
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">訂單編號</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].orderID}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">會員編號</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].Maccount}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">寵物編號</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].PetID}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">房間編號</p>
                                </div>
                                <div class="col-sm-4">
                                    <input type="number" class="form-control inputDisplay" v-model="s_roomID">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">日期區間</p>
                                </div>
                                <div class="col-sm-4">
                                    <p><input type="date" size="5" placeholder="起始時間" v-model="s_startTime">  ~  <input type="date" size="5" placeholder="結束時間" style="text-align: left" v-model="s_endTime"></p><br>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">金額</p>
                                </div>
                                <div class="col-sm-4">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">$</span>
                                        </div>
                                        <label for="cc-number" class="form-label">{{x}}</label>
                                        <input type="number" class="form-control-sm" aria-label="Amount (to the nearest dollar)" size="5" v-model="s_amount">
                                        </div>
                                    <!-- <label for="cashicon">$</label> -->
                                    <!-- <input type="number" id="amount" name="cashicon" min="0" size="5"> -->
                                    <!-- <p class="text-muted mb-0">${{orders[selectorder].amount}}</p> -->
                                    </div>
                                </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <label for="progress">訂單狀態</label>
                                </div>
                                <div class="col-sm-4">
                                        <select name="" id="" v-model="s_status">
                                            <option value="受理中">受理中</option>
                                            <option value="配對中">配對中</option>
                                            <option value="領養完成">領養完成</option>
                                        </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">建立時間</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].createDate}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">修改時間</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].modifyDate}}</p>
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
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

    export default {
        components: { DatePicker },
        data () {
            return {
                orders: [
                    {orderID: 0, Maccount: 'bob123', Mname:'bob', PetID: 111001, roomID: 123, Description:'testing', startTime: '2022年11月01日', endTime: '2022年11月04日', amount: '1500', isComplete: '是', status:'受理中',createDate: '2022年11月01日', modifyDate: '2022年11月05日'},
                    {orderID: 1, Maccount: 'alice123', Mname:'alice', PetID: 111002, roomID: 123, Description:'testing1', startTime: '2022年11月04日', endTime: '2022年11月05日', amount: '500', isComplete: '是', status:'配對中',createDate: '2022年11月02日', modifyDate: '2022年11月05日'},
                    {orderID: 2, Maccount: 'mia123', Mname:'mia', PetID: 111003, roomID: 124,Description:'testing3', startTime: '2022年11月02日', endTime: '2022年11月03日', amount: '500', isComplete: '是', status:'領養完成', createDate: '2022年11月04日', modifyDate: '2022年11月05日'},
                    {orderID: 3, Maccount: 'ethan123', Mname:'ethan', PetID: 111004, roomID:124, Description:'testing4', startTime: '2022年11月09日', endTime: '2022年11月013日', amount: '2000', isComplete: '是', status:'受理中',createDate: '2022年11月04日', modifyDate: '2022年11月05日'},
                    {orderID: 4, Maccount: 'jack123', Mname:'jack', PetID: 111005, roomID: 124, Description:'testing5', startTime: '2022年11月07日', endTime: '2022年11月08日', amount: '500', isComplete: '是', status:'配對中',createDate: '2022年11月05日', modifyDate: '2022年11月05日'},
                    {orderID: 5, Maccount: 'vivian123', Mname:'vivian', PetID: 111006, roomID: 125, Description:'testing6',  startTime: '2022年11月23日', endTime: '2022年11月24日', amount: '500', isComplete: '是', status:'領養完成',createDate: '2022年11月06日', modifyDate: '2022年11月05日'},
                    {orderID: 6, Maccount: 'josh123', Mname:'josh', PetID: 111007, roomID: 125, Description:'testing7', startTime: '2022年11月18日', endTime: '2022年11月25日', amount: '3500', isComplete: '是', status:'領養完成',createDate: '2022年11月07日', modifyDate: '2022年11月05日'},
                ],
            flag: false,
            selectorder: null,
            editflag: false,
            saveflag: false,
            date: null,
            s_roomID: null,
            s_startTime: null,
            s_endTime: null,
            s_amount: null,
            s_status: "",
            }
        },

        methods:{
                handleClick(ID){
                    this.flag = !this.flag
                    this.selectorder = ID
                },

                modify(s_startTime,s_endTime,s_amount,s_roomID,s_status) {
                    this.editflag=!this.editflag
                    this.roomID = s_roomID
                    this.startTime = s_startTime
                    this.endTime = s_endTime
                    this.amount = s_amount
                    this.status = s_status
                }
            }
        }
</script>

<style>
.MnurseryOrder {
    font-size: 40px;
}

.datepicker {
    width: 25%;
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
    left: 37%;
    border-radius: 30px;
    background: rgba(148, 148, 148, 0.5);
}

.editbutton {
    position: relative;
    left: 39%;
    background: rgb(255, 228, 181);
    border-radius: 30px;
}

.savebutton {
    position: relative;
    left: 39%;
    background-color: rgb(244, 164, 96);
    border-radius: 30px;
}
</style>