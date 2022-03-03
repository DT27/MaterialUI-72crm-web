<template>
  <div align="flex-start" class="person-center">

    <flexbox class="user-box">
      <xr-avatar
        :name="userInfo.realname"
        :size="50"
        :src="userInfo.img"
        class="user-img"/>
      <span class="username">
        {{ userInfo.realname }}
      </span>
    </flexbox>
    <el-menu :default-active="0" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item
        v-for="(item, index) in navList"
        :key="index"
        :index="index"
        :class="{active: selectedIndex === index}"
        class="nav-list-item"
        @click="selectedIndex = index">
        <span :class="item.icon" class="wk icon"/>
        <span class="text">
          {{ item.label }}
        </span>
      </el-menu-item>
    </el-menu>


    <div class="right">
      <edit-user-info
        v-if="selectedIndex === 0"
        @change="getDetail"/>
      <edit-pwd v-if="selectedIndex === 1"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EditUserInfo from './components/EditUserInfo'
import EditPwd from './components/EditPwd'

export default {
  name: 'PersonCenter',
  components: {
    EditUserInfo,
    EditPwd
  },
  data() {
    return {
      selectedIndex: 0 // 0 个人信息 1 账号密码 2 名片信息
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ]),
    navList() {
      const navs = [
        { label: '个人信息', icon: 'wk-user' },
        { label: '账号密码', icon: 'wk-circle-password' }
      ]
      return navs
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      this.loading = true
      this.$store.dispatch('GetUserInfo').then(() => {
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
.person-center {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;

  .user-box {
    padding: 0 18px 18px;

    .user-img {
      margin-right: 22px;
    }

    .username {
      flex: 1;
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
