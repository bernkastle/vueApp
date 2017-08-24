<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">{{title}}</h1>
        </header>

        <div class="mui-content">
            <router-view></router-view>
        </div>

        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item" to="/home" name="首页">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>

            <a class="mui-tab-item" to="find" name="发现">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">发现</span>
            </a>

            <a class="mui-tab-item" to="order" name="订单">
                <span class="mui-icon mui-icon-compose"></span>
                <span class="mui-tab-label">订单</span>
            </a>

            <a class="mui-tab-item" to="/setting" name="设置">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </a>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'app',
        mounted: function () {
            let self = this;
            mui('.mui-bar-tab').on('tap', 'a', function (e) {
                let targetTab = this.getAttribute('to');
                let name = this.getAttribute('name');
                self.$router.push(targetTab);
                self.title = name;
            })
        },
        data(){
            return {
                title: '首页'
            }
        }
    }
</script>