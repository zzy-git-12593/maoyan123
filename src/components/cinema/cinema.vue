<template>
  <div class="cinema-page-wrap">
    <div class="cinema-search-wrap">
      <div class="cinema-location">上海</div>
      <div class="cinema-search">
        <span class="iconfont icon-sousuo"></span>
        <span>请输入影院</span>
      </div>
    </div>
    <tab-map></tab-map>
    <cinema-list></cinema-list>
  </div>
</template>
<script>
import tabMap from '../../views/cinema-views/tabmap/tabmap'
import cinemaList from '../../views/cinema-views/cinemalist/cinemalist'
export default {
  components: { tabMap, cinemaList }
}
</script>
<style>
.cinema-page-wrap {
  height: 100%;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.cinema-search-wrap {
  flex-shrink: 0;
  height: 44px;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #f5f5f5;
  color: #777777;
}
.cinema-location {
  flex-shrink: 0;
  font-size: 16px;
  line-height: 44px;
  color: #666666;
}
.cinema-search {
  flex-grow: 1;
  padding: 4px 0;
  border: 1px solid #e6e6e6;
  background: white;
  color: #b2b2b2;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  margin-left: 20px;
}
.cinema-search .iconfont {
  font-size: 14px;
  text-align: center;
}
</style>
