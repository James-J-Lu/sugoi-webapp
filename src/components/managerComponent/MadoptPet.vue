<template>   
    <div class="MadoptPet">
        <p>待領養狗狗
            <input v-if="P_detail || P_create" @click="changeAccess('Mback')" class="backButton" type="button" value="返回">
            <input v-if="!P_detail && !P_create" @click="changeAccess('new')" type="button" value="新增">
            <input v-if="P_detail && !modify " @click="changeAccess('modify')" type="button" value="修改">
        </p>

        <!-- 全局 -->
        <div class="table-responsive" v-if="!P_detail && !P_create">
            <table class="table table-striped table-sm tableType">
            <thead class="PtableHead">
                <tr>
                <th>狗狗編號</th>
                <th>狗狗名字</th>
                <th style="width:50%">說明</th>
                </tr>
            </thead>
            <tbody class="PtableBody">
                <tr v-for="(adoptPet, index) in adoptPets" :key="adoptPet.adoPetId" @click="changeAccess('detail' ,index)">
                <td>{{adoptPet.adoPetId}}</td>
                <td>{{adoptPet.adoPetName}}</td>
                <td>{{adoptPet.adoPetInfo}}</td>
                </tr>
            </tbody>
            </table>
        </div>

        <!-- 詳細資料 -->
        <div v-if="P_detail">
            <div class="container card w-50" style="border-radius: .5rem;">
                <div class="row g-0">
                    <div class="col-md-4 gradient-custom text-center text-white" style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
                        <img v-if="!modify" :src="adoptPets[selectPet].img" alt="??" class="img-fluid my-5" style="width: 200px;" />
                        <input v-if="modify" class="form-control" ref="fileInput" type="file" @input="pickFile">
                    </div>
                    <div class="col-md-8 card-body p-4 row pt-1 col-6 mb-3">
                        <p @click="checkimg">狗狗編號</p>
                        <p class="text-muted">{{adoptPets[selectPet].adoPetId}}</p>
                        <p>狗狗名字</p>
                        <p v-if="!modify" class="text-muted">{{adoptPets[selectPet].adoPetName}}</p>
                        <input v-if="modify" type="text" v-model="adoptPets[selectPet].adoPetName">
                    </div>
                </div>
            </div>
            <div class="check">
                <ul class="checkForm dropdown-menu position-static d-grid gap-1 mx-0 w-220px">
                    <li>
                        <p>體型：&emsp;&emsp;</p>
                        <input class="form-check-input" type="radio" value=1 v-model="adoptPets[selectPet].adoPetFigure" :disabled="!modify">
                        <label class="form-check-label">大型犬</label>
                        <input class="form-check-input" type="radio" value=2 v-model="adoptPets[selectPet].adoPetFigure" :disabled="!modify">
                        <label class="form-check-label">中型犬</label>
                        <input class="form-check-input" type="radio" value=3 v-model="adoptPets[selectPet].adoPetFigure" :disabled="!modify">
                        <label class="form-check-label">小型犬</label>
                    </li>
                    <li>
                        <p>年齡：&emsp;&emsp;</p>
                        <p v-if="!modify" class="text-muted">{{adoptPets[selectPet].adoPetAge}}</p>
                        <input v-if="modify" class="text-muted" type="text" v-model="adoptPets[selectPet].adoPetAge">
                    </li>
                    <li>
                        <p>毛色：&emsp;&emsp;</p>
                        <input class="form-check-input" type="radio" value=1 v-model="adoptPets[selectPet].adoPetColor" :disabled="!modify">
                        <label class="form-check-label">白色</label>
                        <input class="form-check-input" type="radio" value=2 v-model="adoptPets[selectPet].adoPetColor" :disabled="!modify">
                        <label class="form-check-label">黑色</label>
                        <input class="form-check-input" type="radio" value=3 v-model="adoptPets[selectPet].adoPetColor" :disabled="!modify">
                        <label class="form-check-label">黃色</label>
                        <input class="form-check-input" type="radio" value=4 v-model="adoptPets[selectPet].adoPetColor" :disabled="!modify">
                        <label class="form-check-label">花花色</label>
                    </li>
                    <li>
                        <p>毛的長度：</p>
                        <input class="form-check-input" type="radio" value=1 v-model="adoptPets[selectPet].adoPetFur" :disabled="!modify">
                        <label class="form-check-label">長毛</label>
                        <input class="form-check-input" type="radio" value=2 v-model="adoptPets[selectPet].adoPetFur" :disabled="!modify">
                        <label class="form-check-label">短毛</label>
                    </li>
                    <li>
                        <p>性別：&emsp;&emsp;</p>
                        <input class="form-check-input" type="radio" value=1 v-model="adoptPets[selectPet].adoPetGender" :disabled="!modify">
                        <label class="form-check-label">男生</label>
                        <input class="form-check-input" type="radio" value=2 v-model="adoptPets[selectPet].adoPetGender" :disabled="!modify">
                        <label class="form-check-label">女生</label>
                    </li>                
                    <li>
                        <p>品種：&emsp;&emsp;</p>
                        <input class="form-check-input" type="radio" value=1 v-model="adoptPets[selectPet].adoPetBreed" :disabled="!modify">
                        <label class="form-check-label">特定品種</label>
                        <input class="form-check-input" type="radio" value=0 v-model="adoptPets[selectPet].adoPetBreed" :disabled="!modify">
                        <label class="form-check-label">非特定品種</label>
                    </li>                
                    <li>
                        <p>介紹：&emsp;&emsp;</p>
                        <textarea name="info" id="info" :readonly="!modify" cols="50" rows="5" class="form-control introText" v-model="adoptPets[selectPet].adoPetInfo"></textarea>
                    </li>
                    <li class="submitBtn">
                        <button v-if="modify" type="button" @click="changeAccess('modify_D')">完成</button>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 新增狗狗 -->
        <div class="table-responsive" v-if="P_create">
            <div class="new">
                <ul class="newForm dropdown-menu position-static d-grid gap-1 mx-0 w-220px">
                    <li>
                        <p @click="checkimg">上傳圖片：</p>
                        <input class="form-control" ref="fileInput" type="file" @input="pickFile">
                    </li>
                    <li>
                        <p>狗狗名字：</p>
                        <input type="text" class="input" v-model="newPet.adoPetName">
                    </li>
                    <li>
                        <p>體型：&emsp;&emsp;</p>
                        <input class="form-check-input" type="radio" value=1 v-model="newPet.adoPetFigure">
                        <label class="form-check-label">大型犬</label>
                        <input class="form-check-input" type="radio" value=2 v-model="newPet.adoPetFigure">
                        <label class="form-check-label">中型犬</label>
                        <input class="form-check-input" type="radio" value=3 v-model="newPet.adoPetFigure">
                        <label class="form-check-label">小型犬</label>
                    </li>
                    <li>
                        <p>年齡：&emsp;&emsp;</p>
                        <input type="number" v-model="newPet.adoPetAge">
                    </li>
                    <li>
                        <p>毛色：&emsp;&emsp;</p>
                        <input class="form-check-input" type="radio" value=1 v-model="newPet.adoPetColor">
                        <label class="form-check-label">白色</label>
                        <input class="form-check-input" type="radio" value=2 v-model="newPet.adoPetColor">
                        <label class="form-check-label">黑色</label>
                        <input class="form-check-input" type="radio" value=3 v-model="newPet.adoPetColor">
                        <label class="form-check-label">黃色</label>
                        <input class="form-check-input" type="radio" value=4 v-model="newPet.adoPetColor">
                        <label class="form-check-label">花花色</label>
                    </li>
                    <li>
                        <p>毛的長度：</p>
                        <input class="form-check-input" type="radio" value=1 v-model="newPet.adoPetFur">
                        <label class="form-check-label">長毛</label>
                        <input class="form-check-input" type="radio" value=2 v-model="newPet.adoPetFur">
                        <label class="form-check-label">短毛</label>
                    </li>
                    <li>
                        <p>性別：&emsp;&emsp;</p>
                        <input class="form-check-input" type="radio" value=1 v-model="newPet.adoPetGender">
                        <label class="form-check-label">男生</label>
                        <input class="form-check-input" type="radio" value=2 v-model="newPet.adoPetGender">
                        <label class="form-check-label">女生</label>
                    </li>                
                    <li>
                        <p>品種：&emsp;&emsp;</p>
                        <input class="form-check-input" type="radio" value=1 v-model="newPet.adoPetBreed">
                        <label class="form-check-label">特定品種</label>
                        <input class="form-check-input" type="radio" value=0 v-model="newPet.adoPetBreed">
                        <label class="form-check-label">非特定品種</label>
                    </li>                
                    <li>
                        <p>介紹：&emsp;&emsp;</p>
                        <textarea cols="50" rows="5" class="form-control introText" v-model="newPet.adoPetInfo"></textarea>
                    </li>
                    <li class="submitBtn">
                        <button type="button" @click="changeAccess('new_D')">新增</button>
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
import AdoptionPetDataService from '@/services/AdoptionPetDataService'

export default {
    name: 'MadoptPet',
    components: {
        
    },
    data () {
        return {
            adoptPets: [],
            modify: false,
            P_detail: false,
            P_create: false,
            selectPet: null,
            newPet: {
                'adoPetId': null,
                'adoPetName': null,
                'adoPetInfo': null,
                'adoPetAge': null,
                'adoPetBreed': null,
                'adoPetColor': null,
                'adoPetDisease': null,
                'adoPetFigure': null,
                'adoPetFur': null,
                'adoPetGender': null,
                'dogFriendly': null,
                'humanFriendly': null,
                'status': 1,
                'img': null,
            },
            // 修改暫存
            T_Name: null,
            T_Info: null,
            T_Age: null,
            T_Breed: null,
            T_Color: null,
            T_Disease: null,
            T_Figure: null,
            T_Fur: null,
            T_Gender: null,
            T_img: null,
        }
    },
    methods: {
        initial() {
            this.newPet.adoPetId = null
            this.newPet.adoPetName = null
            this.newPet.adoPetInfo = null
            this.newPet.adoPetAge = null
            this.newPet.adoPetBreed = null
            this.newPet.adoPetColor = null
            this.newPet.adoPetDisease = null
            this.newPet.adoPetFigure = null
            this.newPet.adoPetFur = null
            this.newPet.adoPetGender = null
            this.newPet.dogFriendly = null
            this.newPet.humanFriendly = null
            this.newPet.status = null
            this.newPet.img = null
        },

        pickFile () {
            let input = this.$refs.fileInput
            let file = input.files
            if (file && file[0]) {
                let reader = new FileReader
                reader.onload = e => {
                    if(this.modify == true) {
                        this.adoptPets[this.selectPet].img = e.target.result
                    }
                    else {
                        this.newPet.img = e.target.result
                    }
                }
                reader.readAsDataURL(file[0])
                this.$emit('input', file[0])
            }
        },

        saveTemp() {
            this.T_Name = this.adoptPets[this.selectPet].adoPetName
            this.T_Info = this.adoptPets[this.selectPet].adoPetInfo
            this.T_Age = this.adoptPets[this.selectPet].adoPetAge
            this.T_Breed = this.adoptPets[this.selectPet].adoPetBreed
            this.T_Color = this.adoptPets[this.selectPet].adoPetColor
            this.T_Disease = this.adoptPets[this.selectPet].adoPetDisease
            this.T_Figure = this.adoptPets[this.selectPet].adoPetFigure
            this.T_Fur = this.adoptPets[this.selectPet].adoPetFur
            this.T_Gender = this.adoptPets[this.selectPet].adoPetGender
            this.T_img = this.adoptPets[this.selectPet].img
        },
        reloadTemp() {
            this.adoptPets[this.selectPet].adoPetName = this.T_Name
            this.adoptPets[this.selectPet].adoPetInfo = this.T_Info
            this.adoptPets[this.selectPet].adoPetAge = this.T_Age
            this.adoptPets[this.selectPet].adoPetBreed = this.T_Breed
            this.adoptPets[this.selectPet].adoPetColor = this.T_Color
            this.adoptPets[this.selectPet].adoPetDisease = this.T_Disease
            this.adoptPets[this.selectPet].adoPetFigure = this.T_Figure
            this.adoptPets[this.selectPet].adoPetFur = this.T_Fur
            this.adoptPets[this.selectPet].adoPetGender = this.T_Gender
            this.adoptPets[this.selectPet].img = this.T_img
        },

        changeAccess(dest, index) {
            if(dest == 'modify') {
                this.saveTemp()
                this.modify = true
            }
            // 修改寵物
            else if(dest == 'modify_D') {
                AdoptionPetDataService.update(this.adoptPets[this.selectPet].adoPetId, this.adoptPets[this.selectPet])
                    .then(response => {
                        if(response.data == 'success') {
                            this.P_detail = false
                            this.P_create = false
                            this.modify = false
                        }
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
            else if(dest == 'detail') {
                this.selectPet = index
                this.P_detail = true
                this.P_create = false
                this.modify = false
            }
            else if(dest == 'Mback') {
                // 取消修改寵物
                if(this.modify == true)
                    this.reloadTemp()
                this.P_detail = false
                this.P_create = false
                this.modify = false
            }
            else if(dest == 'new') {
                this.initial()
                this.P_detail = false
                this.P_create = true
                this.modify = false
            }
            else if(dest == 'new_D') {
                this.createPet()
            }
        },
        
        // 新增寵物
        createPet() {
            AdoptionPetDataService.create(this.newPet)
                .then(response => {
                    if(response.data == 'success') {
                        this.getData()
                        window.alert('成功新增帶領養寵物')
                    }
                })
                .catch(e => {
                    console.log(e);
                });
        },

        getData() {
            this.adoptPets = []
            AdoptionPetDataService.getAll()
                .then(response => {
                    this.adoptPets = response.data
                    this.P_detail = false
                    this.P_create = false
                    this.modify = false
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },

    mounted() {
        this.getData()
    },
}
</script>

<style>

.imagePreviewWrapper {
  background-repeat: no-repeat;
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: contain;
    background-position: center center;
}

.MadoptPet {
  text-align: left;
}
.MadoptPet {
    font-size: 40px;
}

.PtableHead {
    background-color:rgb(218,217,217);
}

.PtableBody {
    background-color:white;
    font-size: 28px;
}

.tableType {
  --bs-table-border-color: none !important;
  text-align: center;
}

.Pform {
  text-align: left;
  font-size: 28px;
}
.introText {
  font-size: 32px;
}
.newForm li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 40px;
}
.submitBtn {
    display: flex;
    justify-content: center !important;
}
.submitBtn button {
    background-color: rgb(244, 164, 96);
    border-radius: 20px;
}

.newForm {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 4fr 1fr;
    width: 100%;
    height: 95%;
    --bs-dropdown-border-color: none;
    --bs-dropdown-border-radius: none;
}
.modifyForm li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 40px;
}

.modifyForm {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 4fr 1fr;
    width: 100%;
    height: 95%;
    --bs-dropdown-border-color: none;
    --bs-dropdown-border-radius: none;
}

.checkForm li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 40px;
}

.checkForm {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 4fr;
    width: 100%;
    height: 95%;
    --bs-dropdown-border-color: none;
    --bs-dropdown-border-radius: none;
}
</style>