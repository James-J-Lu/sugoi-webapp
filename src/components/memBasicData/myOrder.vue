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

        <div v-if="show" class="workspace">
            <tabNurseryNoData v-if="currentTab == '托兒訂單'" class="nurseryNoData"></tabNurseryNoData>
            <tabAdpotNoData v-if="currentTab == '領養訂單'" class="nurseryNoData"></tabAdpotNoData>
        </div>

        <div v-if="!show" class="workspace">
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
            <p>test</p>
            <img src="https://static.vecteezy.com/system/resources/previews/006/059/952/non_2x/dog-icon-isolated-on-white-background-puppy-head-pictogram-free-vector.jpg" class="image">
            {{detailNOrder}}

        </div>
        <br>
        <button type="button" class="blueBtn" v-on:click="edit">編輯</button>

    </div>
</template>

<script>
export default{
    data(){
        return{
            atOrdersPage: false,
            show: false,
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
            detailNOrder:[
                {id: 123, petName: 'cookie', roomNum: '506', sTime: '2022/5/6 19:00', eTime: '2022/5/9 19:00', price: 4000},
            ],
            detailAOrder:[
                {id: 555, petName: 'gina', appointmentTime: '2022/7/14 09:00'},
            ],
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
    background-color: aquamarine;
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

.image{
    margin-right:500px;
    width: 30%;
    height: 50%;
}

</style>