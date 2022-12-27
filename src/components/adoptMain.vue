<template>
    <div class="defaultMain">
        <p class="dropdown-item rounded-2 active">以下為符合領養條件的狗狗</p>

        <div class="adoptpet">
            <adoptPet v-for="(pet, index) in aPets" :key="pet.adoPetId" :pet="pet" @click="ChosePet(index)" />
        </div>

        <div class="functionpart">
            <div>
                <DatePicker v-model="selectTime" :clearable="false" class="choseTime" :min-date="new Date()" :enable-time-picker="false"></DatePicker>
                <div>
                    <p>請選擇時間：</p>
                    <select v-model="selectHour" class="choseHour">
                        <option>10</option>
                        <option>13</option>
                        <option>16</option>
                        <option>19</option>
                    </select>
                </div>
            </div>
            <div>
                <button type="button" @click="submitNursery" class="submitBtn">完成領養申請</button>
            </div>
        </div>
    </div>
</template>

<script>
import {format} from 'date-fns';
import adoptPet from "../components/BasicComponent/adoptPet.vue"
import AdoptionPetDataService from "../services/AdoptionPetDataService"
import AdoptionDataService from "@/services/AdoptionDataService";
import AdoptionOrderDataService from '@/services/AdoptionOrderDataService';
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
            selectTime: null,
            selectHour: null,
            aPets: [],
            Order: {
                adoptionOrderId: null,
                memberId_AO: this.memberStatus.id,
                adoPetId_AO: null,
                appointmentTime: null,
                status: 1, //受理中
            },
            prefer: {
                adoPetFigure: null,
                adoPetAge: null,
                adoPetColor: null,
                adoPetFur: null,
                adoPetGender: null,
                adoPetBreed: null,
                status: 1,
            },
            alterPet: {
                status: 2
            }
        }
    },
    methods: {
        //點擊完成申請
        submitNursery() {
            this.Order.appointmentTime = format(this.selectTime, 'yyyy-MM-dd') + ' ' + this.selectHour + ':00:00'
            AdoptionOrderDataService.create(this.Order)
                .then(response => {
                    if(response.data == 'success') {
                        AdoptionPetDataService.update(this.Order.adoPetId_AO, this.alterPet)
                            .then(response => {
                                if(response.data == 'success') {
                                    this.getMemberAopt()
                                    window.alert('成功領養')
                                }
                            })
                            .catch(e => {
                                console.log(e)
                            })
                    }
                })
                .catch(e => {
                    console.log(e)
                })
        },

        //click狗，紀錄index
        ChosePet(index) {
            this.Order.adoPetId_AO = this.aPets[index].adoPetId
        },

        //取得可以被領養且符合偏好的狗
        getMemberAopt() {
            AdoptionDataService.findByMID(this.memberStatus.id)
                .then(response => {
                    this.prefer.adoPetFigure = response.data[0].preferFigue
                    this.prefer.adoPetAge = response.data[0].preferAge
                    this.prefer.adoPetColor = response.data[0].preferColor
                    this.prefer.adoPetFur = response.data[0].preferFur
                    this.prefer.adoPetGender = response.data[0].preferGender
                    this.prefer.adoPetBreed = response.data[0].preferBreed

                    AdoptionPetDataService.getPrefer(this.prefer)
                        .then(response => {
                            this.aPets = response.data
                        })
                        .catch(e => {
                            console.log(e)
                        })
                })
                .catch(e => {
                    console.log(e)
                })
        }
    },
    mounted() {
        this.getMemberAopt()
    },
}

</script>

<style scoped>
.functionpart {
    height: 30%;
    display: grid;
    grid-template-rows: 1fr 1.5fr
}
.functionpart div:nth-child(1) {
    background-color: aliceblue;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    justify-content: center;
}
.functionpart div:nth-child(1) div:nth-child(2) {
    justify-content: flex-start;
    font-size: 15px;
}
.functionpart div:nth-child(1) div:nth-child(2) p{
    padding-top: 1rem;
}
.functionpart div:nth-child(2) {
    display: flex;
    align-content: center;
    justify-content: center;
    padding-top: 1rem;
    height: 70%;
}
.choseTime {
    display: flex !important;
    padding-left: 5rem;
    align-content: center;
    justify-content: center;
}
.choseHour {
    display: flex !important;
    padding-right: 3rem;
    align-content: center;
    justify-content: center;
    width: 40%;
    height: 100%;
}
.submitBtn {
    display: inline-block;
    margin:0;
    width: 15%;
    bottom: 2%;
    background-color: #FF3D00;
    border-radius: 27px;
    font-size: 23px;
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
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(550px, auto);
}

</style>