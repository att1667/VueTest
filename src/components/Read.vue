<template>
    <div>
        <table>
            <tr>
                <td>글쓴이</td>
                <td>제목</td>
                <td>내용</td>
            </tr>
            <tr :key="index" v-for="(value, index) in data" @click="detail(index)">
                <td>{{value.writer}}</td>
                <td>{{value.title}}</td>
                <td>{{value.content}}</td>
            </tr>
        </table>
        <button @click="write">글쓰기</button>
        <router-link class="btn" to="/form">Form Test 하러가기</router-link>
    </div>
</template>

<script>
import data from '@/data'
export default {
    name: 'Read',
    data () {
        return {
            data : data
        }
    },
    methods: {
        write() {
            this.$router.push({
                path: '/create'
            })
        },
        detail(i) {
            this.$router.push({
                name: 'Detail',
                params: {
                    contentId: i
                }
            })
        }
    }
}
</script>

<style>
.btn{
    display: block;
    padding: 10px 20px;
    width: 10%;
    border: 1px solid;
    margin: 0 auto;
    margin-top: 30px;
}
</style>