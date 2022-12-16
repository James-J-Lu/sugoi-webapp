<template>
    <div v-if="atOrdersPage" class="myOrder">
        <p>我的訂單</p>
        <button 
            v-for="tab in tabs"
            :key="tab"
            :class="['tab-button', {active: currentTab === tab}]"
            @click="currentTab = tab">
            {{tab}}
        </button>

        <div v-if="noOrders" class="workspace">
            <tabNurseryNoData v-if="currentTab == '托兒訂單'" class="nurseryNoData"></tabNurseryNoData>
            <tabAdpotNoData v-if="currentTab == '領養訂單'" class="nurseryNoData"></tabAdpotNoData>
            <br><br><br><br><br><br><br><br><br>
        </div>

        <div v-if="!noOrders" class="workspace">
            <p>test</p>
            <!-- <tabNurseryData v-if="currentTab == '托兒訂單'" class="nurseryNoData">
                <nOrder v-for="nurseryOrder in nurseryOrders" :key="nurseryOrder.id" :name="nurseryOrder.name" ></nOrder>
            </tabNurseryData>
            <tabAdpotData v-if="currentTab == '領養訂單'" class="nurseryNoData">
                <aOrder v-for="adpotOrder in adoptOrders" :key="adpotOrder.id" :name="adpotOrder.name" ></aOrder>
            </tabAdpotData> -->
        </div>
    </div>

    <div v-if="!atOrdersPage" class="myOrder">
        <p>托兒訂單詳細資料</p>
        <div class="workspace">
            <div class="orderId">
                <!-- &emsp; 全形空格 排版用 -->
                <p>訂單編號：{{detailNOrderId}}&emsp;</p>
            </div>
            
            <div class="content">
                <img src="https://static.vecteezy.com/system/resources/previews/006/059/952/non_2x/dog-icon-isolated-on-white-background-puppy-head-pictogram-free-vector.jpg" class="image">
                <div class="text">
                    <p>狗狗：{{detailNOrderPetName}}</p>
                    <p>床位：{{detailNOrderRoomNum}}</p>
                    <p>入住時間：{{detailNOrderSTime}}</p>
                    <p>退房時間：{{detailNOrderETime}}</p>
                    <p>總金額：$ {{detailNOrderPrice}}</p>
                </div>
            </div>    
        </div>
        <br>
        <button type="button" class="cancel" v-on:click="cancel">取消此筆訂單</button>
    </div>

    <div class="myOrder">
        <p>領養訂單詳細資料</p>
        <div class="workspace">
            <div class="orderId">
                <!-- &emsp; 全形空格 排版用 -->
                <p>訂單編號：{{detailAOrderId}}&emsp;</p>
            </div>
            
            <!-- 進度條: refer to https://ithelp.ithome.com.tw/articles/10200843 and https://codepen.io/yuski/pen/VEPxbO -->
            <!-- <div class="container">
                <ul class="progress">
                    <li class="active">step1</li>
                    <li>step2</li>
                    <li>step3</li>
                </ul>
            </div> -->

            <div class="container">
                <ul class="progress2">
                    <li class="done">受理中</li>
                    <li class="active">配對成功，請於指定時間辦理領養手續</li>
                    <li class="">領養完成</li>
                </ul>
            </div>

            <div class="content">
                <img src="https://static.vecteezy.com/system/resources/previews/006/059/952/non_2x/dog-icon-isolated-on-white-background-puppy-head-pictogram-free-vector.jpg" class="image">
                <div class="text">
                    <p>狗狗：{{detailAOrderPetName}}</p>
                    <p>領養時間：{{detailAOrderAppointTime}}</p>
                    <br>
                    <button type="button" class="navBtn" v-on:click="navigation">查看狗狗檔案</button>
                </div>
            </div>    
        </div>
        <br>
        <div class="btns">
            <button type="button" class="deleteBtn" v-on:click="deleteOrder">刪除領養訂單</button>
            <button type="button" class="editBtn" v-on:click="editAOrder">修改領養時間</button>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            //此mamber有沒有任何訂單
            noOrders: false,
            //noOrders: true,

            //是在orders overview page還是特定order detail page
            atOrdersPage: false,
            //atOrdersPage: true,

            currentTab: "托兒訂單",
            tabs:['托兒訂單','領養訂單'],

            nurseryOrders: [
                {id: 123, petName: 'cookie'},
                {id: 124, petName: 'apple'},
            ],
            adoptOrders: [
                {id: 333, petName: 'mandy'},
                {id: 444, petName: 'teddy'},
                {id: 555, petName: 'gina'},
            ],

            detailNOrderId: 123,
            detailNOrderPetName: 'cookie',
            detailNOrderRoomNum: '506',
            detailNOrderSTime: '2022/5/6 19:00',
            detailNOrderETime: '2022/5/9 19:00',
            detailNOrderPrice: 4000,
            
            detailAOrderId: 555,
            detailAOrderPetName: 'gina',
            detailAOrderAppointTime: '2022/7/14 09:00',
            detailAOrderStatus: '處理中',
            
            editable: false
        }
    },
    components:{
        'tabNurseryNoData': <div>目前還沒有任何托兒訂單噢！</div>,
        'tabAdpotNoData': <div>目前還沒有任何領養訂單噢！</div>,
        // 'tabNurseryData': <div></div>,
        // 'tabAdpotData': <div></div>,
        // 'nOrder': <li></li>,
        // 'aOrder': <li></li>,
    },
    methods:{
        edit() {
            this.editable = true
        },
        cancel() {
            
        },
        navigation(){

        },
        deleteOrder(){

        },
        editAOrder(){

        }
    }
}

</script>

<style>
.myOrder {
    font-size: 40px;
}

.workspace {
    position: relative;
    left: 15%;
    width: 70%;
    height: 85%;
    font-size: 30px;
    background-color: rgba(249, 236, 190, 0.44);
    border-radius: 40px;
}

.tab-button {
    background-color: rgba(249, 236, 190, 0.44);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

.nurseryNoData{
    position: relative;
    left: 15%;
    width: 70%;
    height: 85%;
    top: 200px;
}

.adoptNoData{
    position: relative;
    left: 15%;
    width: 70%;
    height: 85%;
    top: 200px;
}

.orderId{
    position: relative;
    text-align: right;
    height: 85%;
}

.content{
    position: relative;
    width: 85%;
    display: inline-flex;
}

.image{
    width: 300px;
    height: 300px;
}

.text{
    margin-left:5%;
    font-size: 40px;
    text-align: left;
}

.cancel {
    color: white;
    background: #9A9DA2;
    border-radius: 20px;
    font-size: 40px;
}



.container {
    position: relative;
    width: 100%;
    height: 150px;
}
/*沒有icon的樣式 */
/* .progress {
  counter-reset:step;
}
.progress li {
  list-style-type: none;
  float:left;
  width: 33.33%;
  position:relative;
  text-align:center;
}
.progress li:before {
  content:counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  line-height:30px;
  border:1px solid #ddd;
  display:block;
  text-align:center;
  margin:0 auto 10px auto;
  border-radius:50%;
  background-color: #fff;
}
.progress li:after {
  content:"";
  position:absolute;
  width: 100%;
  height:1px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index:-1;
}
.progress li:first-child:after {
  content:none;
}
.progress li.active {
  color:green;
}
.progress li.active:before {
  border-color:green;
}
.progress li.active + li:after {
  background-color: green;
} */




.progress2 li {
  list-style-type: none;
  float:left;
  width: 33.33%;
  position:relative;
  text-align:center;
}
.progress2 li:before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f111";
  width: 30px;
  height: 30px;
  line-height:30px;
  border:1px solid #ddd;
  display:block;
  text-align:center;
  margin: 0 auto 10px auto;
  border-radius:50%;
  background-color: #fff;
}
.progress2 li.done:before {
    font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f00c";
}
.progress2 li:after {
  content:"";
  position:absolute;
  width: 100%;
  height:1px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index:-1;
}
.progress2 li:first-child:after {
  content:none;
}
.progress2 li.active,.progress2 li.done {
  color:rgba(9, 170, 20);
}
.progress2 li.active:before ,.progress2 li.done:before {
  border-color:rgba(9, 170, 20);
}
.progress2 li.active + li:after,
.progress2 li.done + li:after
{
  background-color: rgba(9, 170, 20);
}

.navBtn{
    color: white;
    background: #114ABA;
    border-radius: 20px;
    font-size: 40px;
}

.btns{
    display: inline-flex;
    width: 70%;
}

.deleteBtn{
    color: white;
    background: #9A9DA2;
    border-radius: 20px;
    font-size: 40px;
    margin-right:25%;
}

.editBtn{
    color: white;
    background: #114ABA;
    border-radius: 20px;
    font-size: 40px;
    
}
</style>