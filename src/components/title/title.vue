<template>
	<div class="v-title">
	    <i class="icon-book"></i>
		{{msg}}
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
	  props:{
	     msg:{
	       type:String
	     }
	  }
	};
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixin.styl'
	.v-title{
		padding: 5px;
		margin:5px 0;
		border-1px(#E9E9E9);
		font-size: 12px;
		color: #333;
		.icon-book{
			color: #38f;
		}
	}
</style>