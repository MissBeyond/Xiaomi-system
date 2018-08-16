<template>
    <div class="homeheader">
        <div class="headerwrapper">
            <div class="logo">
                <img src="../assets/image/logo.jpg" alt="logo">
            </div>
            <div class="log-in" @click="handleShowLogin">登录</div>
        </div>
        <login v-show="ShowLogin"></login>
    </div>
</template>
<script>
import Login from './Login'
export default {
    name:'HomeHeader',
    data(){
        return{
            ShowLogin:false
        }
    },
    methods:{
        handleShowLogin(){
            return this.ShowLogin = true
        }
    },
    components:{
        Login
    }
}
</script>
<style lang='stylus' scoped>
.homeheader
    width 100%
    height 100px
    .headerwrapper
        position relative
        width 1180px
        height 100%
        margin 0 auto 
        padding 0 40px
        .logo
            float left
            margin-top 12.5px
        .log-in
            float right 
            line-height 100px
            font-size 16px
            &:hover
                color #d1434a
            



    


    

        
    
    
</style>


