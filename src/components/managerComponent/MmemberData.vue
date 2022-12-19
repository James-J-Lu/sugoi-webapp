<template>
  <div class="MmemberData">
    <p class="Mtop">會員資料表
      <input v-if="gocheck" @click="back(gocheck)" class="backButton" type="button" value="返回">
    </p>
    <div class="table-responsive" v-if="!gocheck">
      <table class="table table-striped table-sm tableType" >
        <thead class="MtableHead">
          <tr>
            <th width="100px"><input class="form-check-input me-1" type="checkbox"></th>
            <th style="width:20%">會員ID</th>
            <th>帳號</th>
            <th>姓名</th>
          </tr>
        </thead>
        <tbody class="MtableBody">
          <tr v-for="member in members" :key="member.id" @click="test(member.id)">
            <th width="100px"><input class="form-check-input me-1" type="checkbox"></th>
            <td>{{member.id}}</td>
            <td>{{member.account}}</td>
            <td>{{member.name}}</td>
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
                        <p>會員編號</p>
                        <p class="text-muted">{{members[selectMember].id}}</p>
                        <p>會員帳號</p>
                        <p class="text-muted">{{members[selectMember].account}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>              
          </div>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">姓名</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ members[selectMember].name }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">性別</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ members[selectMember].gender }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Ｅmail</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ members[selectMember].email }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">生日</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ members[selectMember].birth }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">電話</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ members[selectMember].tele }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">手機</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ members[selectMember].phone }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">地址</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ members[selectMember].address }}</p>
            </div>
          </div>
        </div>
      </div>
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
                {id: 0, account:'0001', name:'Alice', gender:'', email:'', birth:'', tele:'', phone:'', address:''},
                {id: 1, account:'0002', name:'Bob', gender:'', email:'', birth:'', tele:'', phone:'', address:''},
                {id: 2, account:'0003', name:'Charlie', gender:'', email:'', birth:'', tele:'', phone:'', address:''},
                {id: 3, account:'0004', name:'Daisy', gender:'', email:'', birth:'', tele:'', phone:'', address:''},
                {id: 4, account:'0005', name:'Ella', gender:'', email:'', birth:'', tele:'', phone:'', address:''},
                {id: 5, account:'0006', name:'Flora', gender:'', email:'', birth:'', tele:'', phone:'', address:''},
                {id: 6, account:'0007', name:'George', gender:'', email:'', birth:'', tele:'', phone:'', address:''},
                {id: 7, account:'0008', name:'Hank', gender:'', email:'', birth:'', tele:'', phone:'', address:''},
                {id: 8, account:'0009', name:'Ivy', gender:'', email:'', birth:'', tele:'', phone:'', address:''},
                {id: 9, account:'0010', name:'Jack', gender:'', email:'', birth:'', tele:'', phone:'', address:''},
                {id: 10, account:'0011', name:'Kelly', gender:'', email:'', birth:'', tele:'', phone:'', address:''},
                {id: 11, account:'0012', name:'Lisa', gender:'', email:'', birth:'', tele:'', phone:'', address:''},
                {id: 12, account:'0013', name:'Mary', gender:'', email:'', birth:'', tele:'', phone:'', address:''},
                {id: 13, account:'0014', name:'Nora', gender:'', email:'', birth:'', tele:'', phone:'', address:''},
                {id: 14, account:'0015', name:'Olga', gender:'', email:'', birth:'', tele:'', phone:'', address:''}
            ],
            gocheck:false,
            selectMember: null,
        }
    },
    methods: {
      test(id) {
        this.gocheck=!this.gocheck
        this.selectMember = id
      },
      back() {
        this.gocheck=!this.gocheck
      }
    }
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