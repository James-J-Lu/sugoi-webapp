<template>
    <div class="MadoptOrder">
        <div v-if="!flag" class="Morderlist">
        <p>管理者*領養訂單</p>
         <table class="table table-striped table-sm tableType">
            <thead>
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
                        <div class="card mb-4" style="width: 25rem;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">領養訂單編號：{{orders[selectorder].orderID}}</li>
                                <li class="list-group-item">會員帳號：{{orders[selectorder].Maccount}}</li>
                                <li class="list-group-item">會員姓名：{{orders[selectorder].Mname}}</li>
                                <li class="list-group-item">約看時間：</li>
                                <li class="list-group-item">領養進度：</li>
                                <li class="list-group-item">建立時間：</li>
                            </ul>
                        </div>
                    </tbody>
                </table>
            </div>
        </div>

        <div v-if="editflag">
            <p>測試</p>
            <tr>
                        <div class="card">
                            <div class="card-body">
                                <p>領養訂單編號：{{orders[selectorder].orderID}}</p>
                            </div>
                        </div>
                    </tr>
                    <tr>
                        <div class="card">
                            <div class="card-body">
                                <p>會員帳號：{{orders[selectorder].Maccount}}</p>
                            </div>
                        </div>
                    </tr>
                    <tr>
                        <div class="card">
                            <div class="card-body">
                                <p>會員姓名：{{orders[selectorder].Mname}}</p>
                            </div>
                        </div>
                    </tr>
                    <tr>
                        <div class="card">
                            <div class="card-body">
                                <p>約看時間：</p>
                            </div>
                        </div>
                    </tr>
                    <tr>
                        <div class="card">
                            <div class="card-body">
                                <p>領養進度：</p>
                            </div>
                        </div>
                    </tr>
                    <tr>
                        <div class="card">
                            <div class="card-body">
                                <p>建立日期：</p>
                            </div>
                        </div>
                    </tr>
        </div>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                orders: [
                    {orderID: 0, Maccount: 'bob123', Mname:'bob', Description: 'testing'},
                    {orderID: 1, Maccount: 'alice123', Mname:'alice', Description: 'testing1'},
                    {orderID: 2, Maccount: 'mia123', Mname:'mia', Description: 'testing3'},
                    {orderID: 3, Maccount: 'ethan123', Mname:'ethan', Description: 'testing4'},
                    {orderID: 4, Maccount: 'jack123', Mname:'jack', Description: 'testing5'},
                    {orderID: 5, Maccount: 'vivian123', Mname:'vivian', Description: 'testing6'},
                    {orderID: 6, Maccount: 'josh123', Mname:'josh', Description: 'testing7'},
                ],
            flag: false,
            selectorder: null,
            editflag: false,
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



