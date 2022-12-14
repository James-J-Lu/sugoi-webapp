<template>
    <div class="form-signin w-100">
        <form class="signInform">
            <h1 class="h3 mb-3 fw-normal">Please Sign in</h1>
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" value="account">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" value="password">
                <label for="floatingInput">Password</label>
            </div>
            <div class="checkbox mb-3"></div>
            <button type="button" class="w-100 btn btn-lg btn-primary" @click="logIn">Sign in</button>
        </form>
        <!-- <button type="button" v-on:click="getmsg">get</button>
        <button type="button" v-on:click="postmsg">post</button> -->
    </div>
</template>

<script>
import MemberDataService from "../services/MemberDataService";

export default {
    name: 'logIn',
    data () {
        return {
            isMember: null,
            name: null,
            account: 'jack',
            password: '123',
        }
    },
    methods: {
        //回到default主頁
        back2Main(_login) {
            //要傳回parent的參數
            var _value = {
                desTination: null,
                name: null,
                petCheck: null,
                adoptCheck: null
            }
            //單純回到上一頁
            if(_login == 0) {
                _value.name = null
                _value.desTination = 'defaultMain'
                this.$emit('getChild', _value)
            }
            //登入輸入的那個按鈕
            else if (_login == 1) {
                //是會員
                if(this.isMember == 'member') {
                    _value.name = this.name
                    _value.desTination = 'defaultMain'
                    _value.petCheck = true
                    _value.adoptCheck = true
                    this.$emit('getChild', _value)
                }
                //是管理員
                else if (this.isMember == 'manager'){
                    _value.name = 'manager'
                    _value.desTination = 'managerMain'
                    this.$emit('getChild', _value)
                }
            }
        },
        //登入submit
        logIn () {
            this.name = 'kelly'
            //this.isMember = 'manager' //管理者
            this.isMember = 'member' //會員
            this.back2Main(1)
            // var data = {
            //     id: null,
            //     account: this.account,
            //     pw: this.password,
            //     name: null
            // };
            // MemberDataService.logIn(data)
            //     .then(response => {
            //         //登入成功
            //         if(response.data != true) {
            //             this.name = response.data.memberName
            //             if(response.data.memberAccount != 'manager')
            //                 this.isMember = 'member'
            //             else if(response.data.memberAccount == 'manager')
            //                 this.isMember = 'manager'
            //             this.back2Main(1)
            //         }
            //         else
            //             console.log('登入失敗')
            //     })
            //     .catch(e => {
            //         console.log(e);
            //     });
        },
        getmsg () {
            var id = 'M004'
            console.log('get')
            MemberDataService.get(id)
                .then(response => {
                console.log(response.data)
                })
                .catch(e => {
                console.log(e);
                });
        },
        postmsg () {
            var id = 'M004';
            var _member_ = {
                account: '052',
                pw: '959595959',
                name: 'Jacky'
            };

            MemberDataService.update(id, _member_)
                .then(response => {
                // console.log('res=', response)
                console.log(response)
                })
                .catch(e => {
                console.log(e);
                });
        }
    }
}
</script>

<style scoped>
.input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.signInform {
    padding-top: 10%;
    margin: 0 40% 10% 40%;
}
</style>