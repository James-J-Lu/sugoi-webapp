<template>
    <div>
        <!-- 全局資料 -->
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
                        <div v-for="(nurseryOrder, index) in nurseryOrders" :key="nurseryOrder.nurseryPetOrderId" @click="goToDetailPage(index)">
                            <div class="eachOrder">
                                <div class="imgInEachOrder">
                                    <img :src="petimgs[index]" alt="">
                                </div>
                                <div class="orderId">
                                    <!-- &emsp; 全形空格 排版用 -->
                                    <p>訂單編號：{{ nurseryOrder.nurseryPetOrderId }}&emsp;</p>
                                </div>
                                <div class="petNameInEachOrder">
                                    {{ petnames[index] }}
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
                        <div v-for="(adoptOrder, index) in adoptOrders" :key="adoptOrder.adoptionOrderId" @click="goToDetailPage(index)">
                            <div class="eachOrder">
                                <div class="imgInEachOrder">
                                    <img :src="Apetimgs[index]" alt="">
                                </div>
                                <div class="orderId">
                                    <!-- &emsp; 全形空格 排版用 -->
                                    <p>訂單編號：{{ adoptOrder.adoptionOrderId }}&emsp;</p>
                                </div>
                                <div class="petNameInEachOrder">
                                    {{ this.Apetnames[index] }}
                                </div>
                                <div class="timeInEachOrder">
                                    領養時間：{{ adoptOrder.appointmentTime }}
                                </div>
                            </div>
                            <br>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
        </div>

        <!-- 詳細資料 -->
        <div v-if="!atOrdersPage" class="myOrder">
            <div v-if="currentTab">
                <p>托兒訂單詳細資料</p>
                <div>
                    <button type="button" class="backBtn" @click="back">返回</button>
                </div>
                <div class="workspace">
                    <div class="orderId">
                        <!-- &emsp; 全形空格 排版用 -->
                        <p>訂單編號：{{ this.nurseryOrders[this.choseInd].nurseryPetOrderId }}&emsp;</p>
                    </div>

                    <div v-if="this.nurseryOrders[this.choseInd].status == 1">
                        <div class="content">
                            <img :src="petimgs[this.choseInd]" class="image">
                            <div class="text">
                                <p>狗狗：{{ petnames[this.choseInd] }}</p>
                                <!-- <p>床位：{{ detailNOrderRoomNum }}</p> 先拿掉床位都一樣 -->
                                <p>入住時間：{{ this.nurseryOrders[this.choseInd].startTime }}</p>
                                <p>退房時間：{{ this.nurseryOrders[this.choseInd].endTime }}</p>
                                <p>總金額：$ {{ this.nurseryOrders[this.choseInd].price }}</p>
                            </div>
                        </div>
                        <div>
                            <!-- 訂單的入住時間早於現在時間則不顯示取消訂單的btn -->
                            <button v-if="Date.parse(this.nurseryOrders[this.choseInd].startTime) > new Date()" type="button" class="deleteNBtn"
                                @click="deleteNOrder">刪除此筆訂單</button>
                        </div>
                    </div>
                    

                    <div v-if="this.nurseryOrders[this.choseInd].status == 0">
                        <div class="content">
                            <img :src="petimgs[this.choseInd]" class="image">
                            <div class="text">
                                <p>狗狗：{{ petnames[this.choseInd] }}</p>
                                <!-- <p>床位：{{ detailNOrderRoomNum }}</p> -->
                                <p>入住時間：{{ this.nurseryOrders[this.choseInd].startTime }}</p>
                                <p>退房時間：{{ this.nurseryOrders[this.choseInd].endTime }}</p>
                                <p>總金額：$ {{ this.nurseryOrders[this.choseInd].price }}</p>
                                <div class="cancelstatus">訂單編號：{{ this.nurseryOrders[this.choseInd].nurseryPetOrderId }} 已取消</div>
                            </div>
                        </div>
                    </div>

                    <div v-if="this.nurseryOrders[this.choseInd].status == 2">
                        <div class="content">
                            <img :src="petimgs[this.choseInd]" class="image">
                            <div class="text">
                                <p>狗狗：{{ petnames[this.choseInd] }}</p>
                                <!-- <p>床位：{{ detailNOrderRoomNum }}</p> -->
                                <p>入住時間：{{ this.nurseryOrders[this.choseInd].startTime }}</p>
                                <p>退房時間：{{ this.nurseryOrders[this.choseInd].endTime }}</p>
                                <p>總金額：$ {{ this.nurseryOrders[this.choseInd].price }}</p>
                                <div class="cancelstatus">訂單編號：{{ this.nurseryOrders[this.choseInd].nurseryPetOrderId }} 已被思狗意取消，如有任何問題請聯繫我們！</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="!currentTab">
                <p>領養訂單詳細資料</p>
                <div>
                    <!--訂單編輯介面已經有一個取消編輯會回到查閱介面了-->
                    <button v-if="!editOrderTime" type="button" class="backBtn" @click="back">返回</button>
                </div>
                <div class="workspace">
                    <div class="orderId">
                        <!-- &emsp; 全形空格 排版用 -->
                        <p>訂單編號：{{ this.adoptOrders[this.choseInd].adoptionOrderId }}&emsp;</p>
                    </div>

                    <!-- 進度條：鈺倫版本-->
                    <div class="createorder_top">
                        <div class="createorder_top_left">
                            <span class=""
                                :class="this.adoptOrders[this.choseInd].status == 1 || this.adoptOrders[this.choseInd].status == 2 || this.adoptOrders[this.choseInd].status == 3 ? 'activeSet' : ''">受理中—</span>

                            <span class="" :class="this.adoptOrders[this.choseInd].status == 2 || this.adoptOrders[this.choseInd].status == 3 ? 'activeSet' : ''">—配對成功—</span>

                            <span class="" :class="this.adoptOrders[this.choseInd].status == 3 ? 'activeSet' : ''">—領養完成</span>
                        </div>
                    </div>
                    <div class="createorder_bott">
                        <div class="createorder_bott_one" v-if="this.adoptOrders[this.choseInd].status == 1">受理中：已接受您的申請</div>
                        <div class="createorder_bott_one" v-if="this.adoptOrders[this.choseInd].status == 2">配對成功：思狗意托兒所已與您聯繫，請於指定時間辦理領養手續</div>
                        <div class="createorder_bott_one" v-if="this.adoptOrders[this.choseInd].status == 3">領養完成：恭喜收穫寶貝狗勾～</div>
                    </div>
                    <p> </p>
                    <div v-if="!editOrderTime" class="content">
                        <img :src="Apetimgs[this.choseInd]" class="image">

                        <div class="text">
                            <p>狗狗：{{ this.Apetnames[this.choseInd] }}</p>
                            <p>領養時間：2022-12-29 16:00:00</p>
                            <p>領養時間：{{ this.adoptOrders[this.choseInd].appointmentTime }}</p>
                            <div class="cancelstatus" v-if="this.adoptOrders[this.choseInd].status == 0">訂單編號：{{ this.adoptOrders[this.choseInd].adoptionOrderId }} 已取消</div>
                            <div class="cancelstatus" v-if="this.adoptOrders[this.choseInd].status == 4">配對失敗， 疑問請洽思狗意</div>
                            <!-- <button v-if="this.adoptOrders[this.choseInd].status != 0" type="button" class="navBtn" @click="navigation">查看狗狗檔案</button> -->
                        </div>
                    </div>

                    <!-- 修改領養時間 -->
                    <div v-if="editOrderTime" class="content">
                        <img :src="Apetimgs[this.choseInd]" class="image">
                        <div class="text">
                            <p>狗狗：{{ this.Apetnames[this.choseInd] }}</p>
                            <p>領養時間：</p>
                            <DatePicker v-model="date_t" :enable-time-picker="false" :clearable="false" class="input2"></DatePicker>
                            <select v-model="date_H" class="choseHour">
                                <option disabled value="">Please select time</option>
                                <option>10</option>
                                <option>13</option>
                                <option>16</option>
                                <option>19</option>
                            </select>
                            <br>
                            <button type="button" class="canceledit" @click="canceledit">取消修改</button>
                            <button type="button" class="confirm" @click="confirm(this.choseInd)">確認修改</button>
                        </div>
                    </div>
                    <!-- 修改領養時間 -->

                    <br>
                    <div class="btns">
                        <!-- 如果訂單狀態還在受理中且未被刪過才能刪除訂單，一定要在查閱訂單介面才能刪（用來防呆＋畫面比較好看）-->
                        <button v-if="this.adoptOrders[this.choseInd].status == 1 && !editOrderTime" type="button"
                            class="deleteBtn" @click="deleteAOrder(this.choseInd)">刪除領養訂單</button>
                        <!-- 如果訂單未被刪過且尚未領養成功才能編輯訂單（用來防呆＋畫面比較好看）-->
                        <button v-if="this.adoptOrders[this.choseInd].status != 0 && !editOrderTime && this.adoptOrders[this.choseInd].status != 3 && this.adoptOrders[this.choseInd].status != 4" type="button"
                            class="editBtn" @click="editAOrder">修改領養時間</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NurserypetorderDataService from '@/services/NurserypetorderDataService';
import ReserveRoomDataService from '@/services/ReserveRoomDataService';
import MemberPetDataService from '@/services/MemberPetDataService';
import AdoptionOrderDataService from '@/services/AdoptionOrderDataService';
import AdoptionPetDataService from '@/services/AdoptionPetDataService';
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
            
            //托兒訂單狀態<0: deleted by member, 1: normal, 2: deleted by manager>
            orderNStatus: 1,
            //領養訂單狀態<1：受理中、2：配對成功、3：領養成功、0：訂單被取消>
            orderAStatus: null,
            currentTab: true,
            tabs: [{id: 1, name: '托兒訂單'}, {id: 2, name: '領養訂單'}],

            nurseryOrders: [],
            adoptOrders: [],

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
            
            petimgs: [],
            Apetimgs: [],
            petnames: [],
            Apetnames: [],
            choseInd: null,
            date_H: null,
            date_t: null,
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
        
        //刪除托兒訂單 status = 0
        deleteNOrder() {
            this.nurseryOrders[this.choseInd].status = 0
            console.log(this.nurseryOrders[this.choseInd])
            NurserypetorderDataService.update(this.nurseryOrders[this.choseInd].nurseryPetOrderId, this.nurseryOrders[this.choseInd])
                .then(response => {
                    if(response.data == 'success') {
                        ReserveRoomDataService.update(this.nurseryOrders[this.choseInd].nurseryPetOrderId, {status: 1})
                            .then(response => {
                                console.log(response.data)
                            })
                            .catch(e => {
                                console.log(e);
                            });
                    }
                })
                .catch(e => {
                    console.log(e);
                });
        },
        //刪除領養訂單 status = 0
        deleteAOrder(index) {
            this.adoptOrders[index].status = 0
            this.adoptOrders[index].appointmentTime = this.adoptOrders[index].appointmentTime.split('T')[0] + ' ' + this.adoptOrders[index].appointmentTime.split('T')[1].split('.')[0]
            AdoptionOrderDataService.update(this.adoptOrders[index].adoptionOrderId, this.adoptOrders[index])
                .then(response => {
                    if(response.data == 'success')  {
                        AdoptionPetDataService.update(this.adoptOrders[index].adoPetId_AO, { status: 1 })
                            .then(response => {
                                if(response.data == 'success')  {
                                    this.getOrders()
                                }
                            })
                            .catch(e => {
                                console.log(e);
                            });
                    }
                })
                .catch(e => {
                    console.log(e);
                });
        },

        //進入修改領養時間
        editAOrder() {
            this.editOrderTime = true
            this.date_t = this.adoptOrders[this.choseInd].appointmentTime.split('T')[0]
            this.date_H = this.adoptOrders[this.choseInd].appointmentTime.split('T')[1].split(':')[0]
        },

        //取消修改領養時間
        canceledit() {
            this.editOrderTime = false
        },

        //領養資料確認修改時間
        confirm(index) {
            if (this.date_t != null && this.date_H != null) {
                var tep = this.date_t + ' ' + this.date_H + ':00:00'
                this.adoptOrders[index].appointmentTime = tep
                console.log(this.adoptOrders[index])
                AdoptionOrderDataService.update(this.adoptOrders[index].adoptionOrderId, this.adoptOrders[index])
                    .then(response => {
                        if(response.data == 'success')  {
                            console.log('ok_修')
                            this.getOrders()
                        }
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
            this.editOrderTime = false
            console.log('in')
        },

        // 離開全局，看細節 這邊要注意托兒或領養
        goToDetailPage(index) {
            //紀錄選擇的index
            this.choseInd = index
            //進到詳細資料
            this.atOrdersPage = false
        },
        //回到全局
        back() {
            this.atOrdersPage = true
        },
        // 更新訂單資訊
        getOrders() {
            NurserypetorderDataService.findByMID(this.memberStatus.id)
                .then(response => {
                    if(response.data.length == 0) {
                        this.noNOrders == true
                    }
                    else {
                        this.noAOrders == false
                    }

                    this.nurseryOrders = response.data

                    for(var i = 0; i < response.data.length; i++) {
                        MemberPetDataService.get(response.data[i].petId_NPO)
                            .then(response => {
                                this.petnames.push(response.data.petName)
                                this.petimgs.push(response.data.img)
                            })
                            .catch(e => {
                                console.log(e);
                            });
                    }
                })
                .catch(e => {
                    console.log(e);
                });

            AdoptionOrderDataService.findByMID(this.memberStatus.id)
                .then(response => {
                    if(response.data.length == 0) {
                        this.noAOrders == true
                    }
                    else {
                        this.noAOrders == false
                    }

                    this.adoptOrders = response.data
                    for(var j = 0; j < response.data.length; j++) {
                        AdoptionPetDataService.get(response.data[j].adoPetId_AO)
                            .then(response => {
                                this.Apetnames.push(response.data.adoPetName)
                                this.Apetimgs.push(response.data.img)
                                this.editOrderTime = false //回到查看頁面
                            })
                            .catch(e => {
                                console.log(e);
                            });
                    }
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.getOrders()
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
    /* background-color: rgb(232, 196, 196); */
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
    color: #000000ef;
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