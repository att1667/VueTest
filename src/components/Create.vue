<template>
    <div>
        <input v-model="writer" type="text" placeholder="글쓴이">
        <input v-model="title" type="text" placeholder="제목">
        <textarea v-model="content" cols="30" rows="10" placeholder="내용"></textarea>
        <button @click="write()">작성</button>
    </div>
</template>

<script>
import data from '@/data'
export default {
    name: 'Create',
    data(){
        return {
            data: data,
            writer: '',
            title: '',
            content: ''
        }
    },
    methods: {
        write() {
            this.data.push({
                writer: this.writer,
                title: this.title,
                content: this.content
            })
            this.$router.push({
                path: '/'
            })
        }
        // update() {
        //     data[this.index].writer = this.writer
        //     data[this.index].title = this.title
        //     data[this.index].content = this.content
        //     this.$router.push({
        //         path: '/'
        //     })
        // }
    }
}
</script>