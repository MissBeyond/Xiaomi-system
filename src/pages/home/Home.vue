<template>
    <div>
        <home-header></home-header>
        <home-tab></home-tab>
        <main-area></main-area>
        <home-footer></home-footer>
        
    </div>
</template>
<script>
import HomeHeader from '../../common/Header'
import HomeTab from '../../common/tab'
import MainArea from './components/MainArea'
import HomeFooter from './components/HomeFooter'
export default {
    name:'Cart',
    components:{
        HomeHeader,
        HomeTab,
        MainArea,
        HomeFooter
    },
}
</script>
<style lang='stylus' scoped>

</style>