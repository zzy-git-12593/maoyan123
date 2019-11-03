<template>
    <div class="content-wrap">
        <dowload></dowload>
        <nav-menus></nav-menus>
        <router-view></router-view>
    </div>
</template>

<script>
import dowload from '@/views/film-views/nav/dowload'
import navMenus from '@/views/film-views/nav/nav-menus'

export default {
  components: {
    dowload,
    navMenus
  }
}
</script>
<style>
    .content-wrap{
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
</style>
