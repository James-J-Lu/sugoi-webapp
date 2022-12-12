<template>
    <div class="MmemberData">
      <p class="Mtop">會員資料表</p>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead class="MtableHead">
            <tr>
              <th width="100px"><input class="form-check-input me-1" type="checkbox"></th>
              <th>會員ID</th>
              <th>帳號</th>
              <th>姓名</th>
            </tr>
          </thead>
          <tbody class="MtableBody">
            <tr v-for="member in members" :key="member.id">
              <th width="100px"><input class="form-check-input me-1" type="checkbox"></th>
              <td>{{member.id}}</td>
              <td>{{member.account}}</td>
              <td>{{member.name}}</td>
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
                {id: 0, account:'0001', name:'Alice'},
                {id: 1, account:'0002', name:'Bob'},
                {id: 2, account:'0003', name:'Charlie'},
                {id: 3, account:'0004', name:'Daisy'},
                {id: 4, account:'0005', name:'Ella'},
                {id: 5, account:'0006', name:'Flora'},
                {id: 6, account:'0007', name:'George'},
                {id: 7, account:'0008', name:'Hank'},
                {id: 8, account:'0009', name:'Ivy'},
                {id: 9, account:'0010', name:'Jack'},
                {id: 10, account:'0011', name:'Kelly'},
                {id: 11, account:'0012', name:'Lisa'},
                {id: 12, account:'0013', name:'Mary'},
                {id: 13, account:'0014', name:'Nora'},
                {id: 14, account:'0015', name:'Olga'}
            ],
        }
    },

}
</script>

<style>
.Mtop {
    text-align: left;
}

.MmemberData {
    font-size: 40px;
}

.MtableHead {
    background-color:rgb(218,217,217);
}

.MtableBody {
    background-color:white;
    font-size: 28px;
}
</style>