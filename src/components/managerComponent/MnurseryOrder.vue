<template>
    <div class="MnurseryOrder">
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
                    <p class="tabletitle">領養訂單資訊</p>
                    <button @click="flag=!flag" class="backbutton">返回</button>
                    <button @click="editflag=!editflag" class="editbutton">修改</button>
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">訂單編號</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{orders[selectorder].orderID}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">會員編號</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{orders[selectorder].Maccount}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">會員姓名</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{orders[selectorder].Mname}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">日期區間</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{orders[selectorder].startTime}} ~ {{orders[selectorder].endTime}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">是否完成</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{orders[selectorder].isComplete}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">訂單狀態</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{orders[selectorder].status}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">建立時間</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{orders[selectorder].createDate}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">修改時間</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{orders[selectorder].modifyDate}}</p>
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
                <p class="tabletitle">領養訂單資訊</p>
                <button @click="editflag=!editflag" class="backbutton">返回</button>
                <button @click="modify(x)" class="savebutton">儲存</button>
                <!-- <input type="button" value="儲存" @click="modify(x)"> -->
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">訂單編號</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{orders[selectorder].orderID}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">會員編號</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{orders[selectorder].Maccount}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">寵物編號</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{orders[selectorder].Mname}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">日期區間</p>
                                </div>
                                <div class="col-sm-9">
                                    <DatePicker v-model="date"></DatePicker>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">是否完成</p>
                                </div>
                                <div class="col-sm-9">
                                    <select name="progress" id="state">
                                            <option value="是">是</option>
                                            <option value="否">否</option>
                                        </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <label for="progress">訂單狀態</label>
                                </div>
                                <div class="col-sm-9">
                                        <select name="progress" id="state">
                                            <option value="正常">正常</option>
                                            <option value="取消">取消</option>
                                            <option value="完成">完成</option>
                                        </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">建立時間</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{orders[selectorder].createDate}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">修改時間</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{orders[selectorder].modifyDate}}</p>
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
                    {orderID: 0, Maccount: 'bob123', Mname:'bob', PetID: 111001, roomID: 123, Description:'testing', startTime: '2022年11月01日', endTime: '2022年11月04日', amount: '1500', isComplete: '是', status:'正常',createDate: '2022年11月01日', modifyDate: '2022年11月05日'},
                    {orderID: 1, Maccount: 'alice123', Mname:'alice', PetID: 111002, roomID: 123, Description:'testing1', startTime: '2022年11月04日', endTime: '2022年11月05日', amount: '500', isComplete: '是', status:'取消',createDate: '2022年11月02日', modifyDate: '2022年11月05日'},
                    {orderID: 2, Maccount: 'mia123', Mname:'mia', PetID: 111003, roomID: 124,Description:'testing3', startTime: '2022年11月02日', endTime: '2022年11月03日', amount: '500', isComplete: '是', status:'完成', createDate: '2022年11月04日', modifyDate: '2022年11月05日'},
                    {orderID: 3, Maccount: 'ethan123', Mname:'ethan', PetID: 111004, roomID:124, Description:'testing4', startTime: '2022年11月09日', endTime: '2022年11月013日', amount: '2000', isComplete: '是', status:'正常',createDate: '2022年11月04日', modifyDate: '2022年11月05日'},
                    {orderID: 4, Maccount: 'jack123', Mname:'jack', PetID: 111005, roomID: 124, Description:'testing5', startTime: '2022年11月07日', endTime: '2022年11月08日', amount: '500', isComplete: '是', status:'取消',createDate: '2022年11月05日', modifyDate: '2022年11月05日'},
                    {orderID: 5, Maccount: 'vivian123', Mname:'vivian', PetID: 111006, roomID: 125, Description:'testing6',  startTime: '2022年11月23日', endTime: '2022年11月24日', amount: '500', isComplete: '是', status:'完成',createDate: '2022年11月06日', modifyDate: '2022年11月05日'},
                    {orderID: 6, Maccount: 'josh123', Mname:'josh', PetID: 111007, roomID: 125, Description:'testing7', startTime: '2022年11月18日', endTime: '2022年11月25日', amount: '3500', isComplete: '是', status:'完成',createDate: '2022年11月07日', modifyDate: '2022年11月05日'},
                ],
            flag: false,
            selectorder: null,
            editflag: false,
            saveflag: false,
            date: null,
            }
        },

        methods:{
                handleClick(ID){
                    this.flag = !this.flag
                    this.selectorder = ID
                },

                modify() {
                    this.x = this.progress
                    this.editflag=!this.editflag
                }
            }
        }
</script>

<style>
.MnurseryOrder {
    font-size: 40px;
}
</style>