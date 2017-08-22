<template>
    <div>
        <!--<header class="mui-bar mui-bar-nav">-->
            <!--<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>-->
            <!--<h1 class="mui-title">标题</h1>-->
        <!--</header>-->
        <router-view></router-view>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">Home</span>
            </router-link>

            <a class="mui-tab-item"></a>

            <a class="mui-tab-item"></a>

            <router-link class="mui-tab-item" to="/setting">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">Setting</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
            return{
                name:"karl"
            }
        }
    }
</script>

<style>
    router-view {
        display: block;
        margin-top: 44px;
        top:44px;
        bottom: 51px;
    }
</style>