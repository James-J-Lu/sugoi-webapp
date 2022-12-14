<template>
    <div class="MroomAmount">
        <p class="Rtop">查詢房間數量</p>
        <div class="roomDisplay">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <label for="cc-name" class="form-label">大房間：{{bigRoom}}間</label>
                        <input type="number" class="form-control inputDisplay" v-model="bigRoom" min="0" max="10">
                    </div>

                    <div class="col">
                        <label for="cc-number" class="form-label">中房間：{{middleRoom}}間</label>
                        <input type="number" class="form-control inputDisplay" v-model="middleRoom" min="0" max="10">
                    </div>

                    <div class="col">
                        <label for="cc-number" class="form-label">小房間：{{smallRoom}}間</label>
                        <input type="number" class="form-control inputDisplay" v-model="smallRoom" min="0" max="10">
                    </div>
                </div>
            </div>
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
        }
    },
    methods: {
      
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
    font-size: 40px;
    margin-top: 20%;
}
.inputDisplay {
    font-size: 28px;
    text-align: center;
}
</style>