<template>
    <div class="myOrder">
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
            <div v-for="nurseryOrder in nurseryOrders" :key="nurseryOrders.id" :name="nurseryOrders.name" @click="">
        </div>

        
    </div>
</template>

<script>
export default{
    data(){
        return{
            show: true,
            currentTab: "托兒訂單",
            tabs:['托兒訂單','領養訂單'],
            nurseryOrders: [
                {id: 123, petName: 'cookie',},
                {id: 124, petName: 'apple'},
            ],
            adoptOrders: [
                {id: 333, petName: 'mandy'},
                {id: 444, petName: 'teddy'},
            ],
            goToOrderDetail: false
        }
    },
    components:{
        'tabNurseryNoData': <div>目前還沒有任何托兒訂單噢！</div>,
        'tabAdpotNoData': <div>目前還沒有任何領養訂單噢！</div>,
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
</style>