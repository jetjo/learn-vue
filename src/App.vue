<script setup>
import { onMounted } from "vue";
import RawHtml from "./components/0-模版语法/原始html.vue";
import booleanAttribute from "./components/0-模版语法/布尔型attribute.vue";
// Dynamically Binding Multiple Attributes
import MultiAttrBind from "./components/0-模版语法/动态绑定多个值.vue";
import ExpressionBind from "./components/0-模版语法/模版中的表达式.vue";
import DirectiveArg from "./components/1-指令/参数.vue";
import RefBase from "./components/3-响应式基础/ref基础.vue";

import RefDeepReactivity from "./components/3-响应式基础/ref深层响应性.vue";
import AboutReactive from "./components/3-响应式基础/reactive特性.vue";
import AsReactiveObjProp from "./components/3-响应式基础/额外的ref解包细节/1作为reactive对象的属性.vue";
import AsElementOfNativeCollectionType from "./components/3-响应式基础/额外的ref解包细节/1-1数组和集合的注意事项.vue";
import CaveatInRenderContext from "./components/3-响应式基础/额外的ref解包细节/1-2在模板中解包的注意事项.vue";

// import ClassAndStyleBind from './components/5-Class与Style绑定/index.vue'

// import ConditionalRendering from './components/6-条件渲染/vif与vshow.vue'

import EventModifiers from "./components/8-事件处理/事件修饰符.vue";
import KeyboardModifiers from "./components/8-事件处理/按键修饰符.vue";
import ControlKeyboardModifiers from "./components/8-事件处理/系统按键修饰符.vue";

import FormVModel from "./內建指令/双向绑定/原生标签-表单/v-model.vue";

import TemplateRefBase from "./Ref/base.vue";

import ListTemplateRef from "./Ref/list.vue";
import FunctionTemplateRef from "./Ref/function.vue";
import ComponentTemplateRef from "./Ref/component.vue";

import ComBaseDefineProps from "./components/12-组件基础/传递Props/defineProps.vue";
import ComBaseSetupProps from "./components/12-组件基础/传递Props/setup.vue";

import ComBaseDefineEmits from "./components/12-组件基础/监听事件/defineEmits.vue";
import ComBaseSetupEmits from "./components/12-组件基础/监听事件/setup.vue";

// import ComBaseSlot from "./components/12-组件基础/通过插槽修改组件内容/index-parent.vue";

import ComBaseDynamicCom from "./components/12-组件基础/动态组件/index.vue";

import DomTemplateParsingCaveats from "./components/12-组件基础/DOM模版注意事项/index.vue";

// import FancyList from "./插槽应用案例/FancyList/Item1.vue";
import FancyList from "./內建指令/插槽/插槽应用案例/FancyList/Item1.vue";
import PostList from "./插槽应用案例/FancyList/Item2.vue";

// import MouseTracker from "./插槽应用案例/无渲染组件/MouseTracker/Item1.vue";
import MouseTracker from "./內建指令/插槽/插槽应用案例/无渲染组件/MouseTracker/Item1.vue";
import MouseTrackerLn from "./逻辑复用/无渲染组件/MouseTracker/Item1.vue"

import InjectDefault from "./依赖注入/默认值/provide-com.vue";

import InjectReactive from "./依赖注入/响应式数据/provide-com.vue";
import InjectSymbol from "./依赖注入/Symbol/provide-com.vue";

import AsyncComBasic from "./异步组件/basic-usage.vue";
import AsyncComState from "./异步组件/加载与错误状态/index.vue";

import LearnComposable from "./逻辑复用/组合式函数/index.vue";

import LearnReactiveComposable from "./逻辑复用/组合式函数/响应式状态/index.vue";

import LearnPlugin from "./逻辑复用/插件/Lindex.vue";
import TransitionVue from "./CSS动画/搭配内置组件/transition/基本用法.vue";
import TransitionCustomClass from "./CSS动画/搭配内置组件/transition/自定义过渡class.vue";
import TransitionNested from "./CSS动画/搭配内置组件/transition/nested-transition-duration.vue";
import transitionJsHooks from "./CSS动画/搭配内置组件/transition/transition-js-hooks.vue";
import AppearTransition from "./CSS动画/搭配内置组件/transition/appear-transition.vue";
import TransitionModes from "./CSS动画/搭配内置组件/transition/transition-modes.vue";

import TransitionGroupVue from "./CSS动画/搭配内置组件/transition-group/基本用法-FLIP列表过渡.vue";
import TransitionGroupStaggering from "./CSS动画/搭配内置组件/transition-group/staggering-list-transitions.vue";

// import TeleportVue from "./teleport/index.vue";

import LearnRoute from "./路由/index.vue"

import LearnStateManage from './集中式状态管理/简单实现/index.vue'

import SlotCaveats from './內建指令/插槽/插槽语法/插槽注意事项/index.vue'
import SlotNamingParam from './內建指令/插槽/插槽语法/具名插槽与传参/index.vue'
import DynamicSlot from './內建指令/插槽/插槽语法/动态插槽/index.vue'

import LocalRegisterDirective from './自定义指令/两种注册方式/方式一局部注册.vue'
import DirectiveParams from './自定义指令/指令钩子/钩子参数/index.vue'
import DirectiveHookCallOrder from './自定义指令/指令钩子/钩子调用时机/更新/index.vue'
import DirectiveCreateHookCallOrder from './自定义指令/指令钩子/钩子调用时机/创建与挂载和卸载/index.vue'

onMounted(() => {
	//
	//
	// throw new Error( 'mounted error from App.vue' );
});
</script>

<template>
	<div>
		<!-- <booleanAttribute /> -->
		<!-- <multi-attr-bind /> -->
		<!-- <ExpressionBind /> -->
		<!-- <RawHtml /> -->
		<!-- <RefDeepReactivity /> -->
		<!-- <about-reactive /> -->
		<!-- <AsElementOfNativeCollectionType />  -->
		<!-- <my-component></my-component>
		<directive-arg />
		<RefBase />
-->
		<!-- <AsReactiveObjProp /> -->
		<!-- <CaveatInRenderContext /> -->
		<!-- <ClassAndStyleBind /> -->
		<!-- <ConditionalRendering /> -->
		<!-- <FormVModel /> -->
		<!-- <EventModifiers /> -->
		<!-- <KeyboardModifiers /> -->
		<!-- <ControlKeyboardModifiers /> -->
		<!-- <TemplateRefBase /> -->
		<!-- <ListTemplateRef /> -->
		<!-- <FunctionTemplateRef /> -->
		<!-- NOTE: 在单文件组件中，推荐为子组件使用 PascalCase 的标签名，以此来和原生的 HTML 元素作区分。 -->
		<!-- NOTE: 如果是直接在 DOM 中书写该模板 -->
		<!-- <ComponentTemplateRef /> -->
		<!-- <ComBaseDefineProps title="hello" content="world" /> -->
		<!-- <ComBaseSetupProps title="hello" content="world" /> -->

		<!-- <ComBaseDefineEmits @add="(e) => console.log('事件数据:', e)" /> -->
		<!-- <ComBaseSetupEmits @add="(e) => console.log('事件数据:', e)" /> -->

		<!-- <ComBaseSlot /> -->
		<!-- <ComBaseDynamicCom /> -->
		<!-- <DomTemplateParsingCaveats /> -->

		<!-- <FancyList /> -->
		<!-- <MouseTracker /> -->
		<!-- <MouseTrackerLn /> -->
		<!-- <InjectDefault /> -->
		<!-- <InjectReactive /> -->
		<!-- <InjectSymbol /> -->
		<!-- <AsyncComBasic /> -->
		<!-- <AsyncComState /> -->
		<!-- <LearnComposable /> -->
		<!-- <LearnReactiveComposable /> -->
		<!-- <LearnPlugin /> -->
		<!-- <TransitionVue /> -->
		<!-- <TransitionCustomClass /> -->
		<!-- <TransitionNested /> -->
		<!-- <transitionJsHooks /> -->
		<!-- <AppearTransition /> -->
		<!-- <TransitionModes /> -->
		<!-- <TransitionGroupVue /> -->
		<!-- <TransitionGroupStaggering /> -->
		<!-- <TeleportVue /> -->
		<!-- <LearnRoute /> -->
		<!-- <LearnStateManage /> -->
		<!-- <SlotCaveats /> -->
		<!-- <SlotNamingParam /> -->
		<!-- <DynamicSlot /> -->
		<!-- <LocalRegisterDirective /> -->
		<!-- <DirectiveParams /> -->
		<!-- <DirectiveHookCallOrder /> -->
		<!-- <DirectiveCreateHookCallOrder /> -->

		<PostList />
	</div>
</template>

<style scoped>
header {
	line-height: 1.5;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}
}
</style>
