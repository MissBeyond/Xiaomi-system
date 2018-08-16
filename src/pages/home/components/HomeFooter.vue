<template>
    <footer class="footer">
        <div class="footer-left-area">
            <span>地区</span>
            <select name="area-select" id="area-select" class="area-select">
                <option value="中国">中国</option>
                <option value="USA">USA</option>
                <option value="India">India</option>
            </select>
        </div>
        <ul class="footer-right-area">
            <li class="item-title">Copyright&nbsp©️&nbsptaoMall.com</li>
            <li class="item-title"><a href="#">关于我们</a></li>
            <li class="item-title"><a href="#">团队合作</a></li>
            <li class="item-title"><a href="#">隐私策略</a></li>
        </ul>
    </footer>
</template>
<script>
export default {
    name:"HomeFooter"
}
</script>
<style lang='stylus' scoped>
.footer
    width 100%
    height 100%
    color #a1a1a1
    .footer-left-area
        float left
        height 100px
        line-height 100px
        padding-left 50px
    .footer-right-area
        display flex
        height 100px
        line-height 100px
        float right
        margin-right 30px
        .item-title
            padding-right 20px
            a   
                color #a1a1a1
                cursor pointer
                &:hover
                    color #d1434a
       

        
            

</style>

