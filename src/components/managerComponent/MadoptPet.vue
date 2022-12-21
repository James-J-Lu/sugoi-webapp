<template>   
  <div class="MadoptPet">
      <p>待領養狗狗
        <input v-if="!gomain" @click="back(gocheck)" class="backButton" type="button" value="返回">
        <input v-if="gomain" @click="checkNew(gonew)" type="button" value="新增">
        <input v-if="gocheck" @click="checkModify(gomodify)" type="button" value="修改">
      </p>
      <div class="table-responsive" v-if="gomain">
        <table class="table table-striped table-sm tableType">
          <thead class="PtableHead">
            <tr>
              <th>狗狗編號</th>
              <th>狗狗名字</th>
              <th style="width:50%">說明</th>
            </tr>
          </thead>
          <tbody class="PtableBody">
            <tr v-for="adoptPet in adoptPets" :key="adoptPet.id" @click="test(adoptPet.id)">
              <td>{{adoptPet.id}}</td>
              <td>{{adoptPet.name}}</td>
              <td>{{adoptPet.description}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    <div v-if="gocheck">
      <div class="container">
        <div class="card w-50" style="border-radius: .5rem;">
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white"
              style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" class="img-fluid my-5" style="width: 200px;" />
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <p>狗狗編號</p>
                    <p class="text-muted">{{adoptPets[selectPet].id}}</p>
                    <p>狗狗名字</p>
                    <p class="text-muted">{{adoptPets[selectPet].name}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="check">
        <ul class="checkForm dropdown-menu position-static d-grid gap-1 mx-0 w-220px">
            <li>
                <p>體型：&emsp;&emsp;</p>
                <p class="text-muted">{{adoptPets[selectPet].petSize}}</p>
            </li>
            <li>
                <p>年齡：&emsp;&emsp;</p>
                <p class="text-muted">{{adoptPets[selectPet].petAge}}</p>
            </li>
            <li>
                <p>毛色：&emsp;&emsp;</p>
                <p class="text-muted">{{adoptPets[selectPet].hairColor}}</p>
            </li>
            <li>
                <p>毛的長度：</p>
                <p class="text-muted">{{adoptPets[selectPet].hairLong}}</p>
            </li>
            <li>
                <p>性別：&emsp;&emsp;</p>
                <p class="text-muted">{{adoptPets[selectPet].petGender}}</p>
            </li>                
            <li>
                <p>品種：&emsp;&emsp;</p>
                <p class="text-muted">{{adoptPets[selectPet].petType}}</p>
            </li>                
            <li>
                <p>介紹：&emsp;&emsp;</p>
                <textarea name="info" id="info" readonly="readonly" cols="50" rows="5" class="form-control introText" v-model="adoptPets[selectPet].intro"></textarea>
            </li>
        </ul>
      </div>
    </div>
    <div class="table-responsive" v-if="gonew">
      <div class="new">
            <ul class="newForm dropdown-menu position-static d-grid gap-1 mx-0 w-220px">
                <li>
                    <p>狗狗名字：</p>
                    <input type="text" class="input" v-model="newName">
                </li>
                <li>
                    <p>體型：&emsp;&emsp;</p>
                    <input class="form-check-input" type="radio" name="size" id="大型犬" value="大型犬" v-model="newPetSize">
                    <label class="form-check-label">
                        大型犬
                    </label>
                    <input class="form-check-input" type="radio" name="size" id="中型犬" value="中型犬" v-model="newPetSize">
                    <label class="form-check-label">
                        中型犬
                    </label>
                    <input class="form-check-input" type="radio" name="size" id="小型犬" value="小型犬" v-model="newPetSize">
                    <label class="form-check-label">
                        小型犬
                    </label>
                </li>
                <li>
                    <p>年齡：&emsp;&emsp;</p>
                    <input type="number" v-model="newPetAge">
                </li>
                <li>
                    <p>毛色：&emsp;&emsp;</p>
                    <input class="form-check-input" type="radio" name="color" id="黑色" value="黑色" v-model="newHairColor">
                    <label class="form-check-label">
                        黑色
                    </label>
                    <input class="form-check-input" type="radio" name="color" id="黃色" value="黃色" v-model="newHairColor">
                    <label class="form-check-label">
                        黃色
                    </label>
                    <input class="form-check-input" type="radio" name="color" id="白色" value="白色" v-model="newHairColor">
                    <label class="form-check-label">
                        白色
                    </label>
                    <input class="form-check-input" type="radio" name="color" id="花花系" value="花花系" v-model="newHairColor">
                    <label class="form-check-label">
                        花花系
                    </label>
                </li>
                <li>
                    <p>毛的長度：</p>
                    <input class="form-check-input" type="radio" name="length" id="長毛" value="長毛" v-model="newHairLong">
                    <label class="form-check-label">
                        長毛
                    </label>
                    <input class="form-check-input" type="radio" name="length" id="短毛" value="短毛" v-model="newHairLong">
                    <label class="form-check-label">
                        短毛
                    </label>
                </li>
                <li>
                    <p>性別：&emsp;&emsp;</p>
                    <input class="form-check-input" type="radio" name="gender" id="男生" value="男生" v-model="newPetGender">
                    <label class="form-check-label">
                        男生
                    </label>
                    <input class="form-check-input" type="radio" name="gender" id="女生" value="女生" v-model="newPetGender">
                    <label class="form-check-label">
                        女生
                    </label>
                </li>                
                <li>
                    <p>品種：&emsp;&emsp;</p>
                    <input type="text" v-model="newPetType">
                </li>                
                <li>
                    <p>介紹：&emsp;&emsp;</p>
                    <textarea name="info" id="info" cols="50" rows="5" class="form-control introText" v-model="newIntro"></textarea>
                </li>
                <li>
                    <button type="button" class="submitBtn" @click="addItem(newName)">完成</button>
                </li>
            </ul>
        </div>
      </div>
    <div class="table-responsive" v-if="gomodify">
        <div class="modify">
            <ul class="modifyForm dropdown-menu position-static d-grid gap-1 mx-0 w-220px">
                <li>
                    <p>狗狗名字：</p>
                    <input type="text" v-model="adoptPets[selectPet].name">
                </li>
                <li>
                    <p>體型：&emsp;&emsp;</p>
                    <input class="form-check-input" type="radio" name="size" id="大型犬" value="大型犬" v-model="adoptPets[selectPet].petSize">
                    <label class="form-check-label">
                        大型犬
                    </label>
                    <input class="form-check-input" type="radio" name="size" id="中型犬" value="中型犬" v-model="adoptPets[selectPet].petSize">
                    <label class="form-check-label">
                        中型犬
                    </label>
                    <input class="form-check-input" type="radio" name="size" id="小型犬" value="小型犬" v-model="adoptPets[selectPet].petSize">
                    <label class="form-check-label">
                        小型犬
                    </label>
                </li>
                <li>
                    <p>年齡：&emsp;&emsp;</p>
                    <input type="number" v-model="adoptPets[selectPet].petAge">
                </li>
                <li>
                    <p>毛色：&emsp;&emsp;</p>
                    <input class="form-check-input" type="radio" name="color" id="黑色" value="黑色" v-model="adoptPets[selectPet].hairColor">
                    <label class="form-check-label">
                        黑色
                    </label>
                    <input class="form-check-input" type="radio" name="color" id="黃色" value="黃色" v-model="adoptPets[selectPet].hairColor">
                    <label class="form-check-label">
                        黃色
                    </label>
                    <input class="form-check-input" type="radio" name="color" id="白色" value="白色" v-model="adoptPets[selectPet].hairColor">
                    <label class="form-check-label">
                        白色
                    </label>
                    <input class="form-check-input" type="radio" name="color" id="花花系" value="花花系" v-model="adoptPets[selectPet].hairColor">
                    <label class="form-check-label">
                        花花系
                    </label>
                </li>
                <li>
                    <p>毛的長度：</p>
                    <input class="form-check-input" type="radio" name="length" id="長毛" value="長毛" v-model="adoptPets[selectPet].hairLong">
                    <label class="form-check-label">
                        長毛
                    </label>
                    <input class="form-check-input" type="radio" name="length" id="短毛" value="短毛" v-model="adoptPets[selectPet].hairLong">
                    <label class="form-check-label">
                        短毛
                    </label>
                </li>
                <li>
                    <p>性別：&emsp;&emsp;</p>
                    <input class="form-check-input" type="radio" name="gender" id="男生" value="男生" v-model="adoptPets[selectPet].petGender">
                    <label class="form-check-label">
                        男生
                    </label>
                    <input class="form-check-input" type="radio" name="gender" id="女生" value="女生" v-model="adoptPets[selectPet].petGender">
                    <label class="form-check-label">
                        女生
                    </label>
                </li>                
                <li>
                    <p>品種：&emsp;&emsp;</p>
                    <input type="text" v-model="adoptPets[selectPet].petType">
                </li>                
                <li>
                    <p>介紹：&emsp;&emsp;</p>
                    <textarea name="info" id="info" cols="50" rows="5" class="form-control introText" v-model="adoptPets[selectPet].intro"></textarea>
                </li>
                <li>
                    <button type="button" class="submitBtn" @click="back()">完成</button>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
    name: 'MadoptPet',
    components: {
        
    },
    data () {
        return {
            adoptPets: [
                {id: 0, name:'Alice', description:'', petSize:'', petAge:'2', hairColor:'', hairLong:'', petGender:'', petType:'', intro:'會咬人'},
                {id: 1, name:'Bob', description:'', petSize:'', petAge:'3', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 2, name:'Charlie', description:'', petSize:'', petAge:'1', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 3, name:'Daisy', description:'', petSize:'', petAge:'11', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 4, name:'Ella', description:'', petSize:'', petAge:'5', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 5, name:'Flora', description:'', petSize:'', petAge:'6', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 6, name:'George', description:'', petSize:'', petAge:'3', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 7, name:'Hank', description:'', petSize:'', petAge:'2', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 8, name:'Ivy', description:'', petSize:'', petAge:'4', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 9, name:'Jack', description:'', petSize:'', petAge:'4', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 10, name:'Kelly', description:'', petSize:'', petAge:'3', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 11, name:'Lisa', description:'', petSize:'', petAge:'2', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 12, name:'Mary', description:'', petSize:'', petAge:'2', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 13, name:'Nora', description:'', petSize:'', petAge:'3', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 14, name:'Olga', description:'', petSize:'', petAge:'8', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''}
            ],
            newName:'',
            newDescription:'', 
            newPetSize:'', 
            newPetAge:'',
            newHairColor:'',
            newHairLong:'',
            newPetGender:'',
            newPetType:'',
            newIntro:'',
            gomain:true,
            gocheck:false,
            gonew:false,
            goback:false,
            gomodify:false,
            selectPet: null,
        }
    },
    methods: {
      test(id) {
        this.gocheck=true
        this.goback=true
        this.gomain=false
        this.gonew=false
        this.gomodify=false
        this.selectPet = id
      },
      back() {
        this.gomain=true
        this.gocheck=false
        this.gonew=false
        this.goback=false
        this.gomodify=false
        this.newName = ''
        this.newDescription = ''
        this.newPetSize =''
        this.newPetAge =''
        this.newHairColor = ''
        this.newHairLong = ''
        this.newPetGender = ''
        this.newPetType = ''
        this.newIntro = ''
      },
      checkNew() {
        this.gomain=false
        this.gocheck=false
        this.goback=false
        this.gonew=true
        this.gomodify=false
      },
      checkModify() {        
        this.gocheck=false
        this.gomain=false
        this.goback=false
        this.gonew=false
        this.gomodify=true
      },
      addItem() {
      this.adoptPets.push({
        id: this.adoptPets.length,
        name: this.newName,
        description: this.newDescription,
        petSize: this.newPetSize,
        petAge: this.newPetAge,
        hairColor: this.newHairColor,
        hairLong: this.newHairLong,
        petGender: this.newPetGender,
        petType: this.newPetType,
        intro: this.newIntro
      });
      this.newName = ''
      this.newDescription = ''
      this.newPetSize =''
      this.newPetAge =''
      this.newHairColor = ''
      this.newHairLong = ''
      this.newPetGender = ''
      this.newPetType = ''
      this.newIntro = ''
      this.gomain=true
      this.gocheck=false
      this.gonew=false
      this.goback=false
      this.gomodify=false
    },
    }
}
</script>

<style>
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

.newForm {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 4fr 1fr;
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