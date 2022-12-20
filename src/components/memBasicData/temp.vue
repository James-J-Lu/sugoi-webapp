<template>
    <div v-if="atOrdersPage" class="myOrder">
        <p>我的訂單</p>
        <button v-for="tab in tabs" :key="tab.id" class="tab-button"
            @click="swtichTab(tab.id)">
            {{ tab.name }}
        </button>

        <div  class="workspace">
            <div v-if="currentTab">
                <div v-if="noNOrders" class="noOrders">
                    <p>目前還沒有任何托兒訂單噢！</p>
                    <br><br><br><br><br><br><br><br><br>
                </div>               
                <div v-else>
                    <br>
                    <div v-for="nurseryOrder in nurseryOrders" :key="nurseryOrder.id">
                        <div class="eachOrder" @click="goToDetailPage">
                            <div class="imgInEachOrder"></div>
                            <div class="orderId">
                                <!-- &emsp; 全形空格 排版用 -->
                                <p>訂單編號：{{ nurseryOrder.nurseryPetOrderId }}&emsp;</p>
                            </div>
                            <div class="petNameInEachOrder">
                                {{ nurseryOrder.petName }}
                            </div>
                            <div class="timeInEachOrder">
                                入住時間：{{ nurseryOrder.startTime }}
                            </div>
                        </div>
                        <br>
                    </div>
                    <br>
                </div>
            </div>

            <div v-if="!currentTab">
                <div v-if="noAOrders" class="noOrders">
                    <p>目前還沒有任何領養訂單噢！</p>
                    <br><br><br><br><br><br><br><br><br>
                </div>
                <div v-else>
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
                </div>
            </div>
        </div>
    </div>

    <div v-if="!atOrdersPage" class="myOrder">
        <div v-if="currentTab">
            <p>托兒訂單詳細資料</p>
            <div>
                <button type="button" class="backBtn" v-on:click="back">返回</button>
            </div>
            <div class="workspace">
                <div class="orderId">
                    <!-- &emsp; 全形空格 排版用 -->
                    <p>訂單編號：{{ detailNOrderId }}&emsp;</p>
                </div>

                <div v-if="orderNStatus == 1">
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
                    <div>
                        <!-- 訂單的入住時間早於現在時間則不顯示取消訂單的btn -->
                        <button v-if="Date.parse(detailNOrderSTime) > new Date()" type="button" class="deleteNBtn"
                            v-on:click="deleteNOrder">刪除此筆訂單</button>
                    </div>
                </div>

                <div v-if="orderNStatus == 0">
                    <div class="content">
                        <img src="https://static.vecteezy.com/system/resources/previews/006/059/952/non_2x/dog-icon-isolated-on-white-background-puppy-head-pictogram-free-vector.jpg"
                            class="image">
                        <div class="text">
                            <p>狗狗：{{ detailNOrderPetName }}</p>
                            <p>床位：{{ detailNOrderRoomNum }}</p>
                            <p>入住時間：{{ detailNOrderSTime }}</p>
                            <p>退房時間：{{ detailNOrderETime }}</p>
                            <p>總金額：$ {{ detailNOrderPrice }}</p>
                            <div class="cancelstatus">訂單編號：{{ detailNOrderId }} 已取消</div>
                        </div>
                    </div>
                </div>
                <div v-if="orderNStatus == 2">
                    <div class="content">
                        <img src="https://static.vecteezy.com/system/resources/previews/006/059/952/non_2x/dog-icon-isolated-on-white-background-puppy-head-pictogram-free-vector.jpg"
                            class="image">
                        <div class="text">
                            <p>狗狗：{{ detailNOrderPetName }}</p>
                            <p>床位：{{ detailNOrderRoomNum }}</p>
                            <p>入住時間：{{ detailNOrderSTime }}</p>
                            <p>退房時間：{{ detailNOrderETime }}</p>
                            <p>總金額：$ {{ detailNOrderPrice }}</p>
                            <div class="cancelstatus">訂單編號：{{ detailNOrderId }} 已被思狗意取消，如有任何問題請聯繫我們！</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!currentTab">
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
                            :class="orderAStatus == 1 || orderAStatus == 2 || orderAStatus == 3 ? 'activeSet' : ''">受理中—</span>

                        <span class="" :class="orderAStatus == 2 || orderAStatus == 3 ? 'activeSet' : ''">—配對成功—</span>

                        <span class="" :class="orderAStatus == 3 ? 'activeSet' : ''">—領養完成</span>
                    </div>
                </div>
                <div class="createorder_bott">
                    <div class="createorder_bott_one" v-if="orderAStatus == 1">受理中：已接受您的申請</div>
                    <div class="createorder_bott_one" v-if="orderAStatus == 2">配對成功：思狗意托兒所已與您聯繫，請於指定時間辦理領養手續</div>
                    <div class="createorder_bott_one" v-if="orderAStatus == 3">領養完成：恭喜收穫寶貝狗勾～</div>
                </div>
                <p> </p>
                <div v-if="!editOrderTime" class="content">
                    <img src="https://static.vecteezy.com/system/resources/previews/006/059/952/non_2x/dog-icon-isolated-on-white-background-puppy-head-pictogram-free-vector.jpg"
                        class="image">

                    <div class="text">
                        <p>狗狗：{{ detailAOrderPetName }}</p>
                        <p>領養時間：{{ detailAOrderAppointTime }}</p>
                        <div class="cancelstatus" v-if="orderAStatus == 0">訂單編號：{{ detailAOrderId }} 已取消</div>
                        <button v-if="orderAStatus != 0" type="button" class="navBtn"
                            v-on:click="navigation">查看狗狗檔案</button>
                    </div>
                </div>
                <div v-if="editOrderTime" class="content">
                    <img src="https://static.vecteezy.com/system/resources/previews/006/059/952/non_2x/dog-icon-isolated-on-white-background-puppy-head-pictogram-free-vector.jpg"
                        class="image">
                    <div class="text">
                        <p>狗狗：{{ detailAOrderPetName }}</p>
                        <p>領養時間：</p>
                        <DatePicker v-model="date_t" :enable-time-picker="false" :clearable="false" class="input2"></DatePicker>
                        <br>
                        <button type="button" class="canceledit" v-on:click="canceledit">取消修改</button>
                        <button type="button" class="confirm" v-on:click="confirm">確認修改</button>
                    </div>
                </div>

                <br>
                <div class="btns">
                    <!-- 如果訂單狀態還在受理中且未被刪過才能刪除訂單，一定要在查閱訂單介面才能刪（用來防呆＋畫面比較好看）-->
                    <button v-if="orderAStatus != 0 && !editOrderTime && orderAStatus == 1" type="button"
                        class="deleteBtn" v-on:click="deleteAOrder">刪除領養訂單</button>
                    <!-- 如果訂單未被刪過且尚未領養成功才能編輯訂單（用來防呆＋畫面比較好看）-->
                    <button v-if="orderAStatus != 0 && !editOrderTime && orderAStatus != 3" type="button"
                        class="editBtn" v-on:click="editAOrder">修改領養時間</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NurserypetorderDataService from '@/services/NurserypetorderDataService';
import MemberPetDataService from '@/services/MemberPetDataService';
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { format } from "date-fns";

export default {
    name: 'myOder',
    props: {
        memberStatus: Object,
    },
    components: {
        'DatePicker': DatePicker,
    },
    data() {
        return {
            noNOrders: false,
            noAOrders: false,
            //是在orders overview page還是特定order detail page
            atOrdersPage: true,
            editOrderTime: false,
            date_t: null,
            //托兒訂單狀態<0: deleted by member, 1: normal, 2: deleted by manager>
            orderNStatus: 1,
            //領養訂單狀態<1：受理中、2：配對成功、3：領養成功、0：訂單被取消>
            orderAStatus: null,
            currentTab: true,
            tabs: [{id: 1, name: '托兒訂單'}, {id: 2, name: '領養訂單'}],

            nurseryOrders: [],
            adoptOrders: [
                { id: 333, petName: '鯊鯊', aTime: '2022/7/14 09:00' },
                { id: 444, petName: 'mandy', aTime: '2022/4/14 15:00' },
                { id: 555, petName: 'gina', aTime: '2022/3/4 19:00' },
            ],

            detailNOrderId: 123,
            detailNOrderPetName: 'cookie',
            detailNOrderRoomNum: '506',
            //換這個可以隱藏刪除托兒訂單btn
            //detailNOrderSTime: '2022/5/6 19:00',
            detailNOrderSTime: '2023/5/6 19:00',
            detailNOrderETime: '2023/5/9 19:00',
            detailNOrderPrice: 4000,

            detailAOrderId: 555,
            detailAOrderPetName: 'gina',
            detailAOrderAppointTime: '2022/7/14 09:00',
        }
    },
    created() {//進度條
        this.orderAStatus = 1//假資料，正常是去資料庫撈狀態
    },
    methods: {
        swtichTab(id) {
            if(id == 1)
                this.currentTab = true
            else if(id == 2)
                this.currentTab = false
        },
        navigation() {

        },
        deleteNOrder() {
            this.orderNStatus = 0
        },
        deleteAOrder() {
            if (this.orderAStatus == 1) {//如果還在受理中才能刪除訂單
                this.editOrderTime = false //回到查看頁面
                this.orderAStatus = 0//更改訂單狀態
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

        getOrders() {
            let c = new Array()
            console.log(typeof(c))
            NurserypetorderDataService.findByMID(this.memberStatus.id)
                .then(response => {
                    this.nurseryOrders = response.data
                    var a = { petName: null, }
                    // for(var i = 0; i < response.data.length; i++) {
                    //     Object.assign(this.nurseryOrders[i], a)
                    //     MemberPetDataService.get(response.data[i].petId_NPO)
                    //         .then(response => {
                    //             console.log(typeof(b))
                    //             b.push(response.data.petName)
                    //             console.log(typeof(b))
                    //         })
                    //         .catch(e => {
                    //             console.log(e);
                    //         });
                    // }
                    // console.log(typeof(b))
                    // console.log(b.keys)
                    // for(var j = 0; j < response.data.length; j++) {
                    //     console.log(b[j])
                    //     // this.nurseryOrders[j].petName = b[j]
                    //     // console.log(this.nurseryOrders[j])
                    // }
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
    mounted() {
        // this.getOrders()
    },
}
</script>

<style scoped>
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

.noOrders {
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