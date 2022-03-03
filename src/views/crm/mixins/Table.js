/** crm自定义列表 公共逻辑 */
import {
  mapGetters
} from 'vuex'
import CRMListHead from '../components/CRMListHead'
import CRMTableHead from '../components/CRMTableHead'
import FieldSet from '../components/FieldSet'
import {
  filedGetTableFieldAPI,
  filedGetPoolTableFieldAPI,
  crmFieldColumnWidthAPI,
  crmPoolFieldColumnWidthAPI
} from '@/api/crm/common'
import {
  crmCustomerIndexAPI,
  crmCustomerPoolListAPI,
  crmCustomerExcelAllExportAPI,
  crmCustomerPoolExcelAllExport,
  crmCustomerStarAPI
} from '@/api/crm/customer'
import {
  crmLeadsIndexAPI,
  crmLeadsExcelAllExportAPI,
  crmLeadsStarAPI
} from '@/api/crm/leads'
import {
  crmContactsIndexAPI,
  crmContactsExcelAllExportAPI,
  crmContactsStarAPI
} from '@/api/crm/contacts'
import {
  crmBusinessIndexAPI,
  crmBusinessExcelAllExportAPI,
  crmBusinessStarAPI
} from '@/api/crm/business'
import {
  crmContractIndexAPI,
  crmContractExcelAllExportAPI
} from '@/api/crm/contract'
import {
  crmProductIndexAPI,
  crmProductExcelAllExportAPI
} from '@/api/crm/product'
import {
  crmReceivablesIndexAPI,
  crmReceivablesExcelAllExportAPI
} from '@/api/crm/receivables'
import {
  crmReturnVisitIndexAPI
} from '@/api/crm/visit'
import {
  crmInvoiceExcelAllExportAPI
} from '@/api/crm/invoice'
import { crmInvoiceIndexAPI } from '@/api/crm/invoice'

import WkEmpty from '@/components/WkEmpty'
import Lockr from 'lockr'
import { Loading } from 'element-ui'
import CheckStatusMixin from '@/mixins/CheckStatusMixin'
import { separator } from '@/filters/vueNumeralFilter/filters'
import { downloadExcelWithResData } from '@/utils'
import { getFormFieldShowName } from '@/components/NewCom/WkForm/utils'
import WkFieldView from '@/components/NewCom/WkForm/WkFieldView'

export default {
  components: {
    CRMListHead,
    CRMTableHead,
    FieldSet,
    WkEmpty,
    WkFieldView
  },
  data() {
    return {
      loading: false, // 加载动画
      tableHeight: document.documentElement.clientHeight - 235, // 表的高度
      list: [],
      fieldList: [],
      sortData: {}, // 字段排序
      currentPage: 1,
      pageSize: Lockr.get('crmPageSizes') || 15,
      pageSizes: [15, 30, 60, 100],
      total: 0,
      search: '', // 搜索内容
      /** 控制详情展示 */
      rowID: '', // 行信息
      rowType: '', // 详情类型
      showDview: false,
      /** 高级筛选 */
      filterObj: [], // 筛选确定数据
      scene_id: '', // 场景筛选ID
      sceneName: '', // 场景名字
      /** 勾选行 */
      selectionList: [], // 勾选数据 用于全局导出
      // 金额字段
      moneyFields: [],
      // 已经发请求 用于缓存区分
      isRequested: false,
      rowIndex: 0 // 行索引
    }
  },

  mixins: [CheckStatusMixin],

  computed: {
    ...mapGetters(['crm']),
    saveAuth() {
      if (this.isSeas) {
        return false
      }

      return this.crm[this.crmType].save
    }
  },
  watch: {},
  mounted() {
    /** 控制table的高度 */
    window.onresize = () => {
      this.updateTableHeight()
    }
    // document.getElementById('crm-table').addEventListener('click', e => {
    //   e.stopPropagation()
    // })
    if (this.isSeas && this.crm.pool.index) {
      // this.getFieldList()
    } else if (this.crm[this.crmType].index) {
      this.loading = true
    }
  },

  methods: {
    /** 获取列表数据 */
    getList() {
      this.loading = true
      var crmIndexRequest = this.getIndexRequest()
      var params = {
        page: this.currentPage,
        limit: this.pageSize,
        search: this.search
        // type: this.isSeas ? crmTypeModel.pool : crmTypeModel[this.crmType] // 9是公海
      }
      if (this.sortData.order) {
        params.order_field = {
          create_user_name: 'create_user_id',
          owner_user_name: 'owner_user_id',
          customer_name: 'customer_id',
          type_id_info: 'type_id',
          status_id_info: 'status_id',
          business_name: 'business_id',
          contacts_name: 'contacts_id',
          order_user_name: 'order_user_id',
          category_name: 'category_id',
          contract_num: 'contract_id',
          contract_number: 'contract_id',
          plan_id_info: 'plan_id'
        }[this.sortData.prop] || this.sortData.prop
        params.order_type = this.sortData.order == 'ascending' ? 'asc' : 'desc'
      }
      if (this.scene_id) {
        params.scene_id = this.scene_id
      }

      // 公海切换
      if (this.pool_id) {
        params.pool_id = this.pool_id
      }
      if (this.filterObj && this.filterObj.length > 0) {
        this.filterObj.forEach(element => {
          params[ {
            create_user_name: 'create_user_id',
            owner_user_name: 'owner_user_id',
            // customer_name: 'customer_id',
            type_id_info: 'type_id',
            status_id_info: 'status_id',
            business_name: 'business_id',
            contacts_name: 'contacts_id',
            order_user_name: 'order_user_id',
            category_name: 'category_id',
            contract_num: 'contract_id',
            plan_id_info: 'plan_id'
          }[element.type] || element.type] = element
          // delete params[element.type].type
        })
      }

      crmIndexRequest(params)
        .then(res => {
          // 需为true 才会触发客户列表和公海列表展示之后的刷新
          this.isRequested = true

          if (this.crmType === 'customer') {
            this.list = res.data.list.map(element => {
              // if (element.create_time) {
              //   element.create_time = new Date(element.create_time)
              // }
              // if (element.update_time) {
              //   element.update_time = new Date(element.update_time)
              // }
              element.show = false // 控制列表商机展示
              return element
            })
          } else {
            if (this.crmType === 'contract' ||
              this.crmType === 'receivables' ||
              this.crmType === 'business') {
              // 合同/回款列表展示金额信息
              this.moneyData = res.data.extraData ? res.data.extraData.money || {} : {}
            }
            this.list = res.data.list
            // .map(item => {
            //   if (item.create_time) {
            //     item.create_time = new Date(item.create_time)
            //   }
            //   if (item.update_time) {
            //     item.update_time = new Date(item.update_time)
            //   }
            //   return item
            // })
          }

          if (res.data.dataCount && Math.ceil(res.data.dataCount / this.pageSize) < this.currentPage && this.currentPage > 1) {
            this.currentPage = this.currentPage - 1
            this.getList()
          } else {
            this.total = res.data.dataCount
            this.loading = false
          }

          this.$nextTick(() => {
            document.querySelector('.el-table__body-wrapper').scrollTop = 1
          })
        })
        .catch(() => {
          this.loading = false
        })
    },
    /** 获取列表请求 */
    getIndexRequest() {
      if (this.crmType === 'leads') {
        return crmLeadsIndexAPI
      } else if (this.crmType === 'customer') {
        if (this.isSeas) {
          return crmCustomerPoolListAPI
        } else {
          return crmCustomerIndexAPI
        }
      } else if (this.crmType === 'contacts') {
        return crmContactsIndexAPI
      } else if (this.crmType === 'business') {
        return crmBusinessIndexAPI
      } else if (this.crmType === 'contract') {
        return crmContractIndexAPI
      } else if (this.crmType === 'product') {
        return crmProductIndexAPI
      } else if (this.crmType === 'receivables') {
        return crmReceivablesIndexAPI
      } else if (this.crmType === 'visit') {
        return crmReturnVisitIndexAPI
      } else if (this.crmType === 'invoice') {
        return crmInvoiceIndexAPI
      }
    },
    /** 获取字段 */
    getFieldList(force) {
      if (this.fieldList.length == 0 || force) {
        this.loading = true

        let params = {}
        if (this.isSeas) {
          if (this.pool_id) {
            params.pool_id = this.pool_id
          }
          params = {
            types: 'crm_' + this.crmType,
            module: 'crm',
            action: 'pool',
            controller: this.crmType,
            pool_id: this.pool_id
          }
        } else {
          // params.label = crmTypeModel[this.crmType]
          params = {
            types: 'crm_' + this.crmType,
            module: 'crm',
            action: 'index',
            controller: this.crmType
          }
        }

        const request = this.isSeas ? filedGetPoolTableFieldAPI : filedGetTableFieldAPI
        request(params)
          .then(res => {
            const fieldList = []
            const moneyFields = []
            for (let index = 0; index < res.data.length; index++) {
              const element = res.data[index]
              var width = 0
              if (!element.width) {
                if (element.name && element.name.length <= 6) {
                  width = element.name.length * 12 + 45
                } else {
                  width = 140
                }
              } else {
                width = element.width
              }
              if (width > 140) {
                width = 140
              }

              // 金额字段 需要格式化
              if (element.formType === 'floatnumber') {
                moneyFields.push(element.fieldName || '')
              }

              fieldList.push({
                prop: element.fieldName || element.field,
                label: element.name,
                width: width,
                sortId: element.id,
                form_type: element.form_type
              })
            }

            this.moneyFields = moneyFields
            this.fieldList = fieldList
            // 获取好字段开始请求数据
            this.getList()
          })
          .catch(() => {
            this.loading = false
          })
      } else {
        // 获取好字段开始请求数据
        this.getList()
      }
    },
    /** 格式化字段 */
    fieldFormatter(row, column, cellValue, field) {
      if (this.moneyFields.includes(column.property)) {
        return separator(row[column.property] || 0)
      }
      // 如果需要格式化
      if (column.property === 'isTransform') {
        return ['否', '是'][cellValue] || '--'
      }
      if (field) {
        return getFormFieldShowName(field.formType, row[column.property], '--', field)
      }
      return row[column.property] === '' || row[column.property] === null ? '--' : row[column.property]
    },
    /** */
    /** */
    /** 搜索操作 */
    crmSearch(value) {
      this.currentPage = 1
      this.search = value
      if (this.fieldList.length) {
        this.getList()
      }
    },
    /** 列表操作 */
    // 当某一行被点击时会触发该事件
    handleRowClick(row, column, event) {
      if (column.type === 'selection') {
        return // 多选布局不能点击
      }
      if (this.crmType === 'leads') {
        if (column.property === 'name') {
          this.rowID = row.leads_id
          this.rowType = 'leads'
          this.showDview = true
        } else {
          this.showDview = false
        }
      } else if (this.crmType === 'customer') {
        if (column.property === 'businessCheck' && row.businessCount > 0) {
          return // 列表查看商机不展示详情
        }
        if (column.property === 'name') {
          this.rowID = row.customer_id
          this.rowType = 'customer'
          this.showDview = true
        } else {
          this.showDview = false
        }
      } else if (this.crmType === 'contacts') {
        if (column.property === 'customer_id' || column.property === 'customer_name') {
          this.rowID = row.customer_id
          this.rowType = 'customer'
          this.showDview = true
        } else if (column.property === 'name') {
          this.rowID = row.contacts_id
          this.rowType = 'contacts'
          this.showDview = true
        } else {
          this.showDview = false
        }
      } else if (this.crmType === 'business') {
        if (column.property === 'customer_id' || column.property === 'customer_name') {
          this.rowID = row.customer_id
          this.rowType = 'customer'
          this.showDview = true
        } else if (column.property === 'name') {
          this.rowID = row.business_id
          this.rowType = 'business'
          this.showDview = true
        } else {
          this.showDview = false
        }
      } else if (this.crmType === 'contract') {
        if (column.property === 'customer_id' || column.property === 'customer_name') {
          this.rowID = row.customer_id
          this.rowType = 'customer'
          this.showDview = true
        } else if (column.property === 'business_id' || column.property === 'business_name') {
          this.rowID = row.business_id
          this.rowType = 'business'
          this.showDview = true
        } else if (column.property === 'contacts_id') {
          this.rowID = row.contacts_id
          this.rowType = 'contacts'
          this.showDview = true
        } else if (column.property === 'num') {
          this.rowID = row.contract_id
          this.rowType = 'contract'
          this.showDview = true
        } else {
          this.showDview = false
        }
      } else if (this.crmType === 'product') {
        if (column.property === 'name') {
          this.rowID = row.product_id
          this.rowType = 'product'
          this.showDview = true
        } else {
          this.showDview = false
        }
      } else if (this.crmType === 'receivables') {
        if (column.property === 'customer_id' || column.property === 'customer_name') {
          this.rowID = row.customer_id
          this.rowType = 'customer'
          this.showDview = true
        } else if (column.property === 'contract_id' || column.property === 'contract_num') {
          this.rowID = row.contract_id
          this.rowType = 'contract'
          this.showDview = true
        } else if (column.property === 'number') {
          this.rowID = row.receivables_id
          this.rowType = 'receivables'
          this.showDview = true
        } else {
          this.showDview = false
        }
      } else if (this.crmType == 'visit') {
        if (column.property === 'number') {
          this.rowID = row.visit_id
          this.rowType = 'visit'
          this.showDview = true
        } else if (column.property === 'customer_name') {
          this.rowID = row.customer_id
          this.rowType = 'customer'
          this.showDview = true
        } else if (column.property === 'contract_num') {
          this.rowID = row.contract_id
          this.rowType = 'contract'
          this.showDview = true
        } else if (column.property === 'contacts_name') {
          this.rowID = row.contacts_id
          this.rowType = 'contacts'
          this.showDview = true
        } else {
          this.showDview = false
        }
      } else if (this.crmType == 'invoice') {
        if (column.property === 'customer_name') {
          this.rowID = row.customer_id
          this.rowType = 'customer'
          this.showDview = true
        } else if (column.property === 'contract_num') {
          this.rowID = row.contract_id
          this.rowType = 'contract'
          this.showDview = true
        } else if (column.property === 'invoice_apple_number') {
          this.rowID = row.invoice_id
          this.rowType = 'invoice'
          this.showDview = true
        } else {
          this.showDview = false
        }
      }
      this.rowIndex = this.getRowIndex()
      if (this.showDview) {
        this.$store.commit('SET_COLLAPSE', this.showDview)
      }
    },

    /**
     * 获取点击行索引
     */
    getRowIndex() {
      let rowIndex = 0
      for (let index = 0; index < this.list.length; index++) {
        const element = this.list[index]
        if (element[`${this.rowType}_id`] === this.rowID) {
          rowIndex = index
          break
        }
      }
      return rowIndex
    },

    /**
     * 导出 线索 客户 联系人 产品
     * @param {*} data
     */
    // 导出操作
    exportInfos() {
      var params = {
        search: this.search
        // type: this.isSeas ? crmTypeModel.pool : crmTypeModel[this.crmType] // 9是公海
      }
      if (this.scene_id) {
        params.scene_id = this.scene_id
      }

      // 公海切换
      if (this.pool_id) {
        params.pool_id = this.pool_id
      }

      // if (this.filterObj && this.filterObj.length > 0) {
      //   params.searchList = this.filterObj
      // }
      if (this.filterObj && this.filterObj.length > 0) {
        this.filterObj.forEach(element => {
          params[ {
            create_user_name: 'create_user_id',
            owner_user_name: 'owner_user_id',
            // customer_name: 'customer_id',
            type_id_info: 'type_id',
            status_id_info: 'status_id',
            business_name: 'business_id',
            contacts_name: 'contacts_id',
            order_user_name: 'order_user_id',
            category_name: 'category_id',
            contract_num: 'contract_id',
            plan_id_info: 'plan_id'
          }[element.type] || element.type] = element
          // delete params[element.type].type
        })
      }
      let request
      // 公海的请求
      if (this.isSeas) {
        request = crmCustomerPoolExcelAllExport
      } else {
        request = {
          customer: crmCustomerExcelAllExportAPI,
          leads: crmLeadsExcelAllExportAPI,
          contacts: crmContactsExcelAllExportAPI,
          business: crmBusinessExcelAllExportAPI,
          contract: crmContractExcelAllExportAPI,
          receivables: crmReceivablesExcelAllExportAPI,
          product: crmProductExcelAllExportAPI,
          invoice: crmInvoiceExcelAllExportAPI
        }[this.crmType]
      }
      const loading = Loading.service({ fullscreen: true, text: '导出中...' })
      request(params)
        .then(res => {
          downloadExcelWithResData(res)
          loading.close()
        })
        .catch(() => {
          loading.close()
        })
    },
    /** 筛选操作 */
    handleFilter(data) {
      this.filterObj = data
      var offsetHei = document.documentElement.clientHeight
      var removeHeight = this.filterObj.length > 0 ? 295 : 235
      this.tableHeight = offsetHei - removeHeight
      this.currentPage = 1
      this.getList()
    },
    /** 场景操作 */
    handleScene(data) {
      this.scene_id = data.id
      this.sceneName = data.name
      this.currentPage = 1
      this.getFieldList()
    },
    /** 勾选操作 */
    handleHandle(data) {
      if (['alloc', 'get', 'transfer', 'transform', 'delete', 'put_seas', 'exit-team'].includes(data.type)) {
        this.showDview = false
      }

      if (data.type == 'clear-sort') {
        this.getMainTable().clearSort()
        this.sortChange()
      } else {
        this.getList()
      }
    },
    /**
     * 刷新数据
     */
    refreshList() {
      this.currentPage = 1
      this.getFieldList()
    },
    /**
     * 获取table
     */
    getMainTable() {
      let table = null
      this.$children.forEach(item => {
        if (item.$options && item.$options.name === 'ElTable') {
          table = item
        }
      })
      return table
    },

    /** 自定义字段管理 */
    setSave() {
      this.getFieldList(true)
    },
    /** */
    /** 页面头部操作 */
    listHeadHandle(data) {
      if (data.type === 'save-success' || data.type === 'import-crm') {
        // 重新请求第一页数据
        this.currentPage = 1
        this.getList()
      }
    },
    /**
     * 字段排序
     */
    sortChange(column, prop, order) {
      this.currentPage = 1
      this.sortData = column || {}
      this.getList()
    },
    /** 勾选操作 */
    // 当选择项发生变化时会触发该事件
    handleSelectionChange(val) {
      this.selectionList = val // 勾选的行
      this.$refs.crmTableHead.headSelectionChange(val)
    },
    // 当拖动表头改变了列的宽度的时候会触发该事件
    handleHeaderDragend(newWidth, oldWidth, column, event) {
      if (column.property) {
        let request = null
        var field
        this.fieldList.forEach(e => {
          if (column.property === e.prop) {
            field = e.prop
          }
        })
        if (!field) {
          return
        }
        const params = {
          // id: field,
          types: 'crm_' + this.crmType,
          width: newWidth,
          field: {
            create_user_name: 'create_user_id',
            owner_user_name: 'owner_user_id',
            customer_name: 'customer_id',
            type_id_info: 'type_id',
            status_id_info: 'status_id',
            business_name: 'business_id',
            contacts_name: 'contacts_id',
            order_user_name: 'order_user_id',
            category_name: 'category_id',
            contract_num: 'contract_id',
            contract_number: 'contract_id',
            plan_id_info: 'plan_id'
          }[column.property] || field
        }
        if (this.isSeas) {
          if (!this.pool_id) {
            return
          }
          request = crmPoolFieldColumnWidthAPI
          params.pool_id = this.pool_id
        } else {
          request = crmFieldColumnWidthAPI
        }

        request(params)
          .then(res => {
          })
          .catch(() => { })
      }
    },
    // 更改每页展示数量
    handleSizeChange(val) {
      Lockr.set('crmPageSizes', val)
      this.pageSize = val
      this.getList()
    },
    // 更改当前页数
    handleCurrentChange(val) {
      this.currentPage = val
      this.getList()
    },
    // 0待审核、1审核中、2审核通过、3已拒绝 4已撤回 5未提交
    getStatusStyle(status) {
      return {
        backgroundColor: this.getCRMStatusColor(status)
      }
    },

    /**
     * 切换关注状态
     * @param index
     * @param status
     */
    toggleStar(data) {
      this.loading = true

      const request = {
        leads: crmLeadsStarAPI,
        customer: crmCustomerStarAPI,
        contacts: crmContactsStarAPI,
        business: crmBusinessStarAPI
      }[this.crmType]

      const params = {}
      // console.log(this.crmType)
      params[`type`] = `crm_` + this.crmType
      params[`crmType`] = this.crmType
      params[`target_id`] = data[this.crmType + '_id']
      request(params).then(() => {
        this.loading = false
        this.$message.success(data.star > 0 ? '取消关注成功' : '关注成功')
        data.star = data.star > 0 ? 0 : 1
      }).catch(() => {
        this.loading = false
      })
    },

    /**
     * 更新表高
     */
    updateTableHeight() {
      var offsetHei = document.documentElement.clientHeight
      var removeHeight = this.filterObj.length > 0 ? 285 : 235
      this.tableHeight = offsetHei - removeHeight
    }
  },

  beforeDestroy() { }
}
