<template>
    <div class="defaultMain">
        <p class="dropdown-item rounded-2 active">以下是可以被領養的狗狗</p>
        <div class="adoptpet">
            <adoptPet v-for="pet in aPets" :key="pet.id" :pet="pet"/>
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
            aPets: [
                {id: 0, name:'cockie', img:"../../assets/Pet/1.jpg"},
                {id: 1, name:'rock', img:"../../assets/Pet/2.jpg"},
                {id: 2, name:'mabao', img:"../../assets/Pet/3.jpg"},
                {id: 3, name:'rick', img:"../../assets/Pet/4.jpg"},
                {id: 4, name:'sting', img:"../../assets/Pet/5.jpg"},
                {id: 5, name:'甜甜', img:"../../assets/Pet/6.jpg"},
                {id: 6, name:'黑黑', img:"../../assets/Pet/6.jpg"}
            ],
            AdoptPets: [],
        }
    },
    methods: {
        getAdoptPet() {
            console.log('Get Adoption Pet')
            AdoptionPetDataService.getAll()
                .then(response => {
                    var a = ["id", "adoPetName", "adoPetFigure", "adoPetAge", "adpPetColor", "adoPetFur", "adpPetGender", "adoPetBreed", "adoPetDisease", "humanFriendly", "dogFriendly", "adoPetIntro"];
                    a.forEach(function() {
                        for(var i = 0; i < length(response.data); i++) {
                            var singlePet = {};
                            singlePet['id'] = length(this.AdoptPets);
                            singlePet['adoPetName'] = response.data[i].adoPetName;
                            singlePet['adoPetFigure'] = response.data[i].adoPetFigure;
                            singlePet['adoPetAge'] = response.data[i].adoPetAge;
                            singlePet['adoPetColor'] = response.data[i].adoPetColor;
                            singlePet['adoPetFur'] = response.data[i].adoPetFur;
                            singlePet['adoPetGender'] = response.data[i].adoPetGender;
                            singlePet['adoPetBreed'] = response.data[i].adoPetBreed;
                            singlePet['adoPetDiseases'] = response.data[i].adoPetDiseases;
                            singlePet['huamnFriendly'] = response.data[i].huamnFriendly;
                            singlePet['dogFriendly'] = response.data[i].dogFriendly;
                            singlePet['adoPetInfo'] = response.data[i].adoPetInfo;
                            this.AdoptPets.push(singlePet);
                        }
                    });
                })
                .catch(e => {
                    console.log(e)
                })
        },
    },
    mounted() {
        // this.getAdoptPet()
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