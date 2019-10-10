<template>
  <div id="tabbar">
    <slot>
        <!-- slot里面的内容是默认显示的内容 -->
      <ul>
        <li>首页</li>
        <li>消息</li>
        <li>发现</li>
        <li>我的</li>
      </ul>
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tabbar {
  height: 49px;
  /* width:100%; */
  background-color: #f6f6f6;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px 1px rgba(100, 100, 100, 0.1);
}
#tabbar ul {
  display: flex;
}
#tabbar ul li {
  flex: 1;
  display: flex;
  flex-direction: column;
}
#tabbar ul li img{
    width: 20px;
}
</style>
