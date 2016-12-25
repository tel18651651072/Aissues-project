<template>
	<div class="navbar">
	    <div class="container">
	    	<div class="login-wrapper border-1px" v-show="false">
	    	    <span class="login-icon">
	    	    	<i class="icon-user-tie"></i>
	    	    </span>
				<span class="login">登录</span>
			</div>
			<div class="navbar-nav">
				<!-- <ul>
					<li v-for="item in navbaritems">{{ item.message }}</li>
				</ul> -->
				<div class="navbar-item">
					<a v-link="{path:'/home'}">首页</a>
				</div>
				<div class="navbar-item">
					<a v-link="{path:'/frontend'}">前端</a>
				</div>
				<div class="navbar-item">
					<a v-link="{path:'/android'}">Android</a>
				</div>
				<div class="navbar-item">
					<a v-link="{path:'/mobile'}">移动端</a>
				</div>
				<div class="navbar-item">
					<a v-link="{path:'/operation'}">运维</a>
				</div>
				<div class="navbar-item">
					<a v-link="{path:'/more'}">更多...</a>
				</div>
			</div>
			
	    </div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
	  data() {
	     return {
            /* navbaritems: [
		       {message:'首页'},
		       {message:'前端'},
		       {message:'Android'},
		       {message:'移动端'},
		       {message:'运维'},
		       {message:'更多...'}
		     ] */
	     }
	  }
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixin.styl';
	 .navbar{
	 	.container{
	 		padding: 12px;
	 		.login-wrapper{
	 			padding-bottom: 10px;
		 		border-1px(#EBEBEB);
		 		display: flex;
		 		.login-icon{
		 			flex:0 0 25px;
		 			padding: 3px;
		 			border-radius: 50%;
		 			background: #fff;
		 			.icon-user-tie{
		 				color:#38f;
				 		font-size: 25px;
				 	}
		 		}
			 	.login{
			 		flex:1;
			 		height: 100%;
			 		font-size: 12px;
			 		vertical-align: top;
			 		line-height: 31px;
			 		margin-left: 5px;
			 	}
		 	}
		 	.navbar-nav{
		 		.navbar-item{
		 			display: table;
		 			width: 100%;
		 			height: 40px;
		 			line-height: 40px;
		 			text-align: center;
		 			border-1px(#ebebeb);
		 			&>a{
		 				display: inline-block;
		 				width: 100%;
		 				color:#fff;
		 				font-size: 12px;
		 				&.active{
				            color: #ff9912;
				        }
		 			}
		 		}
		 	}
	 	}
	 	
	 	
	 }
</style>