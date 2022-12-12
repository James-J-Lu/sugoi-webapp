<template>
    <div class="MadoptPet">
      <p class="Ptop">待領養狗狗</p>
      <div class="table-responsive">
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
            <tr v-for="member in members" :key="member.id">
              <th width="100px"><input class="form-check-input me-1" type="checkbox"></th>
              <td>{{member.id}}</td>
              <td>{{member.name}}</td>
              <td>{{member.description}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        
      </div>
    </div>
</template>

<script>
    export default {
    name: 'MmemberData',
    components: {
        
    },
    data () {
        return {
            members: [
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
        }
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
</style>