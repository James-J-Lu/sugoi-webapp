<template>
    <div class="defaultMain">
        <p class="dropdown-item rounded-2 active">以下為符合領養條件的狗狗</p>
        <div class="adoptpet">
            <adoptPet v-for="pet in aPets" :key="pet.id" :pet="pet" />
        </div>
        <DatePicker v-model="date" :enable-time-picker="false" :clearable="false" class="choseTime"></DatePicker>
        <button type="button" @click="submitNursery" class="submitBtn">完成領養申請</button>
    </div>
</template>

<script>
import adoptPet from "../components/BasicComponent/adoptPet.vue"
import AdoptionPetDataService from "../services/AdoptionPetDataService"
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    name: 'adoptMain',
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
                {id: 0, name:'cockie', img:"../../assets/Pet/1.jpg"},
                {id: 1, name:'rock', img:"../../assets/Pet/2.jpg"},
                {id: 2, name:'mabao', img:"../../assets/Pet/3.jpg"},
                {id: 3, name:'rick', img:"../../assets/Pet/4.jpg"},
                {id: 4, name:'sting', img:"../../assets/Pet/5.jpg"},
                {id: 5, name:'甜甜', img:"../../assets/Pet/6.jpg"},
                {id: 6, name:'黑黑', img:"../../assets/Pet/6.jpg"}
            ],
        }
    },
    methods: {
        getAdoptPet() {
            console.log('Get Adoption Pet')
            // AdoptionPetDataService.getAll()
            //     .then(response => {
            //         console.log(response.data)
            //     })
            //     .catch(e => {
            //         console.log(e)
            //     })
        },
    },
    mounted() {
        this.getAdoptPet()
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