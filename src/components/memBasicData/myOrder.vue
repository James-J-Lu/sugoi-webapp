<template>
    <div v-if="atOrdersPage" class="myOrder">
        <p>我的訂單</p>
        <button v-for="tab in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]" @click="currentTab = tab">
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
                <!-- 訂單的入住時間早於現在時間則不顯示取消訂單的btn -->
                <button v-if="Date.parse(detailNOrderSTime) > new Date()" type="button" class="deleteNBtn" v-on:click="deleteOrder">取消此筆訂單</button>
            </div>
        </tabNurseryData>

        <tabAdpotData v-if="currentTab == '領養訂單'">
            <p>領養訂單詳細資料</p>
            <div>
                 <!--訂單編輯介面已經有一個取消編輯會回到查閱介面了-->
                 <button v-if="!editOrderTime" type="button" class="backBtn" v-on:click="back">返回</button>
            </div>
            <div class="workspace">
                <div class="orderId">
                    <!-- &emsp; 全形空格 排版用 -->
                    <p>訂單編號：{{ detailAOrderId }}&emsp;</p>
                </div>

                <!-- 進度條：鈺倫版本-->
                <div class="createorder_top">
                    <div class="createorder_top_left">
                        <span class=""
                            :class="orderStatus == 1 || orderStatus == 2 || orderStatus == 3 ? 'activeSet' : ''">受理中—</span>

                        <span class="" :class="orderStatus == 2 || orderStatus == 3 ? 'activeSet' : ''">—配對成功—</span>

                        <span class="" :class="orderStatus == 3 ? 'activeSet' : ''">—領養完成</span>
                    </div>

                </div>
                <div class="createorder_bott">
                    <div class="createorder_bott_one" v-if="orderStatus == 1">受理中：已接受您的申請</div>
                    <div class="createorder_bott_one" v-if="orderStatus == 2">配對成功：思狗意托兒所已與您聯繫，請於指定時間辦理領養手續</div>
                    <div class="createorder_bott_one" v-if="orderStatus == 3">領養完成：恭喜收穫寶貝狗勾～</div>
                </div>
                <p> </p>
                <div v-if="!editOrderTime" class="content">
                    <img src="https://static.vecteezy.com/system/resources/previews/006/059/952/non_2x/dog-icon-isolated-on-white-background-puppy-head-pictogram-free-vector.jpg"
                        class="image">

                    <div class="text">
                        <p>狗狗：{{ detailAOrderPetName }}</p>
                        <p>領養時間：{{ detailAOrderAppointTime }}</p>
                        <div class="cancelstatus" v-if="orderStatus == 0">訂單編號：{{ detailAOrderId }} 已取消</div>
                        <button v-if="orderStatus != 0" type="button" class="navBtn" v-on:click="navigation">查看狗狗檔案</button>
                    </div>

                </div>
                <div v-if="editOrderTime" class="content">
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

                <br>
                <div class="btns">
                     <!-- 如果訂單狀態還在受理中且未被刪過才能刪除訂單，一定要在查閱訂單介面才能刪（用來防呆＋畫面比較好看）-->
                    <button v-if="orderStatus != 0 && !editOrderTime && orderStatus == 1" type="button" class="deleteBtn"
                        v-on:click="deleteOrder">刪除領養訂單</button>
                    <!-- 如果訂單未被刪過且尚未領養成功才能編輯訂單（用來防呆＋畫面比較好看）-->
                    <button v-if="orderStatus != 0 && !editOrderTime && orderStatus != 3" type="button" class="editBtn"
                        v-on:click="editAOrder">修改領養時間</button>
                </div>
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
            editOrderTime: false,
            date_t: null,
            orderStatus: null,//訂單狀態<1：受理中、2：配對成功、3：領養成功、0：訂單被取消>
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
            //換這個可以顯示刪除托兒訂單btn
            //detailNOrderSTime: '2023/5/6 19:00',
            detailNOrderETime: '2022/5/9 19:00',
            detailNOrderPrice: 4000,

            detailAOrderId: 555,
            detailAOrderPetName: 'gina',
            detailAOrderAppointTime: '2022/7/14 09:00',
        }
    },
    components: {
        'tabNurseryNoData': <div>目前還沒有任何托兒訂單噢！</div>,
        'tabAdpotNoData': <div>目前還沒有任何領養訂單噢！</div>,
        'DatePicker': DatePicker,
    },
    created() {//進度條
        this.orderStatus = 3//假資料，正常是去資料庫撈狀態
    },
    methods: {
        navigation() {

        },
        deleteOrder() {
            if (this.orderStatus == 1) {//如果還在受理中才能刪除訂單
                this.editOrderTime = false //回到查看頁面
                this.orderStatus = 0//更改訂單狀態
            }
        },
        editAOrder() {
            this.editOrderTime = true
            this.date_t = this.detailAOrderAppointTime
        },
        canceledit() {
            this.editOrderTime = false
        },
        confirm() {
            this.editOrderTime = false
            if (this.date_t != null) {
                this.detailAOrderAppointTime = format(this.date_t, "yyyy-MM-dd")
            }
        },
        goToDetailPage() {
            this.atOrdersPage = false
        },
        back() {
            this.atOrdersPage = true
        },
    }
}

</script>

<style>
.createorder_top .createorder_top_left {
    font-weight: bold;
    font-size: 35px;
    color: #304156;
}

.createorder_top .createorder_top_left .activeSet {
    color: #0072E3;
}

.createorder_bott {
    color: brown;
}

.cancelstatus {
    color: red;
    font-weight: bold;
}

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

.deleteNBtn {
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

.navBtn {
    position: relative;
    left: 20%;
    color: white;
    background: brown;
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
    position: relative;
    left: 0%;
}

.confirm {
    float: right;
    color: white;
    background: #114ABA;
    border-radius: 20px;
    font-size: 30px;
    position: relative;
    left: 60%;
}
</style>