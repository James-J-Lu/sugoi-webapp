<template>
    <div class="reserveRoom">
        <div class="choseroom">
            <div>
                <p>選擇房間大小</p>
                <select name="" id="" v-model="reserveOrder.roomSize" @change="SelectF">
                    <option v-for="size in sizes" :key="size.id" :value="size.id" placeholder="房間大小">{{ size.name }}</option>
                </select>
            </div>
            <div>
                <p>選擇房間號碼</p>
                <select name="" id="" v-model="reserveOrder.roomId">
                    <option v-for="room in roomIds[reserveOrder.roomSize-1]" :key="room.roomId" :value="room.roomId">{{ room.roomNo }}</option>
                </select>
            </div>
        </div>
        <div>
            <p>選擇保留時間</p>
            <DatePicker v-model="selectedTime" :disabled-dates="disabledDates" :clearable="false" range :min-date="new Date()" :enable-time-picker="false"></DatePicker>
        </div>
        <div>
            <button type="button" @click="submitNursery">送出</button>
        </div>
    </div>
</template>

<script>
import {format} from 'date-fns';
import RoomInfoDataService from '@/services/RoomInfoDataService';
import ReserveRoomDataService from '@/services/ReserveRoomDataService';
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    name: 'MreserveRoom',
    components: { 'DatePicker': DatePicker, },
    data() {
        return {
            disabledDates: [], //push
            selectedTime: null, //[0],[1] start end
            reserveOrder: {
                reserveId: null,
                roomId: null, //
                orderId: null,
                startTime: null, //
                endtime: null, //
                status: 2,
                manager: 'M999',
                roomSize: null, //
            },
            cond: {
                "total": null,
                "size": null,
                "time": format(new Date(), 'yyyy-MM-dd')
            },
            SizeTotal: [ 0, 0, 0 ],
            Timelist:[[],[],[]],
            roomIds: [ [], [], [] ],
            sizes: [ {id: 1, name: '大房間'}, {id: 2, name: '中房間'}, {id: 3, name: '小房間'} ]
        }
    },
    methods: {
        submitNursery() {
            this.reserveOrder.startTime = format(this.selectedTime[0], 'yyyy-MM-dd')
            this.reserveOrder.endtime = format(this.selectedTime[1], 'yyyy-MM-dd')

            // create 托兒訂單 再 create 房間保留
            ReserveRoomDataService.create(this.reserveOrder)
                .then(response => {
                    if(response.data == 'success') {
                        window.alert('成功保留房間')

                        this.selectedTime = null
                        this.cond.total = null
                        this.cond.size = null
                        this.cond.time = format(new Date(), 'yyyy-MM-dd')
                        this.Timelist = [[],[],[]]
                        this.disabledDates = []
                    }
                })
                .catch(e => {
                    console.log(e);
                });
        },

        SelectF() {
            if(this.SizeTotal[this.reserveOrder.roomSize - 1] == 0) {
                this.cond.size = this.reserveOrder.roomSize
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
        },

        // 取得該大小每天有幾隻了
        getChecklist() {
            ReserveRoomDataService.getList(this.cond)
                .then(response => {
                    this.Timelist[this.cond.size - 1] = response.data
                    console.log(this.Timelist)
                    this.checkifBtotal(this.cond.size - 1)
                })
                .catch(e => {
                    console.log(e);
                }); 
        },

        checkifBtotal(size) {
            this.disabledDates = []

            Object.keys(this.Timelist[size]).forEach((key) => {
                if(this.Timelist[size][key] >= this.SizeTotal[size]) {
                    this.disabledDates.push(key)
                }
            });
            console.log(this.disabledDates)
        },

        getAllroom() {
            for(let i = 1; i < 4; i++) {
                RoomInfoDataService.getAllroom(i)
                    .then(response => {
                        this.roomIds[i-1] = response.data
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        }
    },
    mounted() {
        this.getAllroom()
    },

}
</script>

<style scoped>
.reserveRoom {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    padding-left: 8rem;
    padding-right: 8rem;
    padding-bottom: 8rem;
    background-color: #FCF7E2;
}
.reserveRoom div {
    display: grid;
    align-content: center;
    justify-content: center;
    background-color: #FCF7E2;
}
select {
    position: relative;
    height: 100%;
    width: 80%;
    font-size: 30px;
}
button {
    font-size: 50px;
    background-color: #FF3D00;
    border-radius: 27px;
    color:white ;
}
p {
    font-size: 35px;
}
.choseroom {
    grid-template-columns: 1fr 1fr ;
    justify-content:flex-start;
    padding-left: 5rem;
    padding-right: 5rem;
}
</style>