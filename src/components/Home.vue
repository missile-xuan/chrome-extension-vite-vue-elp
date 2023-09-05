<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import axios from 'axios'
const attemptToken = ref('')
const rcoId = ref('')
const sessionTime = ref('00:05:18')
const locationData = ref(0)
const duration = ref(0)
const contentType = ref('multipart/form-data; boundary=----WebKitFormBoundaryLHY2VheAAfBFjToO')

// 请求测试
function axiosRun () {
  const pageUrl = location.href
  const pageUrlList = pageUrl.split('/')
  const parameterList = pageUrlList[pageUrlList.length - 1].split(';')
  // ['6124', 'classroomId=4098', 'courseDetailId=6124', 'learnerAttemptId=1646632853202']
  // 0: "6124"
  // 1: "classroomId=4098"
  // 2: "courseDetailId=6124"
  // 3: "learnerAttemptId=1646632853202"
  // 监听:{"type":"mp4","rawStatus":"incomplete","location":105.737677,"operation":"stop-timer","duration":899.968}
  const url = `/api/learner/play/course/${parameterList[0]}/save`

  const formData = new FormData()
  formData.append('rawStatus', 'incomplete')
  formData.append('credit', 'no-credit')
  formData.append('attemptToken', attemptToken.value)
  formData.append('learnerAttemptId', parameterList[3].split('=')[1])
  formData.append('course.id', parameterList[2].split('=')[1])
  formData.append('classroom.id', parameterList[1].split('=')[1])
  formData.append('rco.id', rcoId.value)
  formData.append('sessionTime', sessionTime.value)
  formData.append('location', locationData.value.toString())
  formData.append('duration', duration.value.toString())
  axios(
    {
      url,
      method: 'post',
      headers: { 'Content-Type': contentType.value },
      data: formData
      // transformRequest: [function (data) {
      //   let ret = ''
      //   ret += encodeURIComponent('act') + '=' + encodeURIComponent( data['act']) + '&'
      //   ret += encodeURIComponent('log_list') + '=' + encodeURIComponent( JSON.stringify(data['log_list']))
      //   return ret
      // }]
    }
  ).then(function (response) {
    console.log(response)
  }).catch(function (error) {
    console.log(error)
  }).then(function () {
    // always executed
    ElMessage({
      message: '成了  刷新下页面',
      type: 'success'
    })
  })
}
</script>
<template>
  <div class="home">
    <div style="display: flex;">
    <div style="width:150px">rcoId</div>
    <el-input style="width: 70%;" v-model="rcoId" size='small' placeholder="" />
  </div>
  <div style="display: flex;">
  <div style="width:150px">attemptToken</div>
    <el-input style="width: 70%;" v-model="attemptToken" size='small' placeholder="" />
  </div>
  <div style="display: flex;">
    <div style="width:150px">sessionTime</div>
    <el-input style="width: 70%;" v-model="sessionTime" size='small' placeholder="" />
  </div>
  <div style="display: flex;">
    <div style="width:150px">location</div>
    <el-input style="width: 70%;" v-model="locationData" size='small' placeholder="" />
  </div>
  <div style="display: flex;">
    <div style="width:150px">duration</div>
    <el-input style="width: 70%;" v-model="duration" size='small' placeholder="" />
  </div>
  <el-button style="margin-top: 10px;" type="info" size='small' @click="axiosRun" plain>接口请求</el-button>
  <!-- <div style="text-align: center;">window.removeAllListeners()</div> -->
  </div>
</template>
<style scoped lang="less">
.home{
  width: 100%;
  height: 100%;
}
</style>
