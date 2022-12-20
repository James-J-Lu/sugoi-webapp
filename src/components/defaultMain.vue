<template>
    <div class="defaultMain">
        <p class="dropdown-item rounded-2 active">以下是可以被領養的狗狗</p>
        <div class="adoptpet">
            <adoptPet v-for="pet, in aPets" :key="pet.adoPetId" :pet="pet" />
        </div>
    </div>
</template>

<script>
import adoptPet from "../components/BasicComponent/adoptPet.vue"
import AdoptionPetDataService from "../services/AdoptionPetDataService"

export default {
    name: 'defaultMain',
    components: {
        'adoptPet': adoptPet,
    },
    data () {
        return {
            aPets: [],
            prefer: {
                status: 1,
            },
        }
    },
    methods: {
        getAdoptPet() {
            AdoptionPetDataService.getPrefer(this.prefer)
                .then(response => {
                    this.aPets = response.data
                })
                .catch(e => {
                    console.log(e)
                })
        },
    },
    mounted() {
        this.getAdoptPet()
    },
}
</script>

<style scoped>
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(550px, auto);
}
</style>