# 悟空CRM移动端界面适配

## 源码
[https://gitee.com/dt27/material-ui-72crm-web](https://gitee.com/dt27/material-ui-72crm-web)

## 注意

1. 我嫌合同审核后无法修改，自己改成了随便改，  
需要恢复的自己改回去:  
[https://gitee.com/dt27/P72crm_web/blob/63f47032c8f92bb55964051c60cdd9d3b9e95b99/src/views/crm/contract/Detail.vue#L340](https://gitee.com/dt27/P72crm_web/blob/63f47032c8f92bb55964051c60cdd9d3b9e95b99/src/views/crm/contract/Detail.vue#L340)。

2. 另外去掉了所有emoji表情，减少了800多个文件……，对表情有依赖的不要用~

## 界面预览

![wk1.jpg](https://dt27.cn/usr/uploads/2022/03/3136774758.jpg)![wk2.jpg](https://dt27.cn/usr/uploads/2022/03/2022108237.jpg)

![wk3.jpg](https://dt27.cn/usr/uploads/2022/03/3882137320.jpg)![wk5.jpg](https://dt27.cn/usr/uploads/2022/03/3900335116.jpg)

![wk6.jpg](https://dt27.cn/usr/uploads/2022/03/719504480.jpg)![wk7.jpg](https://dt27.cn/usr/uploads/2022/03/2291332535.jpg)


## 食用方法

1. 备份原`/index.html`文件、`/favicon.ico`文件及`/static`目录，  
2. 将`/dist/`目录中的文件放到站点根目录即可。  
默认前端后端在同一个站点的根目录内，不是这种部署的自己按官方流程修改后编译一遍即可。  


## 悟空CRM介绍


悟空CRM在中国的开源管理软件行业有较高的知名度。目前软件已达到千万级的用户量，开源系统下载量达到200多万次，已覆盖设计制造业、服务业、金融业、政府机构等多种行业。与阿里巴巴、腾讯、OPPO、航天信息、CCTV等多家知名企业达成战略合作。  

公司先后获得河南省高新技术企业、国家3A信用企业、IOS9001软件产品认证等20多项荣誉奖项。拥有50余项软件著作权。 获得20余家国内媒体报道。公司自成立以来，以高科技为起点，以技术为核心、 以完善的售后服务为后盾，秉承稳固与发展、求实与创新的精神，已为国内外上万家企业提供了服务。 在为实现企业价值最大化的过程中， 实现了自身的价值的提升，取得了最大程度的双赢合作，并获得了社会各界的广泛赞誉和认同。  

官网地址：[http://www.5kcrm.com](http://www.5kcrm.com/)  

演示地址：(http://demo11.5kcrm.net/)  
帐号：18688888888   密码：123456a  

原版前端源码：[https://gitee.com/wukongcrm/P72crm_web](https://gitee.com/wukongcrm/P72crm_web)  


```

注：悟空CRM采用全新的前后端分离模式，本仓库代码中已集成前端vue打包后文件，可免去打包操作。如需调整前端代码，请单独下载前端代码

```

(<a href="https://gitee.com/wukongcrm/crm_php" target="_blank">查看PHP后端源码</a>)  


#### 项目目录
``` lua
├── build -- webpack 配置文件
├── config -- 项目配置文件
├── src -- 源码目录
│   ├── api -- axios请求接口
│   ├── assets -- 静态图片资源文件
│   ├── components -- 通用组件
│   ├── directives -- 通用指令
│   ├── filters -- 通用过滤器
│   ├── mixins -- 通用混入
│   ├── router -- vue-router路由配置
│   ├── store -- vuex状态管理
│   ├── styles -- 全局css样式
│   ├── utils -- 工具类
│   └── views -- 前端页面
│       ├── addressBook -- 通讯录
│       ├── admin -- 系统管理
│       ├── bi -- 商业智能
│       ├── calendar -- 日历
│       ├── crm -- 客户管理
│       ├── email -- 邮箱
│       ├── hrm -- 人力资源
│       ├── jxc -- 进销存
│       ├── knowledge -- 知识库
│       ├── layout -- 模块框架
│       ├── login -- 登录
│       ├── oa -- 办公
│       ├── pm -- 项目管理
│       ├── taskExamine -- 任务审批
│       ├── user -- 个人中心
│       └── workLog -- 工作日志
└── static -- 静态资源
```

#### 项目运行

- 下载node并安装(LTS)：https://nodejs.org/;
- 该项目为前后端分离项目，本地访问需搭建后台环境，请参考[后端项目](https://gitee.com/wukongcrm/crm_php);
- 访问线上接口无需搭建后台环境，只需将config/index.js文件中的dev下的proxyTable中的target改为线上地址即可;
- 克隆源代码到本地，使用VSCode打开，并搜索”百度key“，将其替换为自己申请的。申请地址：[百度key](http://lbsyun.baidu.com/index.php?title=jspopularGL/guide/getkey);
- 执行 npm install，下载相关依赖;
- 执行 npm run dev，运行项目;
- 执行成功，即可访问http://localhost:8090，查看悟空CRM;

#### 项目打包

- 需将config/prod.env.js文件中的BASE_API，调整为自己需要的
- 执行 npm run build
- 打包完成，将自动生成dist文件夹


#### 技术栈

| 技术 | 说明 | 版本 |
| --- | --- | --- |
| [Vue](https://vuejs.org) | 框架 | 2.5.17 |
| [Vue-router](https://router.vuejs.org) | 路由框架 | 3.0.1 |
| [Vuex](https://vuex.vuejs.org) | 全局状态管理框架 | 3.0.1 |
| [Element](https://element.eleme.io) | UI框架 | 2.12.0 |
| [Axios](https://github.com/axios/axios) | HTTP框架 | 0.18.0 |


