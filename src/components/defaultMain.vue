<template>
    <div class="defaultMain">
        <p class="dropdown-item rounded-2 active">以下是可以被領養的狗狗</p>
        <div class="adoptpet">
            <adoptPet v-for="pet in aPets" :key="pet.id" :name="pet.name"/>
        </div>
        <DatePicker v-if="memberStatus.Login" v-model="date" :enable-time-picker="false" :clearable="false" class="choseTime"></DatePicker>
        <button v-if="memberStatus.Login" type="button" @click="submitNursery" class="submitBtn">完成領養申請</button>
    </div>
</template>

<script>
import adoptPet from "../components/BasicComponent/adoptPet.vue"
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    name: 'defaultMain',
    props: {
        memberStatus: Object
    },
    components: {
        'adoptPet': adoptPet,
        'DatePicker': DatePicker,
    },
    data () {
        return {
            date: null,
            aPets: [
                {id: 0, name:'cockie'},
                {id: 1, name:'rock'},
                {id: 2, name:'mabao'},
                {id: 3, name:'rick'},
                {id: 4, name:'sting'},
                {id: 5, name:'甜甜'},
                {id: 6, name:'黑黑'}
            ],
        }
    },
}
</script>

<style scoped>
.choseTime {
    position: relative;
    margin: 2rem;
}
.submitBtn {
    position: relative;
    display: inline-block;
    margin:0;
    width: 20%;
    height: 10%;
    bottom: 2%;
    background-color: #FF3D00;
    border-radius: 27px;
    font-size: 30px;
    color: white;
}
.defaultMain {
    position: relative;
    height: 100%;
    width: 70%;
    left: 15%;
    font-size: 30px;
    display: block;
}
.defaultMain p{
    font-size: 30px;
    font-weight: bold;
    padding-left: 2rem;
    color: black !important;
    display: flex;
    align-items: center!important;
    height: 10%;
}
.adoptpet {
    font-size: 30px;
    font-weight: bold;
    color: black !important;
    /* background-color: rgb(182, 127, 255); */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(400px, 400px);
}
</style>