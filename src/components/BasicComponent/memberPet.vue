<template>
    <div class="memberPet">
        <div class="top-div">
            <p></p>
            <img v-if="edit == 'false'" :src="MPdataO.img" alt="">
            <input v-if="edit == 'true'" class="form-control" ref="fileInput" type="file" @input="pickFile">
            <p></p>
            <div class="top-right-div">
                <p class="name" v-if="edit == 'false'">{{ MPdataO.petName }}</p>
                <input v-model="MPdataO.petName" type="text" v-if="edit == 'true'">
                <div>
                    <p>狗狗性別：</p>
                    <input class="form-check-input" type="radio" value=0 v-model="MPdataO.petGender" :disabled="edit == 'false'">
                    <label class="form-check-label">&ensp; 男生 &emsp; </label>
                    <input class="form-check-input" type="radio" value=1 v-model="MPdataO.petGender" :disabled="edit == 'false'">
                    <label class="form-check-label">&ensp; 女生 &emsp; </label>
                </div>
                <div>
                    <p>是否結紮：</p>
                    <input class="form-check-input" type="radio" value=0 v-model="MPdataO.isLigation" :disabled="edit == 'false'">
                    <label class="form-check-label">&ensp; 已結紮 &ensp;</label>
                    <input class="form-check-input" type="radio" value=1 v-model="MPdataO.isLigation" :disabled="edit == 'false'">
                    <label class="form-check-label">&ensp; 還沒結紮 &emsp; </label>
                </div>
                <div>
                    <p>狗狗體型：</p>
                    <input class="form-check-input" type="radio" value=1 v-model="MPdataO.petSize" :disabled="edit == 'false'">
                    <label class="form-check-label">&ensp; 大型犬 &ensp;</label>
                    <input class="form-check-input" type="radio" value=2 v-model="MPdataO.petSize" :disabled="edit == 'false'">
                    <label class="form-check-label">&ensp; 中型犬 &ensp;</label>
                    <input class="form-check-input" type="radio" value=3 v-model="MPdataO.petSize" :disabled="edit == 'false'">
                    <label class="form-check-label">&ensp; 小型犬 &emsp; </label>
                </div>
            </div>
        </div>
        <div class="bottom-div">
            <p>特殊疾病 ( 有則描述，沒有則填無 )：</p>
            <p v-if="edit == 'false'">{{ MPdataO.petDisease }}</p>
            <input v-model="T_disease" type="text" v-if="edit == 'true'">
            <p>特殊飲食習慣：</p>
            <p v-if="edit == 'false'">{{ MPdataO.dietaryHabit }}</p>
            <input v-model="T_dietary" type="text" v-if="edit == 'true'">
        </div>
    </div>    
</template>

<script>

export default {
    name: 'memberPet',
    props: {
        MPdata: Object,
        edit: String,
    },
    data() {
        return {
            MPdataO: this.MPdata,
            // 暫存修改前的資料
            T_name: null,
            T_gender: null,
            T_ligation: null,
            T_size: null,
            T_disease: null,
            T_dietary: null,
            T_img: null,
        }
    },
    methods: {
        pickFile () {
            let input = this.$refs.fileInput
            let file = input.files
            if (file && file[0]) {
                let reader = new FileReader
                reader.onload = e => {
                    this.MPdataO.img = e.target.result
                }
                reader.readAsDataURL(file[0])
                this.$emit('input', file[0])
            }
        },

        check() {
            console.log(this.MPdataO)
        },
    },
    watch: {
        edit(NV, OV) {
            if(NV == 'true') {
                this.T_name = this.MPdataO.petName
                this.T_disease = this.MPdataO.petDisease
                this.T_dietary = this.MPdataO.dietaryHabit
                this.T_gender = this.MPdataO.petGender
                this.T_ligation = this.MPdataO.isLigation
                this.T_size = this.MPdataO.petSize
                this.T_img = this.MPdataO.img
            }
            else if(NV == 'false') {
                this.MPdataO.petName = this.T_name
                this.MPdataO.petDisease = this.T_disease
                this.MPdataO.dietaryHabit = this.T_dietary
                this.MPdataO.petGender = this.T_gender
                this.MPdataO.isLigation = this.T_ligation
                this.MPdataO.petSize = this.T_size
                this.MPdataO.img = this.T_img
            }
        }
    }
}
</script>

<style scoped>
.memberPet {
    margin: 1rem;
    background-color: #F9ECBE;
    border-radius: 59px;
    display: grid;
    grid-template-rows: 6fr 4fr;
}
.top-div {
    display: grid;
    padding: 1rem;
    padding-bottom: 0;
    grid-template-columns: 0.2fr 1fr 0.2fr 2fr;
    grid-template-rows: 1fr;
}
.top-div img {
    width: 300px;
    height: 300px;
    object-fit: contain;
}
.top-right-div{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
}
.top-right-div div {
    display:flex;
    justify-content: flex-start;
    float:none;
}
.name {
    display:grid;
    align-items: center;
    font-size: 60px;
    height: 60%;
}
.bottom-div {
    display: grid;
    padding: 1rem;
    padding-top: 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
}
.bottom-div input{
    position: relative;
    left: 10%;
    height: 80%;
    width: 80%;
}
</style>