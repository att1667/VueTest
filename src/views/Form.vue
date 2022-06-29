<template>
<div id="formTest">
    <h1>게시판 파일 및 데이터 axios를 사용하여 백엔드로 전송</h1>
    <div>
      <form id="form" method="post" enctype="multipart/form-data" @submit.prevent="sendEmail">
        <h4>기본정보</h4>
        <div>
          <label for="user_name" class="label">지원자</label>
          <input id="user_name" ref="user_name" v-model="user_name" type="text" name="user_name" placeholder="성함" maxlength="30">
        </div>
        <div>
          <label for="user_phone" class="label">연락처</label>
          <input id="user_phone" ref="user_phone" v-model="user_phone" type="tel" name="user_phone" placeholder="예시:01067895432" pattern="[0-9]*" inputmode="numeric" maxlength="11">
        </div>
        <div>
          <label for="user_email" class="label">이메일</label>
          <input id="user_email" ref="user_email" v-model="user_email" type="email" name="user_email" placeholder="이메일 주소" maxlength="50">
        </div>
        <div class="file-box">
          <span class="label">이력서</span>
          <label id="uplodaFile" for="uplodaFile" class="user_file1" />
          <input id="uplodaFile" ref="file" type="file" accept=".ppt, .pptx, .pdf, .doc, .docx" @change="selectFile">
        </div>
        <div class="file-box">
          <span class="label">자소서</span>
          <label id="uplodaFile2" for="uplodaFile2" class="user_file1" />
          <input id="uplodaFile2" ref="file2" type="file" accept=".ppt, .pptx, .pdf, .doc, .docx" @change="selectFile2">
        </div>
        <div class="btn-wrap submission">
          <button type="submit" class="sendBtn">
            지원서 제출
          </button>
        </div>
      </form>
    </div>
</div>
</template>


<script>

import axios from 'axios'

export default {
data () {
    return {
      user_name: '',
      user_phone: '',
      user_email: '',
      selectedFiles: undefined,
      selectedFiles2: undefined
    }
  },
  methods: {
    selectFile () {
      // 파일 사이즈 체크하기
      const maxFileSize = 10485760
      let fileSize = this.$refs.file.files[0].size
      if (fileSize >= maxFileSize) {
        alert('첨부파일 사이즈는 10MB 이내로 등록 가능합니다.')
        // console.log(fileSize)
        this.$refs.file.value = ''
        return
      }

      // 파일명 길이 체크하기
      const maxFileNameLength = 40
      let fileName = this.$refs.file.files[0].name
      if (fileName.length >= maxFileNameLength) {
        alert('파일명의 저장 가능 길이를 초과하였습니다. \n변경후 다시 시도해주세요')
        // console.log(fileName.length)
        this.$refs.file.value = ''
        return
      }

      // 파일 확장자 체크하기
      const ext = ['ppt', 'pptx', 'pdf', 'doc', 'docx']
      let fileExt = fileName.split('.').pop().toLowerCase()
      if (!ext.includes(fileExt)) {
        alert('ppt, pptx, doc, docx, pdf 파일만 업로드 할 수 있습니다')
        // console.log(fileExt)
        this.$refs.file.value = ''
        return
      }

      this.selectedFiles = this.$refs.file.files[0]
      // console.log(this.selectedFiles)
    },
    selectFile2 () {
      // 파일 사이즈 체크하기
      const maxFileSize = 10485760
      let fileSize = this.$refs.file2.files[0].size
      if (fileSize >= maxFileSize) {
        alert('첨부파일 사이즈는 10MB 이내로 등록 가능합니다.')
        // console.log(fileSize)
        this.$refs.file2.value = ''
        return
      }

      // 파일명 길이 체크하기
      const maxFileNameLength = 40
      let fileName = this.$refs.file2.files[0].name
      if (fileName.length >= maxFileNameLength) {
        alert('파일명의 저장 가능 길이를 초과하였습니다. \n변경후 다시 시도해주세요')
        // console.log(fileName.length)
        this.$refs.file2.value = ''
        return
      }

      // 파일 확장자 체크하기
      const ext = ['ppt', 'pptx', 'pdf', 'doc', 'docx']
      let fileExt = fileName.split('.').pop().toLowerCase()
      if (!ext.includes(fileExt)) {
        alert('ppt, pptx, doc, docx, pdf 파일만 업로드 할 수 있습니다')
        // console.log(fileExt)
        this.$refs.file2.value = ''
        return
      }

      this.selectedFiles2 = this.$refs.file2.files[0]
    },
    sendEmail (event) {
      if (this.user_name === '') {
        alert('지원자명은 필수입니다')
        this.$refs.user_name.focus()
        return
      }

      if (this.user_phone === '') {
        alert('연락처는 필수입니다')
        this.$refs.user_phone.focus()
        return
      }

      if (this.user_email === '') {
        alert('이메일은 필수입니다')
        this.$refs.user_email.focus()
        return
      }

      if (this.selectedFiles === undefined) {
        alert('이력서는 필수입니다')
        this.$refs.file.focus()
        return
      }

      if (this.selectedFiles2 === undefined) {
        alert('자소서는 필수입니다')
        this.$refs.file2.focus()
        return
      }

      const formdata = new FormData()
      formdata.append('user_name', this.user_name)
      formdata.append('user_phone', this.user_phone)
      formdata.append('user_email', this.user_email)
      formdata.append('fileList', this.selectedFiles)
      formdata.append('fileList', this.selectedFiles2)
      axios.post('/upload/fileUploadTest', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response) => {
          console.log(response)
          alert('완료')
          console.log(event.target)
          event.target.reset()
        })
        .catch((error) => {
          console.log(error)
          alert('관리자에게 문의하세요')
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>