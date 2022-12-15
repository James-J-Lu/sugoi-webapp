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
        <p>訂單詳細資料</p>
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
        <button type="button" class="blueBtn" v-on:click="edit">編輯</button>

    </div>
</template>

<script>
export default{
    data(){
        return{
            //是在orders overview page還是特定order detail page
            atOrdersPage: false,
            //此mamber有沒有任何訂單
            noOrders: false,
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
    border-radius: 20px;
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

.blueBtn{
    position: relative;
    color: white;
    background: #114ABA;
    border-radius: 20px;
    font-size: 40px;
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

</style>