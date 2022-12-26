<template>
    <div class="petData">
        <p class="dropdown-item rounded-2 active">寵物資料</p>
        <div class="memberPet">
            <memberPet v-for="MPdata in MPdatas" :key="MPdata.petId" :MPdata="MPdata" :edit="editBool"/>
        </div>
        <div class="buttonBox">
            <div>
                <button v-if="editBool == 'false'" type="button" class="submitBtn0" @click="editPet"> 編輯或新增狗狗 </button>
                <button v-if="editBool == 'true' && !newPetF" type="button" class="submitBtn0" @click="pushPet"> 再新增一隻狗狗吧 </button>
            </div>
            <div>
                <button v-if="editBool == 'true'" type="button" class="submitBtn1" @click="cancelEdit"> 取消更改 </button>
                <button v-if="editBool == 'true'" type="button" class="submitBtn2" @click="submitPet"> 確認更改 </button>
            </div>
        </div>
    </div>
</template>

<script>
import memberPet from "../BasicComponent/memberPet.vue"
import MemberPetDataService from "@/services/MemberPetDataService"

export default {
    name: 'petData',
    components: {
        'memberPet': memberPet,
    },
    props: {
        memberStatus: Object,
    },
    data() {
        return {
            editBool: 'false',
            MPdatas: [],
            nullPet: {
                petId: null,
                memberId: this.memberStatus.id,
                petName: null,
                petSize: null,
                petGender: null,
                petDisease: null,
                isLigation: null,
                dietaryHabit: null,
            },

            // flag
            newPetF: false,
        }
    },
    methods: {
        // 取消修改
        cancelEdit() {
            // 如果有點新增寵物要記得pop out
            if(this.newPetF == true)
                this.MPdatas.pop()
            // 通知child要disable
            this.editBool = 'false'
            this.newPetF = false
        },

        submitPet() {
            if(this.newPetF == true) {
                this.CreateData()
                this.editBool = 'false'
            }
            else if(this.newPetF == false) {
                this.UpdateData()
                this.editBool = 'false'
            }
        },

        CreateData() {
            MemberPetDataService.create(this.MPdatas)
                .then(response => {
                    this.getMemberPet()
                    window.alert("新增寵物成功")
                })
                .catch(e => {
                    console.log(e);
                });
        },

        UpdateData() {
            for(let i = 0; i < this.MPdatas.length; i++) {
                MemberPetDataService.update(this.MPdatas[i].petId, this.MPdatas[i])
                    .then(response => {
                        if(response.data == 'success' && i == this.MPdatas.length-1) {
                            this.getMemberPet()
                            window.alert("修改寵物成功")
                        }
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },

        pushPet() {
            this.MPdatas.push(this.nullPet)
            this.newPetF = true
        },

        editPet() {
            this.editBool = 'true'
        },

        resetNull() {
            this.nullPet.petId = null
            this.nullPet.memberId = this.memberStatus.id
            this.nullPet.petName = null
            this.nullPet.petSize = null
            this.nullPet.petGender = null
            this.nullPet.petDisease = null
            this.nullPet.isLigation = null
            this.nullPet.dietaryHabit = null
        },

        getMemberPet() {
            this.MPdatas = []
            MemberPetDataService.findByMID(this.memberStatus.id)
                .then(response => {
                    console.log(response.data)
                    this.MPdatas = response.data
                    this.editBool = 'false'
                    this.newPetF = false
                    this.resetNull()
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.getMemberPet()
    },
}
</script>

<style scoped>
.petData {
    position: relative;
    height: 100%;
    width: 70%;
    left: 15%;
    font-size: 30px;
    display: block;
}
.petData p{
    font-size: 45px;
    font-weight: bold;
    padding-left: 2rem;
    color: black !important;
    display: flex;
    align-items: center!important;
    justify-content: center;
    height: 10%;
}
.memberPet {
    font-size: 30px;
    font-weight: bold;
    color: black !important;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(600px, 600px);
}
.submitBtn {
    display: inline-block;
    margin-bottom:1rem;
    width: 20%;
    height: 10%;
    bottom: 2%;
    background-color: #FF3D00;
    border-radius: 27px;
    font-size: 30px;
    color: white;
}
.submitBtn0 {
    display: inline-block;
    text-align: center;
    width: 28%;
    height: 100%;
    background-color: #114ABA;
    border-radius: 27px;
    font-size: 30px;
    color: white;
}
.submitBtn1 {
    display: inline-block;
    text-align: center;
    width: 20%;
    height: 100%;
    background-color: #9A9DA2;
    border-radius: 20px;
    font-size: 30px;
    color: white;
}
.submitBtn2 {
    display: inline-block;
    text-align: center;
    width: 20%;
    height: 100%;
    background-color: #114ABA;
    border-radius: 20px;
    font-size: 30px;
    color: white;
}
.buttonBox {
    position: relative;
    left: 10%;
    width: 80%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
}
.buttonBox div:nth-child(1) {
    display: flex;
    align-content: center;
    justify-content: center;
}
.buttonBox div:nth-child(2) {
    display: flex;
    align-content: center;
    justify-content:space-between;
}
</style>