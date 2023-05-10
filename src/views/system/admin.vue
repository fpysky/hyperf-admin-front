<template>
  <div class="toolbar">
    <el-input v-model="searchData.keyword" size="small" style="width: 200px;" placeholder="搜索管理员"/>
    <el-button type="primary" style="margin-left: 10px;" size="small">
    <el-icon size="small" style="vertical-align: middle;">
      <Search />
    </el-icon>
    <span style="vertical-align: middle" @click="getData()"> 搜索 </span>
  </el-button>
  </div>
  <div class="content">
    <el-table :data="tableData" style="width: 100%;margin-bottom: 20px;">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="name" label="名称" width="180" />
      <el-table-column prop="status" label="状态" width="180" />
      <el-table-column prop="type" label="类型" width="180" />
      <el-table-column prop="mobile" label="手机号" width="180" />
      <el-table-column prop="email" label="电子邮箱" width="180" />
      <el-table-column prop="lastLoginIp" label="最后登录IP" width="180" />
      <el-table-column prop="logo" label="logo" width="180" />
      <el-table-column prop="lastLoginTime" label="最后登录时间" width="180" />
      <el-table-column prop="createdAt" label="创建时间" width="180" />
      <el-table-column prop="updatedAt" label="更新时间" width="180" />
    </el-table>
  <div style="width:100%;">
    <el-pagination style="margin-left: 20px;" background layout="prev, pager, next" :total="total" />
  </div>
  </div>
</template>
  
<script setup>
import { adminList } from '@/api/admin'
import { onMounted,reactive,toRefs } from 'vue'

const state = reactive({
  searchData: {
    keyword:""
  },
  tableData: [],
  total: 0,
  page: 1,
  pageSize: 15,
})

let {
  searchData,
  tableData,
  total,
} = toRefs(state)

const getData = () => {
  adminList({
    page:state.page,
    pageSize:state.pageSize,
  }).then(resp => {
    const {data} = resp
    state.tableData = data.list
    state.total = data.total
  })
}

onMounted(() => {
  getData()
})

</script>
  
  <style lang="scss" scoped>
  .role-container {
    margin: 20px;
    padding: 20px;
    background-color: #fff;
  }

  .toolbar{
    padding: 10px;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
  }

  .content{
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
    padding:10px 0;
  }
  </style>
  