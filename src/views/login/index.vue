<template>
  <div
    class="login-wrapper">
    <div class="top-nav">
      <img
        src="~@/assets/logo_white.png"
        alt="">
    </div>
    <div class="v-image-cover"/>
    <div class="container">
      <div class="login-main-content">
        <div class="logo-box">
          {{ titleMap[activeCom] }}
        </div>

        <component
          :is="activeCom"/>
      </div>
    </div>
    <footer class="v-footer">
      <div class="container">
        <div class="body-1 font-weight-light pt-6 pt-md-0 text-center"> © 2022, Use Material Theme Made By <span
          style="color: mediumvioletred;">❤</span> by DT27.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import LoginByPwd from './component/LoginByPwd'

export default {
  name: 'Login',
  components: {
    LoginByPwd
  },
  data() {
    return {
      activeCom: 'LoginByPwd',
      titleMap: {
        LoginByPwd: '欢迎登录'
      }
    }
  },
  watch: {},
  created() {
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import 'index';

.login-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .top-nav {
    width: 100%;
    padding: 23px 2.8% 0;
    display: flex;

    img {
      width: 164px;
      height: 50px;
    }

    // @media screen and (max-width: 1550px) {
    //   padding: 23px 2.8% 0;
    //   img {
    //     width: 118px;
    //     height: 36px;
    //   }
    // }
  }

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;

    .left {
      .title {
        font-size: 38px;
        font-weight: normal;
        color: white;
        letter-spacing: 3px;
        margin-top: 10px;
        margin-left: 34px;
        margin-bottom: 20px;
        @media screen and (max-width: 1550px) {
          font-size: 32px;
          margin-top: 0;
          margin-bottom: 15px;
        }
      }

      .mini-title {
        font-size: 28px;
        font-weight: normal;
        color: white;
        margin-bottom: 12px;
        margin-left: 34px;
        @media screen and (max-width: 1550px) {
          font-size: 18px;
          margin-bottom: 6px;
        }
      }

      .desc {
        font-size: 16px;
        color: white;
        line-height: 1.5;
        margin-left: 34px;
        @media screen and (max-width: 1550px) {
          font-size: 14px;
        }
      }

      .register-btn {
        width: 120px;
        height: 48px;
        font-size: 18px;
        text-align: center;
        line-height: 48px;
        color: #394af3;
        background-color: white;
        border-radius: $xr-border-radius-base;
        cursor: pointer;
        margin: 15px 0 15px 34px;
        @media screen and (max-width: 1550px) {
          width: 100px;
          height: 40px;
          font-size: 16px;
          line-height: 40px;
          border-radius: 4px;
          margin: 10px 0 10px 50px;
        }
      }

      .main-pic {
        width: 560px;
        margin-bottom: 20px;
        margin-top: 50px;
        margin-left: -20px;
        @media screen and (max-width: 1550px) {
          width: 500px;
          // margin-top: 10px;
          // margin-left: -20px;
          // margin-bottom: 20px;
        }
      }

      .download-group {
        width: 100%;
        overflow: hidden;

        .download-item {
          float: left;
          border-radius: 22px;
          background-color: #2b5db9;
          text-align: center;
          cursor: pointer;
          margin-right: 20px;
          padding: 8px 16px;

          .icon {
            width: 30px;
            height: 30px;
            vertical-align: middle;
            margin-right: 10px;
          }

          .text {
            font-size: 14px;
            color: white;
            vertical-align: middle;
          }

          @media screen and (max-width: 1550px) {
            border-radius: 18px;
            margin-right: 15px;
            padding: 7px 12px;
            .icon {
              width: 22px;
              height: 22px;
              vertical-align: middle;
              margin-right: 8px;
            }
            .text {
              font-size: 14px;
              color: white;
              vertical-align: middle;
            }
          }
        }
      }
    }


    .login-main-content {
      position: relative;
      width: 400px;
      background-color: white;
      border-radius: 6px;
      overflow: hidden;
      padding: 20px 0 70px 0;
      margin-top: 50px;

      .logo-box {
        position: relative;
        width: 100%;
        font-weight: bold;
        font-size: 20px;
        color: #4c4c4c;
        letter-spacing: 2px;
        padding: 0 40px;
        margin: 15px 0 20px;

        &:before {
          position: absolute;
          top: 50%;
          left: 24px;
          transform: translateY(-50%);
          content: '';
          width: 4px;
          height: 16px;
          background-color: #3e6bea;
          border-radius: 2px;
          display: block;
        }

        .use-tip {
          position: absolute;
          left: 0;
          bottom: 18px;
          width: 100%;
          text-align: center;
          color: #999;
          font-size: 12px;

          div + div {
            margin-top: 3px;
          }

          .text {
            vertical-align: middle;
          }

          .icon {
            width: 15px;
            display: inline-block;
            vertical-align: middle;
          }
        }
      }

      // @media screen and (max-width: 1550px) {
      // width: 480px;
      // margin-left: 80px;
      // padding-top: 10px;
      // .login-main-content {
      // height: 450px;
      // .logo-box {
      // font-size: 20px;
      // padding: 0 40px;
      // margin: 15px 0 20px;
      // &:before {
      //   height: 16px;
      //   left: 24px;
      // }
      // }
      // .use-tip {
      //   font-size: 12px;
      //   .icon {
      //     width: 15px;
      //   }
      // }
      // }
      // }
    }

  }
}

.download-popover {
  .popover-box {
    width: 126px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .qrcode {
      width: 126px;
      height: 126px;
    }

    .down-text {
      width: 126px;
      font-size: 12px;
      text-align: center;
      color: #666;
      margin-top: 5px;
    }
  }
}


.v-image-cover {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("~@/assets/login/bg.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.v-footer {
  color: white;
  padding: 70px 0 50px 4px;
}
</style>
