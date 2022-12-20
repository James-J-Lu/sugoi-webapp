<template>
  <div class="MmemberData">
    <!-- 最上面的row -->
    <p class="Mtop">會員資料表
      <input v-if="gocheck" @click="back(gocheck)" class="backButton" type="button" value="返回">
    </p>
    <!-- 會員全部資料 -->
    <div class="table-responsive" v-if="!gocheck">
      <table class="table table-striped table-sm tableType" >
        <thead class="MtableHead">
          <tr>
            <th>會員ID</th>
            <th>帳號</th>
            <th>姓名</th>
          </tr>
        </thead>
        <tbody class="MtableBody">
          <tr v-for="(member, index) in members" :key="member.memberId" @click="test(index)">
            <td>{{member.memberId}}</td>
            <td>{{member.memberAccount}}</td>
            <td>{{member.memberName}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 會員詳細資料 -->
        <div class="card-body" v-if="gocheck">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col col-lg-6 mb-4 mb-lg-0">
                <div class="card mb-3" style="border-radius: .5rem;">
                    <div class="col-md-8">
                      <div class="card-body p-4">
                        <div class="row pt-1">
                          <div class="col-6 mb-3">
                            <h4>會員編號</h4>
                            <p class="text-muted">{{members[selectMember].memberId}}</p>
                            <h4>會員帳號</h4>
                            <p class="text-muted">{{members[selectMember].memberAccount}}</p>
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
              <p class="mb-0">姓名</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ members[selectMember].memberName }}</p>
            </div>
          </div>
          <hr>

          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">性別</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ gender }}</p>
            </div>
          </div>
          <hr>

          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Email</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ members[selectMember].memberEmail }}</p>
            </div>
          </div>
          <hr>

          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">生日</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ members[selectMember].memberBirth }}</p>
            </div>
          </div>
          <hr>

          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">電話</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ members[selectMember].memberTel }}</p>
            </div>
          </div>
          <hr>

          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">手機</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ members[selectMember].memberPhone }}</p>
            </div>
          </div>
          <hr>

          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">地址</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ members[selectMember].memberAddress }}</p>
            </div>
          </div>
          
        </div>
      </div>
</template>

<script>
import MemberDataService from '@/services/MemberDataService'

export default {
  name: 'MmemberData',
  props: {
    memberStatus: Object,
  },
  components: {
      
  },
  data () {
      return {
          members: [],
          gender: null,
          gocheck:false,
          selectMember: null,
      }
  },
  methods: {
    test(index) {
      this.gocheck=!this.gocheck
      this.selectMember = index
      if(this.members[index].memberGender == 0)
        this.gender = '男'
      else if(this.members[index].memberGender == 1)
        this.gender = '女'
    },
    back() {
      this.gocheck=!this.gocheck
    },
    getAllmember() {
      MemberDataService.getAll()
        .then(response => {
          this.members = response.data
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.getAllmember()
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