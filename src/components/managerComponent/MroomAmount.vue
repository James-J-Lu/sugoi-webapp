<template>
    <div class="MroomAmount">
        <p class="Rtop">查詢房間數量</p>
        <div class="roomDisplay">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <label for="cc-name" class="form-label">大房間：{{bigRoom}}間</label>
                        <input type="number" class="form-control inputDisplay" v-model="bigRoom2" min="0">
                    </div>

                    <div class="col">
                        <label for="cc-number" class="form-label">中房間：{{middleRoom}}間</label>
                        <input type="number" class="form-control inputDisplay" v-model="middleRoom2" min="0">
                    </div>

                    <div class="col">
                        <label for="cc-number" class="form-label">小房間：{{smallRoom}}間</label>
                        <input type="number" class="form-control inputDisplay" v-model="smallRoom2" min="0">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <input type="button" value="確認修改" @click="modify(bigRoom2, middleRoom2, smallRoom2)">
        </div>
    </div>
    
</template>

<script>

export default {
    name: 'MroomAmount',
    components: {
        
    },
    data () {
        return {
            bigRoom: 10,
            middleRoom: 10,
            smallRoom: 10,
            bigRoom2: null,
            middleRoom2: null,
            smallRoom2: null
        }
    },
    methods: {
        modify(big2, middle2, small2) {
            this.bigRoom = big2
            this.middleRoom = middle2
            this.smallRoom = small2
        }
    },
    mounted() {
        this.bigRoom2 = this.bigRoom,
        this.middleRoom2 = this.middleRoom,
        this.smallRoom2 = this.smallRoom
    }
}
</script>

<style>
.Rtop {
    text-align: left;
}

.MroomAmount {
    font-size: 40px;
}

.roomDisplay {
    font-size: 32px;
    margin-top: 20%;
    text-align: left;
}
.inputDisplay {
    font-size: 28px;
    text-align: center;
}
.container {
  display: flex;
  justify-content: center;
}

</style>