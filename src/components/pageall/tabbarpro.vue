<template>
  <!-- temptabbar所在的 tabbar.vue里写的是结构 预留出了slot插槽 可以根据需求 插入temptabbaritem 控制底部显示几个导航-->
    <temptabbar>
      <!-- tabbar内容里有slot -->
      <!-- temptabbaritem写在这里 相当于替换 temptabbar的无name属性的slot-->
      <!-- 如果slot有name属性 替换时要<temptabbaritem slot="名字">
        或者直接写<div slot="名字">
        -->
      <ul>
      <!-- <router-link to="/page1" tag="li"> -->
      <temptabbaritem link="/page1" activeColor="red">
         <!-- 传入link activeColor 动态绑定 -->
        <img slot="tabbarimg" src="../../assets/img/logo.png"/>
        <img slot="tabbarimgactive" src="../../assets/img/kkmin.jpg" style="height:20px"/>
        <span slot="tabbartext">首页</span>
      </temptabbaritem>
      <!-- </router-link> -->
      <!-- <router-link to="/page2" tag="li"> -->
      <temptabbaritem link="/page2">
        <img slot="tabbarimg" src="../../assets/img/logo.png"/>
         <img slot="tabbarimgactive" src="../../assets/img/kkmin.jpg"  style="height:20px"/>
        <span slot="tabbartext">消息</span>
      </temptabbaritem>
      <!-- </router-link> -->
      <!-- <router-link to="/page3" tag="li"> -->
      <temptabbaritem  link="/page3">
        <img slot="tabbarimg" src="../../assets/img/logo.png"/>
         <img slot="tabbarimgactive" src="../../assets/img/kkmin.jpg"  style="height:20px"/>
        <span slot="tabbartext">发现</span>
      </temptabbaritem>
      <!-- </router-link> -->
      <!-- <router-link to="/page4" tag="li"> -->
      <temptabbaritem  link="/page4">
        <img slot="tabbarimg" src="../../assets/img/logo.png"/>
         <img slot="tabbarimgactive" src="../../assets/img/kkmin.jpg"  style="height:20px"/>
        <span slot="tabbartext">what</span>
      </temptabbaritem>
      <!-- </router-link> -->
      </ul>

  </temptabbar>
</template>

<script>

import temptabbar from '@/components/common/tabbar';
import temptabbaritem from '@/components/common/tabbaritem';


export default {
  name: 'App',
  components:{
    temptabbar,
    temptabbaritem
  }
}
</script>

<style>
</style>
