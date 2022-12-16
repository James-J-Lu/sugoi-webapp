<template>
  <div class="MadoptPet">
      <p class="Ptop">待領養狗狗
        <input v-if="gocheck" @click="back(gocheck)" class="backButton" type="button" value="返回">
      </p>
      <div class="table-responsive" v-if="!gocheck">
        <table class="table table-striped table-sm tableType">
          <thead class="PtableHead">
            <tr>
              <th width="100px"><input class="form-check-input me-1" type="checkbox"></th>
              <th>狗狗編號</th>
              <th>狗狗名字</th>
              <th>說明</th>
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
                            <p class="text-muted">{{adoptPets[selectPet].id}}</p>
                            <h4>狗狗名字</h4>
                            <p class="text-muted">{{adoptPets[selectPet].name}}</p>
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
            gocheck:false,
            selectPet: null,
        }
    },
    methods: {
      test(id) {
        this.gocheck=!this.gocheck
        this.selectPet = id
      },
      back() {
        this.gocheck=!this.gocheck
      }
    }
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
</style>