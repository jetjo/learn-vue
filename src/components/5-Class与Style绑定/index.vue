<template>
    <div class="box">
        html元素的class和style属性和其他属性一样,可以使用v-bind绑定到一个字符串
        类型的变量上,但是由于style和class的特殊性,因此，
        Vue 专门为 class 和 style 的 v-bind 用法提供了特殊的功能增强。
        除了字符串外，表达式的值也可以是对象或数组。
        <ul>
            <li>1、绑定到对象
                <!-- NOTE: 绑定到对象时,类名来源于对象的成员名,当成员是逻辑真时,对应成员的名称出现在class列表中 -->
                <ul>
                    <li>1、内联对象
                        <pre>
&lt;div class="static"
    :class="{ active: isActive, 'text-danger': hasError }">&lt;/div></pre>
                    </li>
                    <li>2、绑定到reactive
                        <pre>
const classObject = reactive({
    active: true,
    'text-danger': false
})</pre>
                        <pre>&lt;div :class="classObject">&lt;/div></pre>
                    </li>
                    <li>3、绑定到计算属性
                        <!-- <pre>
const isActive = ref(true)
const error = ref(null)

const classObject = computed(() => ({
    active: isActive.value && !error.value,
    'text-danger': error.value && error.value.type === 'fatal'
}))</pre>
                        <pre>&lt;div :class="classObject">&lt;/div></pre> -->
                        <pre>
<code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isActive </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> error </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> classObject </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">computed</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">active</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> isActive</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">error</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">'</span><span style="color:#F07178;">text-danger</span><span style="color:#89DDFF;">'</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> error</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> error</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">type </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">'</span><span style="color:#C3E88D;">fatal</span><span style="color:#89DDFF;">'</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">))</span></span></code>
                        </pre>
                        <pre>
<code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">"</span><span style="color:#A6ACCD;">classObject</span><span style="color:#89DDFF;">"</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code>
                        </pre>
                    </li>
                </ul>
            </li>
            <li>2、绑定到数组
                <!-- NOTE: 绑定到数组时,因为数组中的元素没有名称只有一个下标,
                    所以当元素的类型是字符串时,元素值就会插入class列表中,
                当元素的类型不是字符串也不是普通对象时,元素被忽略??? -->
                <ul>
                    <li>1、内联数组</li>
                    <li>2、结合三元表达式
                        <pre>
const activeClass = ref('active')
const errorClass = ref('text-danger')
                        </pre>
                        <pre>
&lt;div :class="[isActive ? activeClass : '', errorClass]">&lt;/div>
                        </pre>
                    </li>
                </ul>
            </li>
            <li class="pre"
                :class=" [ defaultClassName, errorClassName, classNameObject, isActive, isActiveBool, isActiveNumber ] ">
                3、数组嵌套对象
                <!-- NOTE: 但是当数组元素是对象时,此元素又会按照对象来处理 -->
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// NOTE: 测试空字符串
const isError = ref( '' );
// const isError = ref(false);
const isActiveBool = ref( true );
const isActiveNumber = ref( 888 );
const isActive = ref( 'true' );
const defaultClassName = ref( 'li' );
const errorClassName = ref( '' );
const classNameObject = computed( () => ( {
    'is-error': isError.value,
    'is-active': isActive.value,
} ) );
</script>

<style lang="scss" scoped>
.box {

    pre,
    .pre {
        background-color: #1e131d;
        color: #f9f4dc;
        margin: 10px 0;
    }
    
    /** NOTE: 深度作用的语法是什么??? */
    .li {
        font-size: 1.3em;
    }
}
</style>
