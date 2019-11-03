<template>
  <div class="film-content-wrap">
    <div class="logo-wrappper">
      <img class="logo" src="@/assets/images/logo.png" />
      <div class="info-wrap">
        <p class="info-title">猫眼</p>
        <p class="info-desc">0元看电影，天天领现金</p>
      </div>
    </div>
    <div class="dowload-btn">
      <span>立即领取</span>
      <img src="@/assets/images/utils.png" alt />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.film-content-wrap {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 10px 15px;
}
.logo-wrappper{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.logo {
  width: 45px;
  height: 45px;
}
.info-wrap {
  flex: 1;
  padding-left: 5px;
}
.info-title {
  color: #333333;
  font-weight: bold;
}
.info-desc {
  font-size: 12px;
  color: #666666;
}
/* 按钮 */
.dowload-btn {
  flex-shrink: 0;
  padding: 0 8px;
  height: 42px;
  color: white;
  background: rgb(240, 61, 55);
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.dowload-btn span {
  font-size: 14px;
  line-height: 14px;
  padding-right: 5px;
}
.dowload-btn img {
  width: 20px;
  height: 20px;
}
</style>
