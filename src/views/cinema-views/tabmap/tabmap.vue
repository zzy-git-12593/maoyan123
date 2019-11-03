<template>
    <div class="map-nav">
        <div><span>全城</span></div>
        <div><span>全城</span></div>
        <div><span>全城</span></div>
    </div>
</template>
<script>
export default {}
</script>
<style>
.map-nav{
    flex-shrink: 0;
    height: 44px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #b2b2b2;
    border-bottom: 1px solid #e6e6e6;
}
.map-nav div{
    flex-shrink: 0;
    width: 33.3%;
    text-align: center;

}
.map-nav :nth-child(2)::before,
.map-nav :nth-child(3)::before{
    content: "";
    height: 22px;
    border-right: 1px solid #e8e8e8;
}
</style>
