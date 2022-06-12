<template>
  <div class="login">
    <h3>Login</h3>
    <input type="text" v-model="email" placeholder="email"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <p class="red" v-if="errMsg">{{errMsg}}</p>
    <button @click="login">로그인</button>
    <p>만약 계정이 없다면, <router-link to="/signup">회원가입</router-link>을 먼저 진행해주세요!</p>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: '',
        errMsg: ''
      }
    },
    methods: {
        login(){
          const auth = getAuth() // form firebaseauth
          console.log(auth)
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then((data) => {
                this.$router.replace("/")
            })
            .catch((error) => {
                switch (error.code) {
                  case "auth/invalid-email":
                    this.errMsg = "등록되지 않은 이메일 주소입니다."
                    break;
                  case "auth/user-not-found":
                    this.errMsg = "등록되지 않은 이메일 주소입니다."
                    break;
                  case " auth/wrong-password":
                    this.errMsg = "비밀번호가 틀렸습니다."
                    break;
                  default:
                    this.errMsg = "이메일 혹은 비밀번호가 틀렸습니다."
                    break;
                }
            }) 
        }
    }
  }
</script>

<style scoped>
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 15px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
  .red{
    color: red;
  }
</style>