<template>
  <div>
    如果组件的模版直接来源于DOM,则有一下3个注意事项:
    <ul>
      <li>
        1、大小写问题
        <pre>
            因为DOM规范中,标签名称不区分大小写,而Vue的标签名(PascalCase)区分大小写,
            如果两个组件不区分大小写时同名会造成混淆,这是因为模版来自于DOM时,
            vue收到的模版字符串中所有的大写字母都已被转换为小写,
            所以为防止混淆,组件名不要只靠大小写区分,并且定义在DOM中的模版,组件名
            应直接使用 kebab-case形式,即直观又不易出错;
            对于组件属性名(vue中是camelCase形式),经过DOM解析后,vues收到的也变成
            了kebab-case形式,所以同理,直接定义在DOM中的模版,其中自定义组件的属性名
            同样要直接使用kebab- case形式;
        </pre>
      </li>
      <li>2、标签闭合问题
        <pre>
            DOM中只允许少数几个标签可使用隐式闭合语法(比如&lt;input />、&lt;br />、&lt;img />),
            虽然在Vue模版中,自定义组件都可以隐式闭合;
            但如果在DOM模版中,自定义组件使用隐式闭合,则会导致解析错误;
        </pre>
      </li>
      <li>3、子标签类型问题(元素位置限制)
        <pre>
            DOM中,一些原生标签的子标签只能是特定类型,比如&lt;ul>的子标签只能是&lt;li>,
            Vue模版却没有此形式限制;
            但如果模版放在DOM中,则会导致解析错误;
        </pre>
      </li>
    </ul>
    <TemplateFromDom />
  </div>
</template>

<script setup>
import TemplateFromDom from "./template-from-dom";
</script>

<style lang="scss" scoped></style>
