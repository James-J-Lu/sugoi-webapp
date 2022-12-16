<template>
    <div v-if="atOrdersPage" class="myOrder">
        <p>我的訂單</p>
        <button v-for="tab in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]"
            @click="currentTab = tab">
            {{ tab }}
        </button>

        <div v-if="noOrders" class="workspace">
            <tabNurseryNoData v-if="currentTab == '托兒訂單'" class="nurseryNoData"></tabNurseryNoData>
            <tabAdpotNoData v-if="currentTab == '領養訂單'" class="nurseryNoData"></tabAdpotNoData>
            <br><br><br><br><br><br><br><br><br>
        </div>

        <div v-if="!noOrders" class="workspace">
            <tabNurseryData v-if="currentTab == '托兒訂單'">
                <br>
                <div v-for="nurseryOrder in nurseryOrders" :key="nurseryOrder.id">
                    <div class="eachOrder" @click="goToDetailPage">
                        <div class="imgInEachOrder"></div>
                        <div class="orderId">
                            <!-- &emsp; 全形空格 排版用 -->
                            <p>訂單編號：{{ nurseryOrder.id }}&emsp;</p>
                        </div>
                        <div class="petNameInEachOrder">
                            {{ nurseryOrder.petName }}
                        </div>
                        <div class="timeInEachOrder">
                            入住時間：{{ nurseryOrder.sTime }}
                        </div>
                    </div>
                    <br>
                </div>
                <br>
            </tabNurseryData>

            <tabAdpotData v-if="currentTab == '領養訂單'">
                <br>
                <div v-for="adoptOrder in adoptOrders" :key="adoptOrder.id">
                    <div class="eachOrder" @click="goToDetailPage">
                        <div class="imgInEachOrder"></div>
                        <div class="orderId">
                            <!-- &emsp; 全形空格 排版用 -->
                            <p>訂單編號：{{ adoptOrder.id }}&emsp;</p>
                        </div>
                        <div class="petNameInEachOrder">
                            {{ adoptOrder.petName }}
                        </div>
                        <div class="timeInEachOrder">
                            領養時間：{{ adoptOrder.aTime }}
                        </div>
                    </div>
                    <br>
                </div>
                <br>
            </tabAdpotData>
        </div>
    </div>

    <div v-if="!atOrdersPage" class="myOrder">
        <tabNurseryData v-if="currentTab == '托兒訂單'">
            <p>托兒訂單詳細資料</p>
            <div>
                <button type="button" class="backBtn" v-on:click="back">返回</button>
            </div>
            <div class="workspace">
                <div class="orderId">
                    <!-- &emsp; 全形空格 排版用 -->
                    <p>訂單編號：{{ detailNOrderId }}&emsp;</p>
                </div>

                <div class="content">
                    <img src="https://static.vecteezy.com/system/resources/previews/006/059/952/non_2x/dog-icon-isolated-on-white-background-puppy-head-pictogram-free-vector.jpg"
                        class="image">
                    <div class="text">
                        <p>狗狗：{{ detailNOrderPetName }}</p>
                        <p>床位：{{ detailNOrderRoomNum }}</p>
                        <p>入住時間：{{ detailNOrderSTime }}</p>
                        <p>退房時間：{{ detailNOrderETime }}</p>
                        <p>總金額：$ {{ detailNOrderPrice }}</p>
                    </div>
                </div>
            </div>
            <br>
            <div>
                <button type="button" class="deleteNBtn" v-on:click="deleteOrder">取消此筆訂單</button>
            </div>       
        </tabNurseryData>

        <tabAdpotData v-if="currentTab == '領養訂單'">
            <p>領養訂單詳細資料</p>
            <div>
                <button type="button" class="backBtn" v-on:click="back">返回</button>
            </div>
            <div class="workspace">
                <div class="orderId">
                    <!-- &emsp; 全形空格 排版用 -->
                    <p>訂單編號：{{ detailAOrderId }}&emsp;</p>
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
                        <li class="done">受理中<br>2022/7/1 21:22</li>
                        <li class="active">配對成功，請於指定時間辦理領養手續<br>2022/7/2 14:45</li>
                        <li class="">領養完成</li>
                    </ul>
                </div>

                <div v-if="!editOrdertime" class="content">
                    <img src="https://static.vecteezy.com/system/resources/previews/006/059/952/non_2x/dog-icon-isolated-on-white-background-puppy-head-pictogram-free-vector.jpg"
                        class="image">
                    <div class="text">
                        <p>狗狗：{{ detailAOrderPetName }}</p>
                        <p>領養時間：{{ detailAOrderAppointTime }}</p>
                        <br>
                        <button type="button" class="navBtn" v-on:click="navigation">查看狗狗檔案</button>
                    </div>
                </div>
                <div v-if="editOrdertime" class="content">
                    <img src="https://static.vecteezy.com/system/resources/previews/006/059/952/non_2x/dog-icon-isolated-on-white-background-puppy-head-pictogram-free-vector.jpg"
                        class="image">
                    <div class="text">
                        <p>狗狗：{{ detailAOrderPetName }}</p>
                        <p>領養時間：</p>
                        <DatePicker v-model="date_t" :enable-time-picker="false" :clearable="false" class="input2">
                        </DatePicker>
                        <br>
                        <button type="button" class="canceledit" v-on:click="canceledit">取消修改</button>
                        <button type="button" class="confirm" v-on:click="confirm">確認修改</button>
                    </div>
                </div>
            </div>
            <br>
            <div class="btns">
                <button type="button" class="deleteBtn" v-on:click="deleteOrder">刪除領養訂單</button>
                <button type="button" class="editBtn" v-on:click="editAOrder">修改領養時間</button>
            </div>
        </tabAdpotData>
    </div>
</template>

<script>
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { format } from "date-fns";

export default {
    data() {
        return {
            //此mamber有沒有任何訂單
            noOrders: false,
            //noOrders: true,

            //是在orders overview page還是特定order detail page
            atOrdersPage: true,
            editOrdertime: false,
            date_t: null,
            currentTab: "托兒訂單",
            tabs: ['托兒訂單', '領養訂單'],

            nurseryOrders: [
                { id: 123, petName: 'cookie', sTime: '2022/5/6 19:00' },
                { id: 124, petName: '彭德', sTime: '2022/4/3 13:00' },
            ],
            adoptOrders: [
                { id: 333, petName: '鯊鯊', aTime: '2022/7/14 09:00' },
                { id: 444, petName: 'mandy', aTime: '2022/4/14 15:00' },
                { id: 555, petName: 'gina', aTime: '2022/3/4 19:00' },
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
    components: {
        'tabNurseryNoData': <div>目前還沒有任何托兒訂單噢！</div>,
        'tabAdpotNoData': <div>目前還沒有任何領養訂單噢！</div>,
        'DatePicker': DatePicker,
    },
    methods: {
        edit() {
            this.editable = true
        },
        navigation() {

        },
        deleteOrder() {

        },
        editAOrder() {
            this.editOrdertime = true
            this.date_t = this.detailAOrderAppointTime
        },
        canceledit() {
            this.editOrdertime = false
        },
        confirm() {
            this.editOrdertime = false
            if (this.date_t != null) {
                this.detailAOrderAppointTime = format(this.date_t, "yyyy-MM-dd")
            }
        },
        goToDetailPage() {
            this.atOrdersPage = false
        },
        back() {
            this.atOrdersPage = true
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

.nurseryNoData {
    position: relative;
    left: 15%;
    width: 70%;
    height: 85%;
    top: 200px;
}

.eachOrder {
    background-color: #fff;
    position: relative;
    width: 90%;
    border-radius: 10px;
    border-color: #000;
    display: inline-block;
    /* 置中 */
    margin: 10px auto;
    cursor: pointer;
}

.imgInEachOrder {
    background-color: rgb(205, 81, 81);
    width: 200px;
    height: 200px;
    border-color: #114ABA;
    border-width: 10px;
    float: left;
    border-radius: 10px;
}

.petNameInEachOrder {
    width: 70%;
    text-align: left;
    float: right;
    font-size: 70px;
    font-weight: bold;
    color: #f6e298ef;
}

.timeInEachOrder {
    width: 70%;
    text-align: left;
    float: right;
    font-size: 30px;
}

.adoptNoData {
    position: relative;
    left: 15%;
    width: 70%;
    height: 85%;
    top: 200px;
}

.backBtn {
    color: white;
    background: #114ABA;
    border-radius: 20px;
    font-size: 30px;
    margin-right: 65%;
}

.orderId {
    position: relative;
    text-align: right;
    height: 85%;
}

.image {
    width: 200px;
    height: 200px;
}

.text {
    margin-left: 5%;
    font-size: 40px;
    text-align: left;
}

.deleteNBtn{
    color: white;
    background: #9A9DA2;
    border-radius: 20px;
    font-size: 30px;
}

.content {
    position: relative;
    width: 85%;
    display: inline-flex;
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
    float: left;
    width: 33.33%;
    position: relative;
    text-align: center;
}

.progress2 li:before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f111";
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ddd;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    background-color: #fff;
}

.progress2 li.done:before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f00c";
}

.progress2 li:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #ddd;
    top: 15px;
    left: -50%;
    z-index: -1;
}

.progress2 li:first-child:after {
    content: none;
}

.progress2 li.active,
.progress2 li.done {
    color: rgba(9, 170, 20);
}

.progress2 li.active:before,
.progress2 li.done:before {
    border-color: rgba(9, 170, 20);
}

.progress2 li.active+li:after,
.progress2 li.done+li:after {
    background-color: rgba(9, 170, 20);
}

.navBtn {
    color: white;
    background: #f6e298ef;
    border-radius: 20px;
    font-size: 30px;
}

.btns {
    display: inline-block;
    width: 70%;
}

.deleteBtn {
    color: white;
    background: #9A9DA2;
    border-radius: 20px;
    font-size: 30px;
    float: left;
}

.editBtn {
    color: white;
    background: #114ABA;
    border-radius: 20px;
    font-size: 30px;
    float: right;
}

.canceledit {
    float: left;
    color: white;
    background: #9A9DA2;
    border-radius: 20px;
    font-size: 30px;
}

.confirm {
    float: right;
    color: white;
    background: #114ABA;
    border-radius: 20px;
    font-size: 30px;
}
</style>