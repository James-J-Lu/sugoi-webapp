<template>
    <div class="petComp">
        <div class="imgdiv">
            <img :src="src"  alt="??" class="img">
        </div>
        <div class="detail">
            <ul class="dropdown-menu position-static d-grid gap-1 mx-0 w-220px">
                <li>
                    <p class="dropdown-item rounded-2 active">{{ pet.name }}</p>
                </li>
                <li>
                    <p class="dropdown-item rounded-2 active"></p>
                </li>
                <li>
                    <p class="dropdown-item rounded-2 active">{{ pet.name }} </p>
                </li>
                <li>
                    <p class="dropdown-item rounded-2 active">{{ pet.name }}</p>
                </li>
                <li @click="click">
                    <p class="dropdown-item rounded-2 active">{{ pet.name }}</p>
                </li>
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
            console.log(this.src)
        }
    },
    data() {
        return {

            src: require('../../assets/Pet/1.jpg'),
        }
    },
    mounted() {
        // this.click()
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
    bottom: 0;
    width: 60%;
    height: 55%;
    left: 20%;
}
.detail ul {
  height: 100%;
  background-color: #ffffff;
  --bs-dropdown-border-color: none;
  --bs-dropdown-border-radius: none;
  grid-template-rows: 20% 3% 20% 20% 20%;
  border-radius: 15px;
  padding-top: 2rem;
}
.detail li p{
  font-size: 30px;
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center!important;
  justify-content:center;
  height: 100%;
}
.detail li {
    display: flex;
    align-items: center!important;
    justify-content:center;
}
.detail li:nth-child(2) p{
    background-color: crimson;
    width: 70%;
}

</style>