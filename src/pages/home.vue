<template>
    <div>
        <div id="slider" class="mui-slider" >
            <div class="mui-slider-group mui-slider-loop">
                <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href="#">
                        <img src="../img/yuantiao.jpg">
                    </a>
                </div>
                <!-- 第一张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="../img/shuijiao.jpg">
                    </a>
                </div>
                <!-- 第二张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="../img/muwu.jpg">
                    </a>
                </div>
                <!-- 第三张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="../img/cbd.jpg">
                    </a>
                </div>
                <!-- 第四张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="../img/yuantiao.jpg">
                    </a>
                </div>
                <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href="#">
                        <img src="../img/shuijiao.jpg">
                    </a>
                </div>
            </div>
            <div class="mui-slider-indicator">
                <div class="mui-indicator mui-active"></div>
                <div class="mui-indicator"></div>
                <div class="mui-indicator"></div>
                <div class="mui-indicator"></div>
            </div>
        </div>

        <div id="test" style="padding-bottom: 1000px;background-color: #4cd964"></div>
    </div>
</template>

<style>
    .mui-slider-item img{
    }
</style>

<script>
    export default{
        mounted:function () {
            let slider = mui("#slider");
            slider.slider({
                interval: 5000
            });

        }
    }
</script>