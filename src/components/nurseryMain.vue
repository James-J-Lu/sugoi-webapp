<template>
    <div class="nurseyMain">
        <p id="title">我想托兒...</p>
        <div class="workspace">
            <ul class="dropdown-menu position-static d-grid gap-1 mx-0 shadow w-220px">
                <li>
                    <p class="dropdown-item rounded-2 active">請選擇一隻狗狗</p>
                </li>
                <li>
                    <Pet v-for="pet in pets" :key="pet.id" :name="pet.name" @click="(selectedPet = pet.id)" />
                </li>
                <li>
                    <p class="dropdown-item rounded-2 active">什麼時候...</p>
                </li>
                <li>
                    <div class="time">
                        <DatePicker v-model="date" :enable-time-picker="false" :clearable="false"></DatePicker>
                    </div>
                </li>
                <li>
                    <button type="button" @click="submitNursery" class="submitBtn">確認</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Pet from "../components/BasicComponent/nurseryPet.vue"
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    name: 'nurseryMain',
    components: {
        'Pet': Pet,
        'DatePicker': DatePicker,
    },
    data () {
        return {
            date: null,
            pets: [
                {id: 0, name:'cockie'},
                {id: 1, name:'rock'},
                {id: 2, name:'mabao'},
                {id: 3, name:'rick'},
                {id: 4, name:'sting'}
            ],
            selectedPet: null,
            selectedTime: null
        }
    },
    methods: {
        //送出nursery
        submitNursery() {
            console.log(this.selectedPet)
            console.log(this.electedTime)
        }
    }
}
</script>

<style scoped>
.submitBtn {
    display: inline-block;
    margin-top: 2%;
    margin-left: 40%;
    width: 20%;
    height: 70%;
    background-color: #FF3D00;
    border-radius: 27px;
    font-size: 40px;
}
.time {
    display: flex;
    background-color: #EEEEEE;
    height: 100%;
    width: 100%;
    border-radius: 27px;
}
.time div {
    position: relative;
    padding: 0.5rem;
    background-color: #D9D9D9;
    border-radius: 27px;
    height: 46%;
    top: 27%;
    left: 6%;
    width: 88%;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.workspace {
    position: relative;
    left: 15%;
    width: 70%;
    height: 85%;
    font-size: 30px;
}
.workspace ul {
  height: 100%;
  grid-template-rows: 10% 45% 10% 18% 14%;
  border-radius: 40px;
  padding: 2rem!important;
  background-color: #FCF7E2;
  --bs-dropdown-border-color: none;
  --bs-dropdown-border-radius: none;
}
.workspace li p{
  font-size: 30px;
  font-weight: bold;
  color: black !important;
  background-color: #FCF7E2;
  display: flex;
  align-items: center!important;
  height: 100%;
}
.workspace ul li:nth-child(2) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
p {
    font-weight: bold;
    color: black;
}
#title {
    font-size: 50px;
    padding-left: 15%;
    display: flex;
    justify-content: flex-start;
}
</style>