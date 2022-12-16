<template>
    <div class="managerMain">
        <div class="leftSideBar">
            <ul class="dropdown-menu position-static d-grid gap-1 p-2 mx-0 shadow w-220px">
                <li>
                    <a href="#" @click="changeBody('MmemberData')" class="dropdown-item rounded-2 active">會員資料</a>
                </li>
                <li>
                    <a href="#" @click="changeBody('MadoptPet')" class="dropdown-item rounded-2 active">待領養狗狗檔案</a>
                </li>
                <li>
                    <a href="#" @click="changeBody('MnurseryOrder')" class="dropdown-item rounded-2 active">托兒訂單</a>
                </li>
                <li>
                    <a href="#" @click="changeBody('MadoptOrder')" class="dropdown-item rounded-2 active">領養訂單</a>
                </li>
                <li>
                    <a href="#" @click="changeBody('MroomAmount')" class="dropdown-item rounded-2 active">房間數量</a>
                </li>
            </ul>
        </div>
        <component v-bind:is="currentComponent" class="workSpace" />
    </div>
</template>

<script>
import MadoptOrder from "../components/managerComponent/MadoptOrder.vue"
import MadoptPet from "../components/managerComponent/MadoptPet.vue"
import MmemberData from "../components/managerComponent/MmemberData.vue"
import MnurseryOrder from "../components/managerComponent/MnurseryOrder.vue"
import MroomAmount from "../components/managerComponent/MroomAmount.vue"

export default {
    name: 'managerMain',
    components: {
        'MadoptOrder': MadoptOrder,
        'MadoptPet': MadoptPet,
        'MmemberData': MmemberData,
        'MnurseryOrder': MnurseryOrder,
        'MroomAmount': MroomAmount
    },
    data () {
        return {
            currentComponent: 'MmemberData',
        }
    },
    methods: {
        changeBody(id) {
            if (this.currentComponent == id)
                console.log('this is the page u want !!!')
            else
                this.currentComponent = id
        },
    }
}
</script>

<style scoped>
.leftSideBar ul {
  height: 100%;
  background-color: #F9ECBE;
  --bs-dropdown-border-color: none;
  --bs-dropdown-border-radius: none;
}
.leftSideBar li a{
  font-size: 30px;
  font-weight: bold;
  color: black !important;
  background-color: #ffffff !important;
  display: flex;
  align-items: center!important;
  justify-content:center;
  height: 100%;
}
.managerMain {
    position: relative;
    display: flex;
}
.leftSideBar {
    position: absolute;
    top: 3.8%;
    left: 0.8%;
    height: 93%;
    width: 23%;
}
.workSpace {
    position: absolute;
    top: 3.8%;
    right: 2%;
    width: 72.5%;
    height: 93%;
    background-color: white;
}
</style>