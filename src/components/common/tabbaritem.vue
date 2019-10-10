<template>
  <!-- 这里写的是每一个小的导航块 里的结构
        预留插槽 用来改变图片(未点击状态和点击状态)和文字
   -->
   <transition>
     <li @click="tabbarclick">
      <!-- slot会完全被替换 为了添加样式 需在外部包裹div 在div上添加 -->
        <transition>
          <div v-show="isclick" >
            <slot name="tabbarimg"></slot>
            <div><slot name="tabbartext"></slot></div>
          </div>
        </transition>
        <transition>
          <div v-show="!isclick" >
            <slot name="tabbarimgactive"></slot>
             <div :style="'color:'+activeColor"><slot name="tabbartext"></slot></div>
          </div>
        </transition>
         <!-- <div :class="{tabbarimgactive:!isclick}"><slot name="tabbartext"></slot></div> -->
     </li>
   </transition>
</template>

<script>
export default {
    props:{
      link:String,
      activeColor:{
        type:String,
        default:'rosybrown'
      }
    },
    data(){
        return {
            // isclick:true,
        }
    },
    computed:{
      isclick(){
        return this.$route.path.indexOf(this.link)
      },
    },
    methods:{
        tabbarclick:function(){
          this.$router.push(this.link);//在app.vue里 动态的添加属性 link 得到转的链接通过$router.push//$router.replace方法 进行跳转
        }
    }
};
</script>

<style scoped>
ul {
  display: flex;
}
ul li {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* .tabbarimgactive{
    color:rosybrown;
    在js里改成动态绑定的
} */
.v-enter,.v-leave-to{
  opacity:0;
}
.v-enter-active,.v-leave-active{
  transition: all 0.1s;
  position: absolute;
}
</style>
