<template>
  <div class="sign-up">
    <p>회원가입</p>
    <input type="text" v-model="email" placeholder="email"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button @click="signUp()">가입하기</button>
    <span>또는 <router-link to="/login">로그인</router-link>으로 돌아가기</span>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

  export default {
    name: 'signUp',
    data() {
      return {
          email: '',
          password: ''
      }
    },
    methods: {
        signUp() {
            const auth = getAuth() // form firebaseauth
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((data) => {
                console.log(data)
                alert('회원가입성공')
                this.$router.replace("/")
            })
            .catch((error) => {
                console.log(error)
                alert('회원가입실패')
            }) 
        }
    }
  }
</script>

<style scoped>
  .signUp {
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
    font-size: 20px;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 15px;
  }
</style>