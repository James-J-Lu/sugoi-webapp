<template>
    <div class="petData">
        <p class="dropdown-item rounded-2 active">寵物資料</p>
        <div class="memberPet">
            <memberPet v-for="MPdata in MPdatas" :key="MPdata.petId" :MPdata="MPdata" :edit="editBool"/>
        </div>
        <button v-if="!editBool" type="button" class="submitBtn0" @click="editPet"> 編輯或新增狗狗 </button>
        <button v-if="editBool" type="button" class="submitBtn"> 確認 </button>
    </div>
</template>

<script>
import memberPet from "../BasicComponent/memberPet.vue"
import MemberPetDataService from "@/services/MemberPetDataService"

export default {
    name: 'petData',
    components: {
        'memberPet': memberPet,
    },
    props: {
        memberStatus: Object,
    },
    data() {
        return {
            editBool: false,
            MPdatas: [],
        }
    },
    methods: {
        editPet() {
            this.editBool = true
        },
        addPet() {
            var a = {
                id: this.Mpets.length,
                name: null,
                gender: null,
            }
            console.log(this.Mpets)
            this.Mpets.push(a)
            this.editBool = true
            console.log(this.Mpets)
        },
        getMemberPet() {
            MemberPetDataService.findByMID(this.memberStatus.id)
                .then(response => {
                    this.MPdatas = response.data
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.getMemberPet()
    },
}
</script>

<style scoped>
.petData {
    position: relative;
    height: 100%;
    width: 70%;
    left: 15%;
    font-size: 30px;
    display: block;
}
.petData p{
    font-size: 45px;
    font-weight: bold;
    padding-left: 2rem;
    color: black !important;
    display: flex;
    align-items: center!important;
    justify-content: center;
    height: 10%;
}
.memberPet {
    font-size: 30px;
    font-weight: bold;
    color: black !important;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(600px, 600px);
}
.submitBtn {
    display: inline-block;
    margin-bottom:1rem;
    width: 20%;
    height: 10%;
    bottom: 2%;
    background-color: #FF3D00;
    border-radius: 27px;
    font-size: 30px;
    color: white;
}
.submitBtn0 {
    display: inline-block;
    margin-bottom:1rem;
    width: 20%;
    height: 10%;
    bottom: 2%;
    background-color: #114ABA;
    border-radius: 27px;
    font-size: 30px;
    color: white;
}
</style>