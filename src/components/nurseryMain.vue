<template>
    <div class="nurseyMain">
        <p id="title">我想托兒...</p>
        <div class="workspace">
            <ul class="dropdown-menu position-static d-grid gap-1 mx-0 shadow w-220px">
                <li>
                    <p class="dropdown-item rounded-2 active">請選擇一隻狗狗</p>
                </li>
                <li>
                    <nurseryPet v-for="(pet, index) in Mpets" :key="pet.memberId" :pet="pet" @click="SelectF(index)"/>
                </li>
                <li>
                    <p class="dropdown-item rounded-2 active">什麼時候...</p>
                </li>
                <li>
                    <div class="time">
                        <DatePicker v-model="selectedTime" :disabled-dates="disabledDates" :clearable="false" range  :min-date="new Date()" :enable-time-picker="false"></DatePicker>
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
import {format} from 'date-fns';
import nurseryPet from "../components/BasicComponent/nurseryPet.vue"
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import MemberPetDataService from "../services/MemberPetDataService";
import ReserveRoomDataService from '@/services/ReserveRoomDataService';
import RoomInfoDataService from '@/services/RoomInfoDataService'

export default {
    name: 'nurseryMain',
    props: {
        memberStatus: Object,
    },
    components: {
        'nurseryPet': nurseryPet,
        'DatePicker': DatePicker,
    },
    data () {
        return {
            date: null,
            Mpets: [],
            selectedPet: null,
            selectedTime: null,
            cond: {
                "total": null,
                "size": null,
                "time": format(new Date(), 'yyyy-MM-dd')
            },
            SizeTotal: [ 0, 0, 0 ],
            Timelist:[
                [],[],[]
            ],
            disabledDates: [],
            order: {
                nurseryPetOrderId: null,
                memberId_NPO: null,
                petId_NPO: null,
                roomId_NPO: null,
                startTime: null,
                endTime: null,
                price: 0,
                status: 1,
            },
        }
    },
    methods: {
        SelectF(index) {
            this.selectedPet = index //這是選擇哪一隻寵物 0
            this.cond.size = this.Mpets[this.selectedPet].petSize //這是那隻寵物的size 1
            // 還沒取過房間總數
            if(this.SizeTotal[this.cond.size - 1] == 0) {
                RoomInfoDataService.getAll({ roomSpace: this.cond.size })
                    .then(response => {
                        this.SizeTotal[this.cond.size - 1] = Number(response.data)
                        this.cond.total = this.SizeTotal[this.cond.size - 1]
                        this.getChecklist()
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
            this.checkifBtotal(this.cond.size - 1)
        },

        getChecklist() {
            ReserveRoomDataService.getList(this.cond)
                .then(response => {
                    this.Timelist[this.cond.size - 1] = response.data
                    this.checkifBtotal(this.cond.size - 1)
                })
                .catch(e => {
                    console.log(e);
                }); 
        },

        checkifBtotal(size) {
            this.disabledDates = []
            Object.keys(this.Timelist[size]).forEach((key) => {
                if(this.Timelist[size][key] < this.SizeTotal[size]) {
                    this.disabledDates.push(key)
                }
            });
        },

        //送出nursery
        submitNursery() {
            this.order.memberId_NPO =  this.Mpets[this.selectedPet].memberId
            this.order.petId_NPO =  this.Mpets[this.selectedPet].petId
            this.order.startTime =  format(this.selectedTime[0], 'yyyy-MM-dd')
            this.order.endTime =  format(this.selectedTime[1], 'yyyy-MM-dd')
            // create 托兒訂單 再 create 房間保留
            console.log(this.order)
        },
        
        //取得會員的寵物資料
        getMemberPet() {
            MemberPetDataService.findByMID(this.memberStatus.id)
                .then(response => {
                    this.Mpets = response.data
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.getMemberPet()
        // this.getChecklist()
    },
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