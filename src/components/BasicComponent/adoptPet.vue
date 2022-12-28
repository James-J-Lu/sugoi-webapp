<template>
    <div class="petComp">
        <div class="imgdiv">
            <img :src="singlePet.img"  alt="??" class="img">
        </div>
        <div class="detail">
            <ul class="dropdown-menu position-static d-grid gap-1 mx-0 w-220px">
                <li>
                    <p class="dropdown-item rounded-2 active">{{ singlePet.adoPetName }}</p>
                </li>
                <li>
                    <p class="dropdown-item rounded-2 active"></p>
                </li>
                <li>
                    <p class="dropdown-item rounded-2 active">{{ singlePet.adoPetGender }} || {{ singlePet.adoPetAge }} 歲</p>
                </li>
                <li>
                    <p class="dropdown-item rounded-2 active">{{ singlePet.adoPetColor }} || {{ singlePet.adoPetFigure }}</p>
                </li>
                <li>
                    <p class="dropdown-item rounded-2 active">{{ singlePet.adoPetInfo }}</p>
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
    data() {
        return{
            singlePet: this.pet
        }
    },
    methods: {
        click() {
            
        },

        id2label() {
            // 大小
            if(this.singlePet.adoPetFigure == 1)
                this.singlePet.adoPetFigure = '大型犬'
            else if(this.singlePet.adoPetFigure == 2)
                this.singlePet.adoPetFigure = '中型犬'
            else if(this.singlePet.adoPetFigure == 3)
                this.singlePet.adoPetFigure = '小型犬'
            // 毛色
            if(this.singlePet.adoPetColor == 1)
                this.singlePet.adoPetColor = '白色'
            else if(this.singlePet.adoPetColor == 2)
                this.singlePet.adoPetColor = '黑色'
            else if(this.singlePet.adoPetColor == 3)
                this.singlePet.adoPetColor = '黃色'
            else if(this.singlePet.adoPetColor == 4)
                this.singlePet.adoPetColor = '花花色'
            // 長短毛
            if(this.singlePet.adoPetColor == 1)
                this.singlePet.adoPetColor = '長毛'
            else if(this.singlePet.adoPetColor == 2)
                this.singlePet.adoPetColor = '短毛'
            // 性別
            if(this.singlePet.adoPetGender == 1)
                this.singlePet.adoPetGender = '男'
            else if(this.singlePet.adoPetGender == 2)
                this.singlePet.adoPetGender = '女'
        },
    },
    mounted() {
        this.id2label()
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
    margin-left: 2rem;
    margin-right: 2rem;
    min-width: 300px;
    min-height: 300px;
    max-width: 300px;
    max-height: 300px;
}
.img {
    border-radius: 20px;
    height: 100%;
    width: 100%;
}
.detail {
    position: absolute;
    bottom: 1%;
    width: 70%;
    height: 55%;
    left: 15%;
}
.detail ul {
  height: 100%;
  background-color: #ffffff;
  --bs-dropdown-border-color: none;
  --bs-dropdown-border-radius: none;
  grid-template-rows: 20% 3% 20% 20% 20%;
  border-radius: 15px;
  z-index: 10;
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
    --bs-dropdown-link-active-bg: none;
}
.detail li:nth-child(2) p{
    background-color: rgb(213, 101, 9);
    width: 70%;
}

</style>