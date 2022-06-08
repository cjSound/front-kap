<!--
 * @Author: 曹捷
 * @Date: 2022-06-08 10:00:42
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-08 10:05:19
 * @Description: 工厂模式
-->
<template>
  <div>
    {{data}}
  </div>
</template>

<script>
export default {
  setup () {
    var UserFactory = function (role) {
      let create = {
        superAdmin: function () {
          this.name = '超级管理员',
            this.viewPage = ['首页', '用户管理', '订单管理', '应用管理', '权限管理']
        },
        admin: function () {
          this.name = '管理员',
            this.viewPage = ['首页', '订单管理', '应用管理']
        },
        normaluser: function () {
          this.name = '普通用户',
            this.viewPage = ['首页', '订单管理']
        }
      }
      if (Object.keys(create).indexOf(role) !== -1) {
        return new create[role]();
      } else {
        throw new Error(`参数错误,可选参数${Object.keys(create)}`,)
      }
    }
    let superAdmin = UserFactory('superAdmin');
    let admin = UserFactory('admin')
    let normalUser = UserFactory('normaluser')

    return {
      data: { superAdmin, admin, normalUser }
    }
  }
}
</script>

<style>
</style>