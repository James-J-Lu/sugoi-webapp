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
            <tabNursery v-if="currentTab == '托兒訂單'"></tabNursery>
            <tabAdpot v-if="currentTab == '領養訂單'"></tabAdpot>


        </div>
        <div v-if="!show">

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
            data: [
                // {id: , name: ,},
                // {},
            ]
        }
    },
    components:{
        'tabNursery': <div>content in tab1</div>,
        'tabAdpot': <div>content in tab2</div>,
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
}

.tab-button {
    background-color: aquamarine;
}
</style>