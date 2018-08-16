<template>
    <div class="login-wrapper">
        <div class="login">
            <i class="icon iconfont icon-guanbi"></i>
            <div class="login-title">
                <h1>登录</h1>
            </div>
            <div class="login-input">
                <ul>
                    <li>
                        <i class="icon iconfont icon-yonghu"></i>
                        <input type="text" placeholder="用户名">
                    </li>
                    <li>
                        <i class="icon iconfont icon-mima"></i>
                        <input type="password" placeholder="密码">
                    </li>
                </ul>
                <button type="button" class="login-button">登录</button>
            </div>
            
            

        </div>
    </div>
</template>
<script>
export default {
    name:'Login'
}
</script>
<style lang='stylus' scoped>
.login-wrapper
    position fixed
    top 0
    left 0
    bottom 0 
    right 0
    background-color rgba(0,0,0,0.4)
    .login
        position relative
        margin auto
        top 200px
        padding 40px
        width 500px
        height 300px
        z-index 99
        background-color #fff
    .icon-guanbi
        position absolute
        top 10px
        right 10px
        font-size 26px
        color grey
    .login-title
        font-size 30px
        font-weight 700
    .login-input
        width 100%
        ul li
            display flex
            height 40px
            line-height 40px
            margin-top 20px
            padding 0 10px
            font-size 20px
            border 1px solid #000
            .icon
                font-size 20px
            input
                margin-left 10px
                width 400px
        .login-button
            margin-top 20px
            width 100%
            height 60px
            line-height 60px
            color #ffffff
            font-size 22px
            font-weight 500
            cursor pointer
            background-color #1e90ff



        

        
</style>


