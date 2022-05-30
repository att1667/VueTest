<template>
    <div>
        <input v-model="writer" type="text" placeholder="글쓴이">
        <input v-model="title" type="text" placeholder="제목">
        <textarea v-model="content" cols="30" rows="10" placeholder="내용"></textarea>
        <button @click="update()">수정</button>
    </div>
</template>

<script>
import data from '@/data'
export default {
    name: 'Modify',
    data(){
        const index = this.$route.params.contentId
        console.log(index)
        return {
           data: data[index],
           index: index,
           writer: data[index].writer,
           title: data[index].title,
           content: data[index].content
        }
    },
    methods: {
        update() {
            data[this.index].writer = this.writer
            data[this.index].title = this.title
            data[this.index].content = this.content
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>
