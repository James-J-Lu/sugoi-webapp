Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@EthanHuang0404 
James-J-Lu
/
sugoi-webapp
Private
Code
Issues
Pull requests
Actions
Projects
Security
Insights
sugoi-webapp/src/components/managerComponent/MadoptPet.vue
@mengju06
mengju06 12-19-11:31
Latest commit 40b58f2 13 hours ago
 History
 2 contributors
@mengju06@James-J-Lu
423 lines (415 sloc)  18.8 KB

<template>
  <div class="MadoptPet">
      <p class="Ptop">待領養狗狗
        <input v-if="!gomain" @click="back(gocheck)" class="backButton" type="button" value="返回">
        <input v-if="gomain" @click="checkNew(gonew)" type="button" value="新增">
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
      <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">狗狗名字：</p>
                                </div>
                                <div class="col-sm-5">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">體型：</p>
                                </div>
                                <div class="col-sm-7">
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
                                <div class="col-sm-7">
                                  <input type="number" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">毛色：</p>
                                </div>
                                <div class="col-sm-7">
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
                                <div class="col-sm-7">
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
                                <div class="col-sm-7">
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
                                <div class="col-sm-7">
                                  <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                            <div class="form-group">
                                <div class="col-sm-3">
                                    <p class="mb-0">介紹：</p>
                                    <textarea name="info" id="info" cols="30" rows="10" class="form-control"></textarea>
                                </div>
                            </div>
                              <button class="w-30 btn btn-primary btn-lg" type="submit">確認</button>
                        </div>
                      </div>
      <!-- <div class="container py-5 h-100 Pform">
        <form class="needs-validation">
          <div class="row g-3">
            <div class="row mb-3">
              <label class="col-sm-4 col-form-label">狗狗名字：</label>
              <div class="col-sm-3">
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="my-1">
              <label for="username" class="form-label">體型：</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio">
                <label class="form-check-label" for="inlineRadio1">大型犬</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio">
                <label class="form-check-label" for="inlineRadio2">中型犬</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio">
                <label class="form-check-label" for="inlineRadio3">小型犬</label>
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-4 col-form-label">年齡：</label>
              <div class="col-sm-1">
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="my-1">
              <label for="username" class="form-label">毛色：</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio">
                <label class="form-check-label" for="inlineRadio1">黑色</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio">
                <label class="form-check-label" for="inlineRadio2">黃色系</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio">
                <label class="form-check-label" for="inlineRadio3">棕色系</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio">
                <label class="form-check-label" for="inlineRadio3">白色</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio">
                <label class="form-check-label" for="inlineRadio3">花白色</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio">
                <label class="form-check-label" for="inlineRadio3">其他</label>
              </div>
            </div>
            <div class="my-1">
              <label for="username" class="form-label">毛的長度：</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio">
                <label class="form-check-label" for="inlineRadio1">長毛</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio">
                <label class="form-check-label" for="inlineRadio2">短毛</label>
              </div>
            </div>
            <div class="my-1">
              <label for="username" class="form-label">性別：</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio">
                <label class="form-check-label" for="inlineRadio1">男生</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio">
                <label class="form-check-label" for="inlineRadio2">女生</label>
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-4 col-form-label">品種：</label>
              <div class="col-sm-3">
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label for="info">介紹：</label>
              <textarea name="info" id="info" cols="30" rows="10" class="form-control"></textarea>
            </div>
            <button class="w-100 btn btn-primary btn-lg" type="submit">確認</button>
          </div>
        </form>
      </div> -->
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
                {id: 0, name:'Alice', description:'', petSize:'', petAge:'', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 1, name:'Bob', description:'', petSize:'', petAge:'', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 2, name:'Charlie', description:'', petSize:'', petAge:'', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 3, name:'Daisy', description:'', petSize:'', petAge:'', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 4, name:'Ella', description:'', petSize:'', petAge:'', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 5, name:'Flora', description:'', petSize:'', petAge:'', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 6, name:'George', description:'', petSize:'', petAge:'', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 7, name:'Hank', description:'', petSize:'', petAge:'', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 8, name:'Ivy', description:'', petSize:'', petAge:'', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 9, name:'Jack', description:'', petSize:'', petAge:'', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 10, name:'Kelly', description:'', petSize:'', petAge:'', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 11, name:'Lisa', description:'', petSize:'', petAge:'', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 12, name:'Mary', description:'', petSize:'', petAge:'', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 13, name:'Nora', description:'', petSize:'', petAge:'', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''},
                {id: 14, name:'Olga', description:'', petSize:'', petAge:'', hairColor:'', hairLong:'', petGender:'', petType:'', intro:''}
            ],
            gomain:true,
            gocheck:false,
            gonew:false,
            goback:false,
            selectPet: null,
        }
    },
    methods: {
      test(id) {
        this.gocheck=true
        this.goback=true
        this.gomain=false
        this.gonew=false
        this.selectPet = id
      },
      back() {
        this.gomain=true
        this.gocheck=false
        this.gonew=false
        this.goback=false
      },
      checkNew() {
        this.gomain=false
        this.gocheck=false
        this.goback=false
        this.gonew=true
      },
      checkModify() {        
        this.gomodify=!this.gomodify
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
</style>
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
sugoi-webapp/MadoptPet.vue at meng · James-J-Lu/sugoi-webapp