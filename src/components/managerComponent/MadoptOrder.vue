<template>
    <div class="MadoptOrder">
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
                <tr v-for="order in orders" :key="order.id">
                    <th width="100px"><input class="form-check-input me-1" type="checkbox"></th>
                    <td>{{order.orderID}}</td>
                    <td>{{order.Maccount}}</td>
                    <td>{{order.Mname}}</td>
                    <td>{{order.Description}}</td>
                </tr>
            </tbody>
        </table>
    </div>
 
</template>

<script>
    export default {
        data () {
            return {
                orders: [
                    {orderID: '0000001', Maccount: 'bob123', Mname:'bob', Description: 'tesing'},
                    {orderID: '0000002', Maccount: 'alice123', Mname:'alice', Description: 'tesing1'},
                    {orderID: '0000003', Maccount: 'mia123', Mname:'mia', Description: 'tesing3'},
                    {orderID: '0000004', Maccount: 'ethan123', Mname:'ethan', Description: 'tesing4'},
                    {orderID: '0000005', Maccount: 'jack123', Mname:'jack', Description: 'tesing5'},
                    {orderID: '0000006', Maccount: 'vivian123', Mname:'vivian', Description: 'tesing6'},
                    {orderID: '0000007', Maccount: 'josh123', Mname:'josh', Description: 'tesing7'},
                ],
            }
        },
    }

</script>

<style>
.MadoptOrder {
    font-size: 40px;
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
    background-color: bisque;
}
</style>

