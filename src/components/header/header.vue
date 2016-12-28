<template>
	<div class="header">
		<div class="content-wrapper border-1px">
			<a href="/" class="header_logo">
		        Aissues
		    </a>
		    <div class="header_search">
		      <i class="icon-search"></i>
		      <input class="search_input" id="search_input" placeholder="搜索">
		    </div>
		    <div class="menu-wrapper" @click="toggleNav" v-el:menu-wrapper transition="move">
		    	<i class="icon-menu"></i>
		    </div>
		</div>
		<div class="navbar-wrapper" v-show="showFlag"  transition="move" v-el:navbar-wrapper>
			<navbar></navbar>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
 import navbar from 'components/navbar/navbar.vue';
	export default {
	   data() {
	      return {
	        showFlag:false
	      }
	   },
	   methods:{
	     toggleNav:function() {
	         this.showFlag=!this.showFlag;
	        /* window.alert(window.innerWidth-this.$els.menuWrapper.offsetLeft) */
	         if (window.innerWidth-this.$els.menuWrapper.offsetLeft===28) {
	            this.$els.menuWrapper.style.right='37%';
	         } else {
	            this.$els.menuWrapper.style.right=12+'px';
	         }
	         
	     }
	   },
	   components:{
	     navbar
	   }
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '../../common/stylus/mixin.styl';
	.header{
       overflow: hidden;
       background: #fff;
       .content-wrapper{
       	  padding: 12px;
       	  position: relative;
       	  display: flex;
       	  border-1px(#EBEBEB);
	       	.header_logo{
	       	  	 color: rgb(51, 136, 255);
	       	  	 font-size: 14px;
	       	  	 flex:0 0 60px;
	       	  	 width:60px;
	       	  	 vertical-align:top;
	       	  	 height: 100%;
	       	  	 line-height: 24px;
	       	}
	       	.header_search{
	       	  	flex:1;
	       	  	color: #555555;
	            font-size: 12px;
	            position: relative;
	            .search_input{
	            	width: 115px;
					height: 20px;
					outline: none;
					padding-left: 17px;
					font-size: 12px;
					border-radius: 3px;
					background-size: 12px 12px;
					background-repeat: no-repeat;
					background-position: 3px;
					border: 1px solid #ddd;
	            }
	            .icon-search{
	            	position: absolute;
	            	top: 7px;
	            	left: 3px;
	            	color: #ddd;
	            	font-size: 12px;
	            }
       	    }
       	    .menu-wrapper{
       	    	position: absolute;
       	    	top: 16px;
       	    	right: 12px;
       	    	.icon-menu{
	       	    	color: rgb(51, 136, 255);
	       	    	font-size: 16px;
       	        }
       	        &.move-transition{
			 	  	transition: all 0.3s linear;
			 	  	transform:translate3d(0,0,0);
			 	}
		 	    &.move-enter, &.move-leave{
			 	  	transform:translate3d(37%,0,0);
			 	}
       	    }	    
       }
       .navbar-wrapper{
       	  width: 35%;
	 	  height: 100%;
	 	  position: fixed;
	 	  top: 0;
	 	  right:0px;
	 	  background: #38f;
	 	  color: #fff;
	 	  z-index: 50;
	 	  &.move-transition{
	 	  	transition: all 0.3s linear;
	 	  	transform:translate3d(0,0,0);
	 	  }
	 	  &.move-enter, &.move-leave{
	 	  	transform:translate3d(35%,0,0);
	 	  }
       }
	}
</style>