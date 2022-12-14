<template>
    <div class="adoptData">
        <p id="title">領養資料</p>
        <div class="workspace">
            <ul class="dropdown-menu position-static d-grid gap-1 mx-0 shadow w-220px">
                <form class="row g-3">
                    <li>
                        <label><span>體型偏好：</span></label>
                        <input type="radio" id="s0" value="nosize" v-model="size">
                        <label for="one">沒有特別偏好</label>
                        <input type="radio" id="s1" value="big" v-model="size">
                        <label for="two">大型犬</label>
                        <input type="radio" id="s2" value="medium" v-model="size">
                        <label for="two">中型犬</label>
                        <input type="radio" id="s3" value="small" v-model="size">
                        <label for="two">小型犬</label>
                    </li>
                    <li>
                        年齡偏好：
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1"
                                value="option1">
                            <label class="form-check-label" for="inlineRadio1">沒有特別偏好</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio2"
                                value="option2">
                            <label class="form-check-label" for="inlineRadio2">2歲以下</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio3"
                                value="option3">
                            <label class="form-check-label" for="inlineRadio3">2～5歲</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio4"
                                value="option4">
                            <label class="form-check-label" for="inlineRadio4">5歲以上</label>
                        </div>
                    </li>
                    <li>
                        毛色偏好：
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio1"
                                value="option1">
                            <label class="form-check-label" for="inlineRadio1">沒有特別偏好</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2"
                                value="option2">
                            <label class="form-check-label" for="inlineRadio2">白色</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio3"
                                value="option3">
                            <label class="form-check-label" for="inlineRadio3">黑色</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio4"
                                value="option4">
                            <label class="form-check-label" for="inlineRadio4">黃色</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio5"
                                value="option5">
                            <label class="form-check-label" for="inlineRadio4">花花色</label>
                        </div>
                    </li>
                    <li>
                        毛髮偏好：
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio1"
                                value="option1">
                            <label class="form-check-label" for="inlineRadio1">沒有特別偏好</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio2"
                                value="option2">
                            <label class="form-check-label" for="inlineRadio2">長毛</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3"
                                value="option3">
                            <label class="form-check-label" for="inlineRadio3">短毛</label>
                        </div>
                    </li>
                    <li>
                        性別偏好：
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio1"
                                value="option1">
                            <label class="form-check-label" for="inlineRadio1">沒有特別偏好</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio2"
                                value="option2">
                            <label class="form-check-label" for="inlineRadio2">男生</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio3"
                                value="option3">
                            <label class="form-check-label" for="inlineRadio3">女生</label>
                        </div>
                    </li>
                    <li>
                        品種偏好：
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio1"
                                value="option1">
                            <label class="form-check-label" for="inlineRadio1">沒有特別偏好</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio2"
                                value="option2">
                            <label class="form-check-label" for="inlineRadio2">只限品種狗</label>
                        </div>
                    </li>

                    <div class="col-12">
                        <label for="inputAddress" class="form-label">簡述家庭環境：</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="(如空間大小，有無院子等)"
                            style="height: 110px">
                    </div>

                    <li>
                        <button type="button" class="cancel">取消更改</button>
                        <button type="button" class="confirm">確認更改</button>
                    </li>
                </form>

            </ul>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'MmemberData',
    components: {
    },
    data() {
        return {
            size: "big",
            age: "male",
            account: "a12334",
            telephone: "071234567",
            phonenumber: "0903333333",
            email: "qqq123@ncu.edu.tw",
            address: "桃園市中壢區中大路300號",
        }
    }
}
</script>
    
<style scoped>
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