<template>
  <div class="toolbar">
    <el-button size="small" style="margin-right: 10px;" @click="openCreateOrUpdate(0)">
      <el-icon size="small" style="vertical-align: middle;">
        <Plus />
      </el-icon>
      <span style="vertical-align: middle">添加</span>
    </el-button>
    <el-input v-model="state.searchData.keyword" size="small" style="width: 200px;" placeholder="搜索管理员"/>
    <el-button type="primary" style="margin-left: 10px;" size="small" :loading="state.tableLoading" @click="getData()">
      <el-icon size="small" style="vertical-align: middle;">
        <Search />
      </el-icon>
      <span style="vertical-align: middle">搜索</span>
    </el-button>
    <el-button size="small" :icon="Delete" @click="clear()">
      <el-icon size="small" style="vertical-align: middle;">
        <Delete />
      </el-icon>
    </el-button>
  </div>
  <div class="content">
    <el-table :data="state.tableData" v-loading="state.tableLoading" style="width: 100%;margin-bottom: 20px;">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="name" label="名称" width="180" />
      <el-table-column prop="status" label="状态" width="180">
        <template #default="scope">
            <el-switch
              v-model="scope.row.status"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
              :active-value="1"
              :inactive-value="0"
            />
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类型" width="180" />
      <el-table-column prop="mobile" label="手机号" width="180" />
      <el-table-column prop="email" label="电子邮箱" width="180" />
      <el-table-column prop="lastLoginIp" label="最后登录IP" width="180" />
      <el-table-column prop="logo" label="logo" width="180" />
      <el-table-column prop="lastLoginTime" label="最后登录时间" width="180" />
      <el-table-column prop="createdAt" label="创建时间" width="180" />
      <el-table-column prop="updatedAt" label="更新时间" width="180" />
      <el-table-column label="操作" width="140">
        <template #default="scope">
          <el-button size="small">编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="width:100%;">
      <el-pagination style="margin-left: 20px;" background layout="prev, pager, next" :total="state.total" />
    </div>
    <el-dialog
      style="text-align: center;"
      v-model="state.addDialogVisible"
      title="新增管理员"
      width="30%"
    >
      <el-form ref="ruleFormRef" :model="state.createForm" :rules="rules" label-width="100px">
        <el-form-item required label="姓名:" prop="name">
          <el-input v-model="state.createForm.name" />
        </el-form-item>
        <el-form-item required label="手机号:" prop="mobile">
          <el-input v-model="state.createForm.mobile" />
        </el-form-item>
        <el-form-item required type="password" label="密码:" prop="password">
          <el-input v-model="state.createForm.password" />
        </el-form-item>
        <el-form-item required type="password" label="确认密码:" prop="rePassword">
          <el-input v-model="state.createForm.rePassword" />
        </el-form-item>
        <el-form-item required label="电子邮箱:" prop="email">
          <el-input v-model="state.createForm.email" />
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;margin: 0 auto;" type="primary" :loading="state.createdminSubmitLoading" @click="createdminSubmit()">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
  
<script setup>
import { adminList,createAdmin } from '@/api/admin'
import { onMounted,reactive,ref } from 'vue'

const state = reactive({
  searchData: {
    keyword:""
  },
  tableData: [],
  total: 0,
  page: 1,
  pageSize: 15,
  tableLoading:false,
  addDialogVisible:false,
  createdminSubmitLoading:false,
  createForm:{
    name:"",
    mobile:"",
    password:"",
    rePassword:"",
    email:"",
    deptId:0,
    postId:0,
    status:0,
    roleIds:[],
  }
})

const ruleFormRef = ref(null)

const rules = reactive({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
  ],
  mobile: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
  rePassword: [
    { required: true, message: '请输入确认密码', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入电子邮箱', trigger: 'blur' },
  ],
})

const createdminSubmit = async () => {
  if(ruleFormRef.value){
    await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      state.createdminSubmitLoading = true
      createAdmin(state.createForm).then(() => {
        state.addDialogVisible = false
      }).finally(() => {
        state.createdminSubmitLoading = false
      })
    } else {
      console.log('error submit!', fields)
    }
  })
  }
}

const getData = () => {
  state.tableLoading = true
  
  adminList({
    page:state.page,
    pageSize:state.pageSize,
    keyword:state.searchData.keyword
  }).then(resp => {
    const {data} = resp
    state.tableData = data.list
    state.total = data.total
  }).finally(() => {
    state.tableLoading = false
  })
}

const clear = () => {
  state.searchData.keyword = ''
}

const openCreateOrUpdate = (index) => {
  if(index !== 0){
    const data = state.tableData[index]
    state.createForm = {
      name:data.name,
      mobile:data.mobile,
      email:data.email,
      deptId:data.deptId,
      postId:data.postId,
      status:data.status,
      roleIds:data.roleIds,
    }
  }else{
    state.createForm = {
      name:'',
      mobile:'',
      email:'',
      deptId:0,
      postId:0,
      status:0,
      roleIds:[],
    }
  }
  state.addDialogVisible = true
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
  