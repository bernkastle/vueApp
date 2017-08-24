<template>
    <div class="mui-content-padded" style="margin: 5px">
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label>用户名</label>
                <input class="mui-input-clear" type="text" placeholder="请输入用户名">
            </div>
            <div class="mui-input-row">
                <label>密码</label>
                <input class="mui-input-clear" type="password" placeholder="请输入密码">
            </div>
            <div class="mui-content-padded">
                <button id='login' class="mui-btn mui-btn-block mui-btn-primary">登录</button>
                <div class="link-area"><a id='reg'>注册账号</a> <span class="spliter">|</span> <a
                        id='forgetPassword'>忘记密码</a>
                </div>
            </div>
        </form>
    </div>
</template>

<style>
    .mui-btn {
        padding: 10px;
    }
</style>