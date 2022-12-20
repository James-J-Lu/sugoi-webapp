<template>
    <div class="MadoptOrder">
        <div v-if="!flag" class="Morderlist">
            <p class="tabletitle">領養訂單列表</p>
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
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].orderID}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">會員帳號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].Maccount}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">會員姓名</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].Mname}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">約看時間</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].appointment}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">領養進度</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].progress}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">建立時間</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-muted-mb-0" style="text-align: left">{{orders[selectorder].createDate}}</p>
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
                <button @click="modify(s_date,s_progress)" class="savebutton">確認</button>
                <!-- <input type="button" value="儲存" @click="modify(x)"> -->
                </p>
                
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
                                    <p class="mb-0">會員帳號</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].Maccount}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">會員姓名</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-muted mb-0" style="text-align: left">{{orders[selectorder].Mname}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="mb-0">約看時間</p>
                                </div>
                                <div class="col-sm-4">
                                    <DatePicker v-model="orders[selectorder].appointment" class="datepickers" placeholder="選擇時間"></DatePicker>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <label for="progress">領養進度</label>
                                </div>
                                <div class="col-sm-1">
                                        <select v-model="orders[selectorder].progress">
                                            <option value="提出申請">提出申請</option>
                                            <option value="約看中">約看中</option>
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
                    {orderID: 0, Maccount: 'bob123', Mname:'bob', Description:'testing', appointment:'2022年12月01日', progress:'約看中', createDate:'2022年11月01日'},
                    {orderID: 1, Maccount: 'alice123', Mname:'alice', Description:'testing1', appointment:'2022年12月02日', progress:'約看中', createDate:'2022年11月02日'},
                    {orderID: 2, Maccount: 'mia123', Mname:'mia', Description:'testing3',  appointment:'2022年12月03日', progress:'約看中', createDate:'2022年11月04日'},
                    {orderID: 3, Maccount: 'ethan123', Mname:'ethan', Description:'testing4', appointment:'2022年12月04日', progress:'約看中', createDate:'2022年11月04日'},
                    {orderID: 4, Maccount: 'jack123', Mname:'jack', Description:'testing5', appointment:'2022年12月05日', progress:'約看中', createDate:'2022年11月05日'},
                    {orderID: 5, Maccount: 'vivian123', Mname:'vivian', Description:'testing6', appointment:'2022年12月06日', progress:'約看中', createDate:'2022年11月06日'},
                    {orderID: 6, Maccount: 'josh123', Mname:'josh', Description:'testing7', appointment:'2022年12月07日', progress:'約看中', createDate:'2022年11月07日'},
                ],
            flag: false,
            selectorder: null,
            editflag: false,
            saveflag: false,
            date: null,
            s_date: null,
            s_progress: null,
            }
        },

        methods:{
                handleClick(ID){
                    this.flag = !this.flag
                    this.selectorder = ID
                },

                modify(s_date,s_progress) {
                    this.date = s_date
                    this.progress = s_progress
                    this.editflag=!this.editflag
                }
            }
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



