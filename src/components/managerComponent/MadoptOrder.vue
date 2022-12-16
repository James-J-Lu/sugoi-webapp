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
            <tbody>
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
            <div v-if="flag">
                <button @click="flag=!flag" class="backbutton">返回</button>
                <button @click="editflag=!editflag" class="editbutton">修改</button>
                <table>
                    <tbody>
                        <div class="card mb-4" style="width: 100%;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">領養訂單編號：{{orders[selectorder].orderID}}</li>
                                <li class="list-group-item">會員帳號：{{orders[selectorder].Maccount}}</li>
                                <li class="list-group-item">會員姓名：{{orders[selectorder].Mname}}</li>
                                <li class="list-group-item">約看時間：{{orders[selectorder].appointment}}</li>
                                <li class="list-group-item">領養進度：{{orders[selectorder].progress}}</li>
                                <li class="list-group-item">建立時間：{{orders[selectorder].createDate}}</li>
                            </ul>
                        </div>
                    </tbody>
                </table>
            </div>
        </div>

        <div v-if="editflag">
            <h1>修改頁面測試</h1>
            <!-- <div class="card">
            <div class="card-body"> -->
                <tr>
                    <p>領養訂單編號：{{orders[selectorder].orderID}}</p>
                </tr>
                <tr>
                    <p>會員編號：{{orders[selectorder].Maccount}}</p>
                </tr>
                <tr>
                    <p>狗狗編號：{{orders[selectorder].Mname}}</p>
                </tr>
                <tr>
                    <p>約看日期：</p>
                    <DatePicker v-model="date" format="dd-MM-yyyy"></DatePicker>
                </tr>
                <tr>
                    <label for="progress">領養進度：</label>
                    <select name="progress" id="state">
                        <option value="提出申請">提出申請</option>
                        <option value="約看中">約看中</option>
                        <option value="領養完成">領養完成</option>
                    </select>
                    <!-- <input type="submit" value="Submit"></input> -->
                </tr>
                <tr>
                    <p>建立日期：{{orders[selectorder].createDate}}</p>
                </tr>
            <!-- </div>
            </div> -->
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
            date: null,
            }
        },

        methods:{
                handleClick(ID){
                    this.flag = !this.flag
                    this.selectorder = ID
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
    left: 37%;
}

.editbutton {
    position: relative;
    left: 39%;
}

.card mb-4 {
    position: relative;
    left: 50%;
}

.orderdetail {
    position: relative;
    left: 110%;
}

.card {
    position: relative;
    top: 50%;  
    left: 110%;
    /* transform: translate(0, -50%); */
}
</style>



