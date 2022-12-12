<template>
  <div class="MadoptPet">
      <p class="Ptop">待領養狗狗</p>
      <div class="table-responsive" v-if="!gocheck">
        <table class="table table-striped table-sm">
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
        <button v-if="gocheck" @click="back(gocheck)">返回</button>
        <p>ID: {{ adoptPets[selectPet].id }}</p>
        <p>名字: {{ adoptPets[selectPet].name }}</p>
        <p>說明: {{ adoptPets[selectPet].description }}</p>
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
                {id: 0, name:'Alice', description:''},
                {id: 1, name:'Bob', description:''},
                {id: 2, name:'Charlie', description:''},
                {id: 3, name:'Daisy', description:''},
                {id: 4, name:'Ella', description:''},
                {id: 5, name:'Flora', description:''},
                {id: 6, name:'George', description:''},
                {id: 7, name:'Hank', description:''},
                {id: 8, name:'Ivy', description:''},
                {id: 9, name:'Jack', description:''},
                {id: 10, name:'Kelly', description:''},
                {id: 11, name:'Lisa', description:''},
                {id: 12, name:'Mary', description:''},
                {id: 13, name:'Nora', description:''},
                {id: 14, name:'Olga', description:''}
            ],
            gocheck:false,
            selectPet: null,
        }
    },
    methods: {
      test(id) {
        console.log(id)
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
</style>