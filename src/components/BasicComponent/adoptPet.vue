<template>
    <div class="petComp">
        <div class="imgdiv">
            <img :src="src"  alt="??" class="img">
        </div>
        <div class="detail" @click="click()">
            <ul>
                <li>
                    {{ pet.name }}
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'adoptPet',
    props: {
        pet: Object,
    },
    methods: {
        click() {
            console.log(this.pet.img)
        }
    },
    data() {
        return {
            src: require('../../assets/Pet/5.jpg'),
        }
    }
}

</script>

<style scoped>
.petComp {
    position: relative;
    background-color: white;
}
.imgdiv {
    border-radius: 20px;
    height: 50%;
    top: 0;
    margin-left: 10%;
    margin-right: 10%;
}
.img {
    border-radius: 20px;
    height: 100%;
    width: 100%;
}
.detail {
    position: absolute;
    background-color: rgb(255, 255, 255);
    bottom: 0;
    width: 60%;
    height: 55%;
    left: 20%;
    border-radius: 25px;
}

</style>