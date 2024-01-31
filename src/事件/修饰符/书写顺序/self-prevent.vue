<template>
	<form action="//127.0.0.1:5173">
		<!-- NOTE: action中的查询参数无效,不知为何 -->
		<!-- <form action="//127.0.0.1:5173/?from=form"> -->
		<p class="block-all-child">
			<button @click.prevent>
				<a href="//127.0.0.1:5173/?from=a">
					<!-- NOTE: //host:port后面不能直接跟? -->
					<!-- <a href="//127.0.0.1:5173?from=a"> -->
					<span>Click Prevent</span>
				</a>
			</button>
			<button>
				<a @click.prevent href="//127.0.0.1:5173/?from=a"
					><span>Click Prevent</span></a
				>
			</button>
			<button>
				<a href="//127.0.0.1:5173/?from=a"
					><span @click.prevent>Click Prevent</span></a
				>
			</button>
		</p>
		<p class="block-all-child">
			<button @click.prevent.self>
				<a href="//127.0.0.1:5173/?from=a"><span>Click Prevent</span></a>
			</button>
			<button>
				<a @click.prevent.self href="//127.0.0.1:5173/?from=a"
					><span>Click Prevent</span></a
				>
			</button>
			<button>
				<a href="//127.0.0.1:5173/?from=a"
					><span @click.prevent.self>Click Prevent</span></a
				>
			</button>
		</p>
		<p class="block-all-child">
			<button @click.self.prevent>
				<a href="//127.0.0.1:5173/?from=a">
					<!-- NOTE: //host:port后面不能直接跟? -->
					<!-- <a href="//127.0.0.1:5173?from=a"> -->
					<span>Click Prevent</span>
				</a>
			</button>
			<button>
				<a @click.self.prevent href="//127.0.0.1:5173/?from=a"
					><span>Click Prevent</span></a
				>
			</button>
			<button>
				<a href="//127.0.0.1:5173/?from=a"
					><span @click.self.prevent>Click Prevent</span></a
				>
			</button>
			<button>
				<a href="//127.0.0.1:5173/?from=a"><span>Click</span></a>
			</button>
		</p>
	</form>
</template>

<script setup>
	import { ref, onMounted } from "#vue";
	console.log(import.meta.env, "node_env");
</script>

<style>
	.block-all-child {
		clear: both;
	}
	.block-all-child button,
	.block-all-child a,
	.block-all-child span {
		display: block;
		padding: 30px 0;
		overflow: hidden;
		float: left;
		/* border: 1px solid #000; */
		background-clip: border-box;
	}
	.block-all-child button {
		appearance: none;
	}
	.block-all-child a {
		background-color: rgba(102, 0, 0, 0.249);
	}
	.block-all-child span {
		background-color: rgba(0, 102, 0, 0.263);
	}
</style>
