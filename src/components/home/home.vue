<template>
	<div class="home" v-el:home>
	    <div class="home-content">	
			<div class="banner-wrapper">
				<div class="banner-item">
					<a v-link="imglink">
						<img :src="imgurl">
					</a>
				</div>
			</div>
			<div class="ads-wrapper">
				<div class="ads-item">
					<a href="/">
						<img src="http://aissues.com/images/site/page_1.png">
						<span>除iPhone耳机孔苹果还想“干掉”这些东西</span>
					</a>
				</div>
				<div class="ads-item">
					<a href="/">
						<img src="http://aissues.com/images/site/page_2.png">
						<span>傅盛：最重要的事，只有一件</span>
					</a>
				</div>
			</div>
			<div class="recommendbook-wrapper">
			   <v-title msg="推荐小书"></v-title>
			   <ul class="book_list clearfix">
			   	   <li class="book_item" v-for="book in books">
				   	  <a href="/">
				   	  	<img :src="book.bookimg">
				   	  	<p class="book_item_title name_ell">
						      {{book.bookname}}
						</p>
				   	  </a> 
				   </li>
			   </ul>   
			</div>
			<div class="newbooks-wrapper">
				<v-title msg="最新小书"></v-title>
				<ul class="newbooks-list">
					<li class="newbook-item" v-for="item in newbooks">
						<a href="/">
							<p class="newbook-title name_ell">{{item.bookname}}</p>
							<p class="newbook-time name_ell">{{item.time}}</p>
						</a>
					</li>
				</ul>
			</div>
			<div class="news-classify-wrapper">
				<v-title msg="分类新闻"></v-title>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
    import title from 'components/title/title.vue';
    // import BScroll from 'better-scroll';
    const PUBLIC_URL='http://aissues.com';
	export default {
	  data() {
	      return {}
	  },
	  props: {
	         imgurl:{
	           type:String
	         },
	         imglink:{
	           type:String
	         },
	         bookid:{
	           type:Array
	         },
	         books:{
	           type:Array
	         },
	         newbooks:{
	           type:Array
	         }
	   },
	   created() {
	      this.$http.get('http://aissues.com/api/public/banner.php?num=1').then((response) => {
             response=response.body;
             if (response.status===1) {
                var data=response.data;
                this.imgurl=PUBLIC_URL+data[0].imgurl;
                this.imglink=data[0].link;
             }
	      });
	       var headers={
             'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
          }; 
	      this.$http.get('http://aissues.com/base/api/index_set/get.php').then((response) => {
                  response=response.body;
	              if (response.status===1) {
	                  // console.log(response.info);
	                  var recmdataId=response.data;
	                  this.bookid=recmdataId;
	                  // console.log(this.bookid)
	                 }
		      }).then(function() {
		      this.$http.post('http://aissues.com/api/public/get_book_id.php',{bookids:this.bookid},{headers:headers,emulateJSON:true}).then((response) => {
	              response=response.body;
	              if (response.status===1) {
	                 console.log(response.info);
	                 this.books=response.data;
	                 this.books.length=8;
	                 for (let i=0;i<response.data.length;i++) {
	                    response.data[i].bookimg=PUBLIC_URL+response.data[i].bookimg;
	                    this.books.bookimg=response.data[i].bookimg
	                 }

	              } else {
	                 console.log(response.info)
	              }
		      }) });
		      this.$http.get('http://aissues.com/api/public/get_new_books.php').then((response) => {
                  response=response.body;
                  if (response.status===1) {
                     this.newbooks=response.data;
                  }
		      })
	   },
	   /* watch: {
	      'home'() {
	          this._initScroll();
	      }
	   }, 
	   ready() {
	      this._initScroll();
	   }, */
	   methods: {
	    /*  _initScroll() {
	         this.$nextTick(() => {
	            if (!this.scroll) {
	               this.scroll = new BScroll(this.$els.home,{
	                   click:true,
	                   probeType:3
	               });
	            } else {
	               this.scroll.refresh();
	            }
	         })
	      } */
	   },
	   components:{
	      'v-title':title
	   }
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.home{
		// position: absolute;
		// left: 0;
		// top: 48px;
		// bottom: 0;
		// width: 100%;
		// overflow:hidden;
		margin-top: 48px;
		.banner-wrapper{
			.banner-item{
				width: 100%;
				a{
					display: inline-block;
					img{
						width: 100%;
					}
				}
			}
		}
		.ads-wrapper{
			width: 99%;
			margin: auto;
			display: flex;			
			.ads-item{
				flex:1;
				height: 70px;
			    overflow: hidden;
				border:1px solid #fff;
				border-radius: 3px;	
				position: relative;
				a{
					display: inline-block;
					img{
						width: 100%;    	
					}
					span{
						position: absolute;
						top: 25px;
						left: 0;
						width: 100%;
						text-align: center;
						font-size: 14px;
						color: #fff;
						text-align: center;
						display: block;
					}
				}
			}
		}
		.recommendbook-wrapper{
			width: 100%;
			overflow: hidden;
			margin-top: 5px;
			border-top: 1px solid #E9E9E9;
			border-bottom: 1px solid #E9E9E9;
			box-shadow: 2px 2px 2px #ddd;
			.book_list{
				padding:1%;
				.book_item{
					display: inline-block;
					overflow:hidden;
					width: 23.5%;
					margin-right:1%;
					&:nth-child(4n+1){
						margin-left:1.5%;
					}
					a{
						display: inline-block;
						width: 100%;
						img{
							width: 100%;
							box-shadow: 2px 2px 2px #ddd;
							overflow: hidden;
							&:after{
								content:'';
								display: block;
								padding-top:133%;
							}
						}
						.book_item_title{
	                        text-align: center;
							line-height: 25px;
							color: #373737;
							font-size: 12px;
						}
					}
				}
			}
			
		}
		.newbooks-wrapper{
			width: 100%;
			overflow: hidden;
			margin-top: 5px;
			border-top: 1px solid #e9e9e9;
			border-bottom: 1px solid #e9e9e9;
			box-shadow: 2px 2px 2px #ddd;
			.newbooks-list{
				.newbook-item{
					a{
						padding:3px 10px;
						display: flex;
						color: #5F5F5F;
						line-height: 20px;
						font-size: 12px;
						border-bottom: 1px dashed #F2F2F2;
						.newbook-title{
							flex:0 0 180px;
							width:180px;	
						}
						.newbook-time{
							flex:1;	
							text-align: right;					
						}
					}
				}
			}
		}
		.news-classify-wrapper{
			width: 100%;
			overflow: hidden;
			margin-top: 5px;
			border-top: 1px solid #e9e9e9;
			border-bottom: 1px solid #e9e9e9;
			box-shadow: 2px 2px 2px #ddd;
		}
	}
</style>