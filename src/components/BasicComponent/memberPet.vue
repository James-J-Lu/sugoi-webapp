<template>
    <div class="memberPet">
        <div class="top-div">
            <p></p>
            <img src="@/assets/Pet/3.jpg" alt="">
            <p></p>
            <div class="top-right-div">
                <p class="name">{{ MPdataO.petName }}</p>
                <div>
                    <p>狗狗性別：</p>
                    <input class="form-check-input" type="radio" value=0 v-model="MPdataO.petGender" disabled>
                    <label class="form-check-label">&ensp; 男生 &emsp; </label>
                    <input class="form-check-input" type="radio" value=1 v-model="MPdataO.petGender">
                    <label class="form-check-label">&ensp; 女生 &emsp; </label>
                </div>
                <div>
                    <p>是否結紮：</p>
                    <input class="form-check-input" type="radio" value=0 v-model="MPdataO.isLigation">
                    <label class="form-check-label">&ensp; 已結紮 &ensp;</label>
                    <input class="form-check-input" type="radio" value=1 v-model="MPdataO.isLigation">
                    <label class="form-check-label">&ensp; 還沒結紮 &emsp; </label>
                </div>
                <div>
                    <p>狗狗體型：</p>
                    <input class="form-check-input" type="radio" value=0 v-model="MPdataO.petSize">
                    <label class="form-check-label">&ensp; 大型犬 &ensp;</label>
                    <input class="form-check-input" type="radio" value=1 v-model="MPdataO.petSize">
                    <label class="form-check-label">&ensp; 中型犬 &ensp;</label>
                    <input class="form-check-input" type="radio" value=2 v-model="MPdataO.petSize">
                    <label class="form-check-label">&ensp; 小型犬 &emsp; </label>
                </div>
            </div>
        </div>
        <div class="bottom-div">
            <p>特殊疾病 ( 有則描述，沒有則填無 )：</p>
            <p>{{ MPdataO.petDisease }}</p>
            <p @click="check">特殊飲食習慣：</p>
            <p>{{ MPdataO.dietaryHabit }}</p>
        </div>
    </div>    
</template>

<script>

export default {
    name: 'memberPet',
    props: {
        MPdata: Object,
        edit: Boolean,
    },
    data() {
        return {
            MPdataO: this.MPdata,
            editBool: this.edit,
        }
    },
    methods: {
        check() {
            console.log(this.MPdataO)
        },
        changeEdit() {
            console.log('成功')
        }
    },
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
    grid-template-columns: 0.2fr 1fr 0.2fr 2fr;
    grid-template-rows: 1fr;
}
.top-right-div{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr 1fr 1fr;
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
}
.bottom-div {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr 2fr;
}
</style>