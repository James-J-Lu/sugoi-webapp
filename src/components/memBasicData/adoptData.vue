<template>
    <div class="adoptData">
        <p id="title">領養資料</p><!--鈺倫負責的-->
        <div class="workspace">
            <div v-if="pop && visibility" class="alert alert-warning alert-dismissible fade show" role="alert"><!--更新成功提示-->
                <strong>{{ members }}您好：</strong> 領養資料已更新<br>{{now}}<!--儲存成功時間紀錄-->
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
                    v-on:click="popoff"></button>
            </div>
            <br>
            <ul class="dropdown-menu position-static d-grid gap-1 mx-0 shadow w-220px">

                <form class="row g-3">
                    <div class="first" v-if="visibility"><!--adoptdataoverview-->
                        <li>
                            <label><span>體型偏好：</span></label>
                            <input type="radio" id="s0" value="nosize" v-model="size" name="inlineRadioOptions0"
                                disabled>
                            <label for="one">沒有特別偏好</label>
                            <input type="radio" id="s1" value="big" v-model="size" name="inlineRadioOptions0" disabled>
                            <label for="two">大型犬</label>
                            <input type="radio" id="s2" value="medium" v-model="size" name="inlineRadioOptions0"
                                disabled>
                            <label for="three">中型犬</label>
                            <input type="radio" id="s3" value="small" v-model="size" name="inlineRadioOptions0"
                                disabled>
                            <label for="four">小型犬</label>
                        </li>
                        <li>
                            <label><span>年齡偏好：</span></label>
                            <input type="radio" id="a0" value="noage" v-model="age" name="inlineRadioOptions1" disabled>
                            <label for="one">沒有特別偏好</label>
                            <input type="radio" id="a1" value="below2" v-model="age" name="inlineRadioOptions1"
                                disabled>
                            <label for="two">2歲以下</label>
                            <input type="radio" id="a2" value="2to5" v-model="age" name="inlineRadioOptions1" disabled>
                            <label for="three">2～5歲</label>
                            <input type="radio" id="a3" value="above5" v-model="age" name="inlineRadioOptions1"
                                disabled>
                            <label for="four">5歲以上</label>
                        </li>
                        <li>
                            <label><span>毛色偏好：</span></label>
                            <input type="radio" id="c0" value="nocolor" v-model="color" name="inlineRadioOptions2"
                                disabled>
                            <label for="one">沒有特別偏好</label>
                            <input type="radio" id="c1" value="white" v-model="color" name="inlineRadioOptions2"
                                disabled>
                            <label for="two">白色</label>
                            <input type="radio" id="c2" value="black" v-model="color" name="inlineRadioOptions2"
                                disabled>
                            <label for="three">黑色</label>
                            <input type="radio" id="c3" value="yellow" v-model="color" name="inlineRadioOptions2"
                                disabled>
                            <label for="four">黃色</label>
                            <input type="radio" id="c4" value="multi" v-model="color" name="inlineRadioOptions2"
                                disabled>
                            <label for="five">花花色</label>
                        </li>
                        <li>
                            <label><span>毛髮偏好：</span></label>
                            <input type="radio" id="h0" value="nohair" v-model="hair" name="inlineRadioOptions3"
                                disabled>
                            <label for="one">沒有特別偏好</label>
                            <input type="radio" id="h1" value="long" v-model="hair" name="inlineRadioOptions3" disabled>
                            <label for="two">長毛</label>
                            <input type="radio" id="h2" value="short" v-model="hair" name="inlineRadioOptions3"
                                disabled>
                            <label for="three">短毛</label>
                        </li>
                        <li>
                            <label><span>性別偏好：</span></label>
                            <input type="radio" id="s0" value="nosexual" v-model="sexual" name="inlineRadioOptions4"
                                disabled>
                            <label for="one">沒有特別偏好</label>
                            <input type="radio" id="s1" value="boy" v-model="sexual" name="inlineRadioOptions4"
                                disabled>
                            <label for="two">男生</label>
                            <input type="radio" id="s2" value="girl" v-model="sexual" name="inlineRadioOptions4"
                                disabled>
                            <label for="three">女生</label>
                        </li>
                        <li>
                            <label><span>品種偏好：</span></label>
                            <input type="radio" id="b0" value="nobreed" v-model="breed" name="inlineRadioOptions5"
                                disabled>
                            <label for="one">沒有特別偏好</label>
                            <input type="radio" id="b1" value="pure" v-model="breed" name="inlineRadioOptions5"
                                disabled>
                            <label for="two">只限品種狗</label>
                        </li>

                        <div class="col-12">
                            <label for="background" class="form-label">簡述家庭環境：{{ background }}</label>
                        </div>
                        <li>
                            <button type="button" class="confirm" v-on:click="edit">編輯</button>
                        </li>
                    </div>
                    <div class="second" v-if="!visibility"><!--adoptdataedit-->
                        <li>
                            <label><span>體型偏好：</span></label>
                            <input type="radio" id="s0" value="nosize" v-model="size_t" name="inlineRadioOptions0">
                            <label for="one">沒有特別偏好</label>
                            <input type="radio" id="s1" value="big" v-model="size_t" name="inlineRadioOptions0">
                            <label for="two">大型犬</label>
                            <input type="radio" id="s2" value="medium" v-model="size_t" name="inlineRadioOptions0">
                            <label for="three">中型犬</label>
                            <input type="radio" id="s3" value="small" v-model="size_t" name="inlineRadioOptions0">
                            <label for="four">小型犬</label>
                        </li>
                        <li>
                            <label><span>年齡偏好：</span></label>
                            <input type="radio" id="a0" value="noage" v-model="age_t" name="inlineRadioOptions1">
                            <label for="one">沒有特別偏好</label>
                            <input type="radio" id="a1" value="below2" v-model="age_t" name="inlineRadioOptions1">
                            <label for="two">2歲以下</label>
                            <input type="radio" id="a2" value="2to5" v-model="age_t" name="inlineRadioOptions1">
                            <label for="three">2～5歲</label>
                            <input type="radio" id="a3" value="above5" v-model="age_t" name="inlineRadioOptions1">
                            <label for="four">5歲以上</label>
                        </li>
                        <li>
                            <label><span>毛色偏好：</span></label>
                            <input type="radio" id="c0" value="nocolor" v-model="color_t" name="inlineRadioOptions2">
                            <label for="one">沒有特別偏好</label>
                            <input type="radio" id="c1" value="white" v-model="color_t" name="inlineRadioOptions2">
                            <label for="two">白色</label>
                            <input type="radio" id="c2" value="black" v-model="color_t" name="inlineRadioOptions2">
                            <label for="three">黑色</label>
                            <input type="radio" id="c3" value="yellow" v-model="color_t" name="inlineRadioOptions2">
                            <label for="four">黃色</label>
                            <input type="radio" id="c4" value="multi" v-model="color_t" name="inlineRadioOptions2">
                            <label for="five">花花色</label>
                        </li>
                        <li>
                            <label><span>毛髮偏好：</span></label>
                            <input type="radio" id="h0" value="nohair" v-model="hair_t" name="inlineRadioOptions3">
                            <label for="one">沒有特別偏好</label>
                            <input type="radio" id="h1" value="long" v-model="hair_t" name="inlineRadioOptions3">
                            <label for="two">長毛</label>
                            <input type="radio" id="h2" value="short" v-model="hair_t" name="inlineRadioOptions3">
                            <label for="three">短毛</label>
                        </li>
                        <li>
                            <label><span>性別偏好：</span></label>
                            <input type="radio" id="s0" value="nosexual" v-model="sexual_t" name="inlineRadioOptions4">
                            <label for="one">沒有特別偏好</label>
                            <input type="radio" id="s1" value="boy" v-model="sexual_t" name="inlineRadioOptions4">
                            <label for="two">男生</label>
                            <input type="radio" id="s2" value="girl" v-model="sexual_t" name="inlineRadioOptions4">
                            <label for="three">女生</label>
                        </li>
                        <li>
                            <label><span>品種偏好：</span></label>
                            <input type="radio" id="b0" value="nobreed" v-model="breed_t" name="inlineRadioOptions5">
                            <label for="one">沒有特別偏好</label>
                            <input type="radio" id="b1" value="pure" v-model="breed_t" name="inlineRadioOptions5">
                            <label for="two">只限品種狗</label>
                        </li>

                        <div class="col-12">
                            <label for="background" class="form-label">簡述家庭環境：</label>
                            <input style="background-color:#F9ECBE, height: 110px;" type="text" class="form-control" id="background"
                                v-model="background_t" placeholder="(如空間大小，有無院子等)">
                        </div>
                        <br>
                        <li>
                            <button type="button" class="cancel" v-on:click="cancel">取消更改</button>
                            <button type="button" class="confirm"
                                v-on:click="modify(size_t, age_t, color_t, hair_t, sexual_t, breed_t, background_t)">確認更改</button>
                        </li>

                    </div>


                </form>

            </ul>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'adoptData',
    components: {
    },
    data() {
        return {
            size: "big",
            size_t: null,
            age: "2to5",
            age_t: null,
            color: "white",
            color_t: null,
            hair: "short",
            hair_t: null,
            sexual: "boy",
            sexual_t: null,
            breed: "pure",
            breed_t: null,
            background: "我家有水池",
            background_t: null,
            visibility: true,
            pop: false,
            now:null
        }
    },
    methods: {
        cancel() {
            this.visibility = true
            this.pop = false
        },
        edit() {
            this.visibility = false
            this.size_t = this.size
            this.age_t = this.age
            this.color_t = this.color
            this.hair_t = this.hair
            this.sexual_t = this.sexual
            this.breed_t = this.breed
            this.background_t = this.background
        },
        modify(size_t, age_t, color_t, hair_t, sexual_t, breed_t, background_t) {
            this.size = size_t
            this.age = age_t
            this.color = color_t
            this.hair = hair_t
            this.sexual = sexual_t
            this.breed = breed_t
            this.background = background_t
            this.visibility = true
            this.pop = true
            this.now=new Date()

        },
        popoff() {
            this.pop = false
        }
    }

}
</script>
    
<style scoped>
.first {
    font-size: 35px;
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
    justify-content: start;
}

.alert alert-warning alert-dismissible fade show {
    border-radius: 20px;
}

.workspace {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 60%;
    left: 50%;
    width: 65%;
    height: 70%;
    font-size: 30px;
}

.form-check {
    font-size: 30px;
}

.form-control {
    font-size: 35px;
}

.cancel {
    float: left;
    color: white;
    background: #9A9DA2;
    border-radius: 20px;
    font-size: 40px;
}

.confirm {
    font-family: 'Iansui094-Regular';
    float: right;
    color: white;
    background: #114ABA;
    border-radius: 20px;
    font-size: 40px;
}
</style>