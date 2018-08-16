<template>
    <div class="goodswrapper">
        <div class="goods-filter">
            <div class="filter">
                <p>排序：</p>
                <p class="original">默认</p>
                <p class="goods-price" @click="sortPrice()">价格<span>↑</span></p>
            </div>
        </div>
        <div class="main-content">
            <div class="main-left">
                <div class="main-left-title">价格：</div>
                <ul class="price-select">
                    <li class="price-select-item" @click="selectPrice('all')">全部</li>
                    <li class="price-select-item" v-for="(item,index) of price" @click="selectPrice(index)">{{item.minprice}}-{{item.highprice}}</li>
                </ul>
            </div>
            <div class="main-right">
                <div class="main-righ-item" v-for="(item,index) of goodsList" :key="index">
                    <img v-lazy="'/api/static/' + item.productImg" :alt="item.productName" width='170' class="image-abc">
                    <p class="item-name">{{item.productName}}</p>
                    <p class="item-price">￥{{item.productPrice}}.00</p>
                    <div class="addCar">加入购物车</div>
                </div>
            </div>
            <div v-infinite-scroll='loadMore' infinite-scroll-disabled="busy" infinite-scroll-distance='20'>
                <!-- 下拉加载更多 -->
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'MainArea',
    data () {
        return{
            goodsList:[],
            //价格过滤器
            price:[
                {
                    "minprice": "0.00",
                    "highprice": "100.00"
                },
                {
                    "minprice": "100.00",
                    "highprice": "500.00"
                },
                {
                    "minprice": "500.00",
                    "highprice": "1000.00"
                },
                {
                    "minprice": "1000.00",
                    "highprice": "9000.00"
                },
              
            ],
            page: 0,//默认分页为第一页
            pageSize: 8,//默认每页显示8条数据
            orderFlag: true,//默认是按照正序价格排列
            priceLevel: 'all',//默认选中的价格范围
            busy: false,//默认允许滚动执行loadMore函数
            flag:false//默认没有分页
}
    },
    methods:{
        getGoodsList(flag) {
            axios.get('/api/goods/list',{
                params:{
                    page: this.page,
                    pageSize: 8,
                    orderFlag: this.orderFlag,//get请求的数据之前写死了为true,这里应该是变量
                    priceLevel: this.priceLevel,
                }
            }).then((res) => {
                if (res.status === 200) {
                    this.goodsList = res.data
                    if (flag) {
                        //多次加载数据，则需要把数据相加
                        this.goodsList = this.goodsList.concat(res.data)
                        if (res.data.length == 0) {//判断数是否加载完成，就让数据截停
                             //没有数据可加载就关闭无限滚动
                            this.busy = true
                            
                        }else{
                            //否则仍可以触发无限滚动
                            this.busy = false
                            
                        }
                    }else{
                        // 第一次加载数据
                        this.goodsList = res.data
                        // 当第一次加载数据完之后，把这个滚动到底部的函数触发打开
                        this.busy = false
                    }
                    console.log( this.goodsList)
                    
                }
            }).catch((e) => {
                console.log(e)
            })
        },
        // 价格排序
        sortPrice () {
            // 按价格排序，在data里定义初始的orderFlag数据，
           this.orderFlag = !this.orderFlag//取反，新值需要传到get数据里的
           this.page = 0
           this.getGoodsList()
        },
        // 等级排序筛选
        selectPrice (index){
            // 按等级选择价格，和priceLevel有关,priceLevel的值有all,0,1,2,3,即价格区间的索引值相关
            this.priceLevel = index
            this.page = 0
            this.getGoodsList()
        },
        // 加载更多方法
        loadMore () {
            this.busy = true
            //官方示例中延迟了0.3秒，防止滚动条滚动时的频繁请求数据,即1s 后加载下一页数据
            setTimeout(() => {
                //这里请求接口去拿数据，实际应该是调用一个请求数据的方法
                this.page++
                this.getGoodsList(true)
            }, 300);
        }

    },
    mounted () {
        this.getGoodsList()
    }
   
}
</script>
<style lang='stylus' scoped>
.goodswrapper
    width 1220px
    height auto
    border-bottom 2px solid #e9e9e9
    padding 40px 40px 40px
    background-color #f5f7fc
    .goods-filter
        width 100%
        height 60px
        line-height 60px
        background-color #fff
        .filter
            display flex
            float right
            padding-right 30px 
            p 
                padding-right 20px
                color #605f5f  
                cursor pointer
                &:hover
                    color #ee7a23
                &.original
                    color #ee7a23
    .main-content
        width 100%
        height auto
        padding-top 20px
        display flex
        .main-left
            width 200px
            padding-left 30px
            .main-left-title
                line-height 40px
                font-size 16px
                font-weight 500
                padding-bottom 20px
            .price-select-item
                color #605f5f
                height 20px
                line-height 20px
                margin-bottom  30px
                cursor pointer
                &:hover
                    color #ee7a23
                    padding-left 20px
                    border-left 3px solid #ee7a23
        .main-right
            width 1000px
            height auto
            display flex
            flex-wrap wrap
            .main-righ-item
                background-color #ffffff
                padding 20px
                margin 0 20px 20px 0
                box-sizing border-box
                border 2px solid #e9e9e9
                cursor pointer
                transition all 1s
                &:hover
                    box-shadow 1px 1px 10px #ee7a23 
                .image-abc
                    padding-bottom 20px
                .item-name
                    color #605f5f
                    font-weight 700
                    height 28px
                    line-height 28px
                .item-price
                    font-size 18px
                    line-height 20px
                    color #d1434a
                    margin 40px auto
                .addCar
                    width 100%
                    height 40px
                    line-height 40px
                    color #d1434a
                    text-align center
                    border 2px solid #d1434a
                    cursor pointer
                    &:hover 
                        background-color rgba(209, 67, 74, 0.75)
                        color #fff




            
</style>