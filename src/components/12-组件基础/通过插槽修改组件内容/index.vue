<template>
  <div>
    <!-- #region header -->
    <h3>header</h3>
    <!-- 错误语法 -->
    <!-- <slot #header/> -->
    <template>
      <!-- 错误语法 -->
      <!-- <slot #header></slot> -->
      <!-- NOTE: 放在template中无效 -->
      <!-- <slot name="header" /> -->
    </template>
    <slot name="header" />
    <!-- #endregion -->

    <!-- #region body -->
    <h3>body</h3>
    <slot name="body" />
    <!-- #endregion -->

    <!-- <h3>default</h3> -->
    <slot />
  </div>
</template>
