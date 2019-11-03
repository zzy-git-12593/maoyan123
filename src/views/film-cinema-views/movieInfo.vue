 <template>
    <div class="banner_wrapper" v-if="cinemaDetail.nm">
        <div :style="{backgroundColor:cinemaDetail.backgroundColor}" class="bg"></div>
        <div :style="{ 'background-image': 'url(' + cinemaDetail.img.replace('w.h','71.100')+ ')'}" class="bgcolor"></div>
        <div class="detail_box">
            <div  class="detail_box_left">
                <div class="detail_img"><img :src="cinemaDetail.img|filterImg" alt=""></div>
                <div class="detail_content">
                    <h1 class="detail_content_title">{{cinemaDetail.nm}}</h1>
                    <div class="detail_content_english_title">{{cinemaDetail.enm}}</div>
                    <div class="detail_content_appraise"><span>{{cinemaDetail.sc}}</span><span>({{cinemaDetail.snum|snumFilters}}万人评)</span></div>
                    <div class="detail_content_cat">{{cinemaDetail.cat}}</div>
                    <div class="detail_content_src">{{cinemaDetail.src}}/{{cinemaDetail.dur}}分钟</div>
                    <div class="detail_content_timer">{{cinemaDetail.pubDesc}}</div>
                </div>
            </div>
            <div class="detail_content_blank">></div>
        </div>

    </div>
</template>

<script>
export default {
  props: ['cinemaDetail'],
  filters: {
    snumFilters (item) {
      return parseInt(item / 10000)
    },
    filterImg (item) {
      return item.replace('w.h', '148.208')
    }
  }
}

// function formatDateTime(inputTime){
//             var date = new Date(inputTime);
//             var y = date.getFullYear();
//             var m = date.getMonth() + 1;
//             m = m < 10 ? ('0' + m) : m;
//             var d = date.getDate();
//             d = d < 10 ? ('0' + d) : d;
//             var h = date.getHours();
//             h = h < 10 ? ('0' + h) : h;
//             var minute = date.getMinutes();
//             var second = date.getSeconds();
//             minute = minute < 10 ? ('0' + minute) : minute;
//             second = second < 10 ? ('0' + second) : second;
//             return y + '-' + m + '-' + d + ' ' + '　' + h + ':' + minute + ':' + second;
//         }

//     console.log(formatDateTime(1572108475251));//2019-10-27 00:20:46
</script>
<style>

    .banner_wrapper{
        width: 100%;
        height: 188px;
        position: relative;
    }
    .bg{
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
    }
    .bgcolor{
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
        position: absolute;
        -webkit-filter: blur(1.2rem);
        filter: blur(1.2rem);
        background-size: cover;
        background-repeat: no-repeat;
        opacity: .55;
    }

    .detail_box{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 19px 15px;
        color: white;
        align-items: center;
    }
    .detail_box_left{
        display: flex;
        flex-direction: row;
        justify-content: space-between
    }
    .detail_img img{
        width: 110px;
        height: 150px;
    }
    .detail_content{
        margin-left: 10px
    }

    .detail_content_title{
        margin-top: 2px;
        font-size: 20px;
        line-height: 20px
    }
    .detail_content_english_title{
        margin-top: 10px;
        font-size: 12px;
        line-height: 12px
    }
    .detail_content_appraise{
        margin-top: 10px;

    }
    .detail_content_appraise span:nth-child(1){
        font-size: 18px;
        color: #FFCC00;
        line-height: 18px
    }
    .detail_content_appraise span:nth-child(2){
        font-size: 12px;
        line-height: 12px
    }
    .detail_content_cat,
    .detail_content_src,
    .detail_content_timer{
        margin-top: 10px;
        font-size: 12px;
        line-height: 12px
    }

    .detail_content_blank{
        /* margin-left: 35px */
        font-size: 26px
    }
</style>
