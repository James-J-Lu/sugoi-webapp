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
              <th>狗狗編號</th>
              <th>狗狗名字</th>
              <th>說明</th>
            </tr>
          </thead>
          <tbody class="PtableBody">
            <tr v-for="(adoptPet, index) in adoptPets" :key="adoptPet.adoPetId" @click="test(index)">
              <td>{{adoptPet.adoPetId}}</td>
              <td>{{adoptPet.adoPetName}}</td>
              <td>{{adoptPet.adoPetInfo}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    <div v-if="gocheck">
        <div class="card mb-4">
        <div class="card-body">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col col-lg-6 mb-4 mb-lg-0">
                <div class="card mb-3" style="border-radius: .5rem;">
                  <div class="row g-0">
                    <div class="col-md-4 gradient-custom text-center text-white"
                      style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="Avatar" class="img-fluid my-5" style="width: 80px;" />
                      <h5>Marie Horwitz</h5>
                      <p>Web Designer</p>
                      <i class="far fa-edit mb-5"></i>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body p-4">
                        <div class="row pt-1">
                          <div class="col-6 mb-3">
                            <h4>狗狗編號</h4>
                            <p class="text-muted">{{adoptPets[selectPet].adoPetId}}</p>
                            <h4>狗狗名字</h4>
                            <p class="text-muted">{{adoptPets[selectPet].adoPetName}}</p>
                          </div>
                        </div>
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
              <p class="text-muted mb-0">{{ adoptPets[selectPet].adoPetFigure }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">年齡</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ adoptPets[selectPet].adoPetAge }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">毛色</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ adoptPets[selectPet].adoPetColor }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">毛的長度</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ adoptPets[selectPet].adoPetFur }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">性別</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ adoptPets[selectPet].adoPetGender }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">品種</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ adoptPets[selectPet].adoPetBreed }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">介紹</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ adoptPets[selectPet].adoPetInfo }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="table-responsive" v-if="gonew">
      <div class="container py-5 h-100 Pform">
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
              <textarea adoPetName="info" id="info" cols="30" rows="10" class="form-control"></textarea>
            </div>
            <button class="w-100 btn btn-primary btn-lg" type="submit">確認</button>
          </div>
        </form>
      </div>
      </div>
  </div>
</template>

<script>
import AdoptionPetDataService from '@/services/AdoptionPetDataService'

    export default {
    adoPetName: 'MadoptPet',
    components: {
        
    },
    data () {
        return {
            adoptPets: [],
            gomain:true,
            gocheck:false,
            gonew:false,
            goback:false,
            selectPet: null,
        }
    },
    methods: {
      test(index) {
        this.gocheck=true
        this.goback=true
        this.gomain=false
        this.gonew=false
        this.selectPet = index
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
      },
      
      getApotionPet() {
        AdoptionPetDataService.getAll()
          .then(response => {
            console.log(response.data)
            this.adoptPets = response.data
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.getApotionPet()
    },
}
</script>

<style>
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