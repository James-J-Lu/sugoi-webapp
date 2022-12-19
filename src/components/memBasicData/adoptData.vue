<template>
    <div>
        <p id="title">領養資料</p><!--鈺倫負責的-->
        <div class="workspace">
            <div v-if="pop && visibility" class="alert alert-warning alert-dismissible fade show" role="alert">
                <!--更新成功提示-->
                <strong>{{ members }}您好：</strong> 領養資料已更新<br>{{ now }}<!--儲存成功時間紀錄-->
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
                    v-on:click="popoff"></button>
            </div>
            <br>
            <ul class="dropdown-menu position-static d-grid gap-1 mx-0 shadow w-220px">
                <form class="row g-3">
                    <div class="first" v-if="visibility"><!--adoptdataoverview-->
                        <li>
                            <label><span>體型偏好：</span></label>
                            <input type="radio" id="s0" value=0 v-model="originData.preferFigue" name="inlineRadioOptions0"
                                disabled>
                            <label for="one">0-沒有特別偏好</label>
                            <input type="radio" id="s1" value=1 v-model="originData.preferFigue" name="inlineRadioOptions0" disabled>
                            <label for="two">1-大型犬</label>
                            <input type="radio" id="s2" value=2 v-model="originData.preferFigue" name="inlineRadioOptions0"
                                disabled>
                            <label for="three">2-中型犬</label>
                            <input type="radio" id="s3" value=3 v-model="originData.preferFigue" name="inlineRadioOptions0"
                                disabled>
                            <label for="four">3-小型犬</label>
                        </li>
                        <li>
                            <label><span>年齡偏好：</span></label>
                            <input type="radio" id="a0" value=0 v-model="originData.preferAge" name="inlineRadioOptions1" disabled>
                            <label for="one">0-沒有特別偏好</label>
                            <input type="radio" id="a1" value=1 v-model="originData.preferAge" name="inlineRadioOptions1"
                                disabled>
                            <label for="two">1-2歲以下</label>
                            <input type="radio" id="a2" value=2 v-model="originData.preferAge" name="inlineRadioOptions1" disabled>
                            <label for="three">2-2～5歲</label>
                            <input type="radio" id="a3" value=3 v-model="originData.preferAge" name="inlineRadioOptions1" disabled>
                            <label for="four">3-5歲以上</label>
                        </li>
                        <li>
                            <label><span>毛色偏好：</span></label>
                            <input type="radio" id="c0" value=0 v-model="originData.preferColor" name="inlineRadioOptions2"
                                disabled>
                            <label for="one">0-沒有特別偏好</label>
                            <input type="radio" id="c1" value=1 v-model="originData.preferColor" name="inlineRadioOptions2"
                                disabled>
                            <label for="two">1-白色</label>
                            <input type="radio" id="c2" value=2 v-model="originData.preferColor" name="inlineRadioOptions2"
                                disabled>
                            <label for="three">2-黑色</label>
                            <input type="radio" id="c3" value=3 v-model="originData.preferColor" name="inlineRadioOptions2"
                                disabled>
                            <label for="four">3-黃色</label>
                            <input type="radio" id="c4" value=4 v-model="originData.preferColor" name="inlineRadioOptions2"
                                disabled>
                            <label for="five">4-花花色</label>
                        </li>
                        <li>
                            <label><span>毛髮偏好：</span></label>
                            <input type="radio" id="h0" value=0 v-model="originData.preferFur" name="inlineRadioOptions3"
                                disabled>
                            <label for="one">0-沒有特別偏好</label>
                            <input type="radio" id="h1" value=1 v-model="originData.preferFur" name="inlineRadioOptions3" disabled>
                            <label for="two">1-長毛</label>
                            <input type="radio" id="h2" value=2 v-model="originData.preferFur" name="inlineRadioOptions3"
                                disabled>
                            <label for="three">2-短毛</label>
                        </li>
                        <li>
                            <label><span>性別偏好：</span></label>
                            <input type="radio" id="s0" value=0 v-model="originData.preferGender" name="inlineRadioOptions4"
                                disabled>
                            <label for="one">0-沒有特別偏好</label>
                            <input type="radio" id="s1" value=1 v-model="originData.preferGender" name="inlineRadioOptions4"
                                disabled>
                            <label for="two">1-男生</label>
                            <input type="radio" id="s2" value=2 v-model="originData.preferGender" name="inlineRadioOptions4"
                                disabled>
                            <label for="three">2-女生</label>
                        </li>
                        <li>
                            <label><span>品種偏好：</span></label>
                            <input type="radio" id="b0" value=0 v-model="originData.preferBreed" name="inlineRadioOptions5"
                                disabled>
                            <label for="one">0-沒有特別偏好</label>
                            <input type="radio" id="b1" value=1 v-model="originData.preferBreed" name="inlineRadioOptions5"
                                disabled>
                            <label for="two">1-只限品種狗</label>
                        </li>

                        <div class="col-12">
                            <label for="background" class="form-label">簡述家庭環境：{{ originData.space }}</label>
                        </div><br><br><br>
                        <li>
                            <button type="button" class="edit" v-on:click="edit">編輯</button>
                        </li>
                    </div>

                    <!-- 按編輯才會顯示 -->
                    <div class="second" v-if="!visibility">
                        <li>
                            <label><span>體型偏好：</span></label>
                            <input type="radio" id="s0" value=0 v-model="editData.preferFigue" name="inlineRadioOptions0">
                            <label for="one">0-沒有特別偏好</label>
                            <input type="radio" id="s1" value=1 v-model="editData.preferFigue" name="inlineRadioOptions0">
                            <label for="two">1-大型犬</label>
                            <input type="radio" id="s2" value=2 v-model="editData.preferFigue" name="inlineRadioOptions0">
                            <label for="three">2-中型犬</label>
                            <input type="radio" id="s3" value=3 v-model="editData.preferFigue" name="inlineRadioOptions0">
                            <label for="four">3-小型犬</label>
                        </li>
                        <li>
                            <label><span>年齡偏好：</span></label>
                            <input type="radio" id="a0" value=0 v-model="editData.preferAge" name="inlineRadioOptions1">
                            <label for="one">0-沒有特別偏好</label>
                            <input type="radio" id="a1" value=1 v-model="editData.preferAge" name="inlineRadioOptions1">
                            <label for="two">1-2歲以下</label>
                            <input type="radio" id="a2" value=2 v-model="editData.preferAge" name="inlineRadioOptions1">
                            <label for="three">2-2～5歲</label>
                            <input type="radio" id="a3" value=3 v-model="editData.preferAge" name="inlineRadioOptions1">
                            <label for="four">3-5歲以上</label>
                        </li>
                        <li>
                            <label><span>毛色偏好：</span></label>
                            <input type="radio" id="c0" value=0 v-model="editData.preferColor" name="inlineRadioOptions2">
                            <label for="one">0-沒有特別偏好</label>
                            <input type="radio" id="c1" value=1 v-model="editData.preferColor" name="inlineRadioOptions2">
                            <label for="two">1-白色</label>
                            <input type="radio" id="c2" value=2 v-model="editData.preferColor" name="inlineRadioOptions2">
                            <label for="three">2-黑色</label>
                            <input type="radio" id="c3" value=3 v-model="editData.preferColor" name="inlineRadioOptions2">
                            <label for="four">3-黃色</label>
                            <input type="radio" id="c4" value=4 v-model="editData.preferColor" name="inlineRadioOptions2">
                            <label for="five">4-花花色</label>
                        </li>
                        <li>
                            <label><span>長短毛偏好：</span></label>
                            <input type="radio" id="h0" value=0 v-model="editData.preferFur" name="inlineRadioOptions3">
                            <label for="one">0-沒有特別偏好</label>
                            <input type="radio" id="h1" value=1 v-model="editData.preferFur" name="inlineRadioOptions3">
                            <label for="two">1-長毛</label>
                            <input type="radio" id="h2" value=2 v-model="editData.preferFur" name="inlineRadioOptions3">
                            <label for="three">2-短毛</label>
                        </li>
                        <li>
                            <label><span>性別偏好：</span></label>
                            <input type="radio" id="s0" value=0 v-model="editData.preferGender" name="inlineRadioOptions4">
                            <label for="one">0-沒有特別偏好</label>
                            <input type="radio" id="s1" value=1 v-model="editData.preferGender" name="inlineRadioOptions4">
                            <label for="two">1-男生</label>
                            <input type="radio" id="s2" value=2 v-model="editData.preferGender" name="inlineRadioOptions4">
                            <label for="three">2-女生</label>
                        </li>
                        <li>
                            <label><span>品種偏好：</span></label>
                            <input type="radio" id="b0" value=0 v-model="editData.preferBreed" name="inlineRadioOptions5">
                            <label for="one">0-沒有特別偏好</label>
                            <input type="radio" id="b1" value=1 v-model="editData.preferBreed" name="inlineRadioOptions5">
                            <label for="two">1-只限品種狗</label>
                        </li>

                        <div class="col-12">
                            <label for="background" class="form-label">簡述家庭環境：</label>
                            <input style="background-color:#F9ECBE" type="text" class="form-control" id="background"
                                v-model="editData.space" placeholder="(如空間大小，有無院子等)">
                        </div>
                        <br>
                        <button type="button" class="cancel" v-on:click="cancel">取消更改</button><!--點了cancel回到overview-->
                        <button type="button" class="confirm"
                            @click="modify()">確認更改</button>
                        <!--點了confirm存入資料庫-->

                    </div>
                </form>

            </ul>
        </div>
    </div>
</template>
    
<script>
import AdoptionDataService from '@/services/AdoptionDataService'

export default {
    name: 'adoptData',
    props: {
        memberStatus: Object,
    },
    components: {
    },
    data() {
        return {
            visibility: true,//是否為overview，true為overview
            pop: false,//是否顯示更改成功資訊
            now: null,//現在時間
            originData: {},
            editData: {},
        }
    },
    methods: {
        cancel() {
            this.visibility = true
            this.pop = false
        },

        edit() {
            this.visibility = false
            this.editData = this.originData
        },

        modify() {
            //轉成int
            //從adopt寫入領養資料 成功就將下列更新
            AdoptionDataService.update(this.memberStatus.memberId, this.editData)
                .then(response => {
                    this.originData.preferFigue = this.editData.preferFigue
                    this.originData.preferAge = this.editData.preferAge
                    this.originData.preferColor = this.editData.preferColor
                    this.originData.preferFur = this.editData.preferFur
                    this.originData.preferGender = this.editData.preferGender
                    this.originData.preferBreed = this.editData.preferBreed
                    this.originData.space = this.editData.space
                    this.visibility = true
                    this.pop = true
                    this.now = new Date()
                })
                .catch(e => {
                    console.log(e);
                });
        },

        popoff() {
            this.pop = false//關閉顯示更改成功資訊
        },

        getMemberadoption() {
            AdoptionDataService.findByMID(this.memberStatus.id)
                .then(response => {
                    this.originData = response.data[0]
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.getMemberadoption()
    }
}
</script>
    
<style scoped>
.first {
    font-size: 30px;
}

.second {
    font-size: 35px;
}

.workspace ul {
    font-size: 25px;
    display: block;
    height: 100%;
    background-color: #F9ECBE;
    border-radius: 40px;
    padding: 2rem !important;
    --bs-dropdown-border-color: none;
    --bs-dropdown-border-radius: none;
}

.workspace li p {
    font-size: 30px;
    color: black !important;
    background-color: #F9ECBE !important;
    display: flex;
    align-items: center !important;
    height: 100%;
}

p {
    color: black;
}

#title {
    font-size: 50px;
    font-weight: bold;
    padding-left: 42%;
    display: flex;
    justify-content: flex-start;
}

.alert alert-warning alert-dismissible fade show {
    border-radius: 20px;
}

.workspace {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 58%;
    left: 50%;
    width: 65%;
    height: 70%;
    font-size: 30px;
}

.form-check {
    font-size: 25px;
}

.form-control {
    font-size: 25px;
}

.cancel {
    float: left;
    color: white;
    background: #9A9DA2;
    border-radius: 20px;
    font-size: 35px;
}

.confirm {
    float: right;
    color: white;
    background: #114ABA;
    border-radius: 20px;
    font-size: 35px;
}

.edit {
    float: right;
    color: white;
    background: #114ABA;
    border-radius: 20px;
    font-size: 40px;
}
</style>