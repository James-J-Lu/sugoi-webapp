<template>
  <div class="MadoptPet">
      <p class="Ptop">待領養狗狗
        <input v-if="!gomain" @click="back(gocheck)" class="backButton" type="button" value="返回">
        <input v-if="gomain" @click="checkNew(gonew)" type="button" value="新增">
        <input v-if="gocheck" @click="checkModify(gomodify)" type="button" value="修改">
        <!-- <input v-if="gomodify" @click="SubmitEvent" type="button" value="確認"> -->
      </p>
      <div class="table-responsive" v-if="gomain">
        <table class="table table-striped table-sm tableType">
          <thead class="PtableHead">
            <tr>
              <th width="100px"><input class="form-check-input me-1" type="checkbox"></th>
              <th>狗狗編號</th>
              <th>狗狗名字</th>
              <th style="width:50%">說明</th>
            </tr>
          </thead>
          <tbody class="PtableBody">
            <tr v-for="adoptPet in adoptPets" :key="adoptPet.id" @click="test(adoptPet.id)">
              <th width="100px"><input class="form-check-input me-1" type="checkbox"></th>
              <td>{{adoptPet.id}}</td>
              <td>{{adoptPet.name}}</td>
              <td>{{adoptPet.description}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    <div v-if="gocheck">
        <div class="card">
        <div class="card-body">
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
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">體型</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ adoptPets[selectPet].petSize }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">年齡</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ adoptPets[selectPet].petAge }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">毛色</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ adoptPets[selectPet].hairColor }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">毛的長度</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ adoptPets[selectPet].hairLong }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">性別</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ adoptPets[selectPet].petGender }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">品種</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ adoptPets[selectPet].petType }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">介紹</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ adoptPets[selectPet].intro }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="table-responsive" v-if="gonew">
      <div class="card">
      <div class="card-body">
        <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">狗狗名字：</p>
            </div>
            <div class="col-sm-4">
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">體型：</p>
            </div>
            <div class="col-sm-9">
              <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions">
              <label class="form-check-label" for="inlineRadio1">大型犬</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions">
              <label class="form-check-label" for="inlineRadio2">中型犬</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions">
              <label class="form-check-label" for="inlineRadio3">小型犬</label>
            </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">年齡：</p>
            </div>
            <div class="col-sm-3">
              <input type="number" class="form-control">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">毛色：</p>
            </div>
            <div class="col-sm-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio1">黑色</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio2">黃色系</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio3">花花色</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio3">白色</label>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">毛的長度：</p>
            </div>
            <div class="col-sm-4">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio1">長毛</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio2">短毛</label>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">性別：</p>
            </div>
            <div class="col-sm-4">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio1">男生</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio2">女生</label>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">品種：</p>
            </div>
            <div class="col-sm-4">
              <input type="text" class="form-control">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">介紹：</p>
            </div>
            <div class="col-sm-9">
                <textarea name="info" id="info" cols="50" rows="5" class="form-control introText"></textarea>
            </div>
        
          <button class="w-30 btn btn-primary btn-lg" type="submit">確認</button>
          </div>
    </div>
  </div>
      </div>
    <div class="table-responsive" v-if="gomodify">
      <div class="card">
      <div class="card-body">
        <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">狗狗名字：</p>
            </div>
            <div class="col-sm-4">
              <input type="text" class="form-control inputDisplay" v-model="adoptPets[selectPet].name">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">體型：</p>
            </div>
            <div class="col-sm-9">
              <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions">
              <label class="form-check-label" for="inlineRadio1">大型犬</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions">
              <label class="form-check-label" for="inlineRadio2">中型犬</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions">
              <label class="form-check-label" for="inlineRadio3">小型犬</label>
            </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">年齡：</p>
            </div>
            <div class="col-sm-3">
              <input type="number" class="form-control inputDisplay" v-model="adoptPets[selectPet].petAge">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">毛色：</p>
            </div>
            <div class="col-sm-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio1">黑色</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio2">黃色系</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio3">花花色</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio3">白色</label>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">毛的長度：</p>
            </div>
            <div class="col-sm-4">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio1">長毛</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio2">短毛</label>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">性別：</p>
            </div>
            <div class="col-sm-4">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio1">男生</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions">
                <label class="form-check-label" for="inlineRadio2">女生</label>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">品種：</p>
            </div>
            <div class="col-sm-4">
              <input type="text" class="form-control inputDisplay" v-model="adoptPets[selectPet].petType">
            </div>
        </div>
          <div class="row">
            <div class="col-sm-3">
                <p class="mb-0">介紹：</p>
            </div>
            <div class="col-sm-9">
                <textarea name="info" id="info" cols="50" rows="5" class="form-control introText" v-model="adoptPets[selectPet].intro"></textarea>
            </div>
        
          <button class="w-30 btn btn-primary btn-lg" type="submit">確認</button>
          </div>
    </div>
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
      }
    }
}
</script>

<style>
.test1 {
  margin: 0 !important;
}
.MadoptPet {
  text-align: left;
}
.Ptop {
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
}

input[type=button] {
  background-color: #bdbdbd;
  border: none;
  color: black;
  padding: 10px;
  float:right; 
  font-size: 20px;
  margin: 4px 2px;
}
.Pform {
  text-align: left;
  font-size: 28px;
}
.introText {
  font-size: 32px;
}
</style>