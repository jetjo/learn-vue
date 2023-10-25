<template>
    <div>
        系统按键,可能理解为需配合其他按键使用的键,单独使用没有数据输入效果,
        有以下四个:
        <ul>
            <li>.shift</li>
            <li>.ctrl</li>
            <li>.alt</li>
            <li>.mate
                <p>MacOS上的Command键或者Windows上的windows键</p>
            </li>
            <input @keyup.shift=" onKeyup " type="text" placeholder="监听包含shift keyup">
            <input @keyup.ctrl=" onKeyup " type="text" placeholder="监听包含ctrl keyup">
            <input @keyup.alt=" onKeyup " type="text" placeholder="监听包含alt keyup">
            <input @keyup.meta=" onKeyup " type="text" placeholder="监听包含command keyup">
            这些修饰符的的意思是,按下这些键的同时按别的键,才会触发事件
        </ul>
        特殊按键修饰符.exact
        <input type="text" @keydown.shift.exact=" onKeydown " placeholder="四个控制键中仅仅按下shift时才能触发">
    </div>
</template>

<script setup>
/** @param e { KeyboardEvent } */
function onKeyup ( e ) {
    console.log( '按下的物理按键的值: ', e.key );
}
/** @param e { KeyboardEvent } */
function onKeydown ( e ) {
    console.log( '按下的物理按键的值: ', e.key );
}

</script>
