import type { Component } from "#vue";

interface Com_Map {
	/**
	 * key: 浏览器地址栏中地址的hash
	 * value: 1、如果是空字符串, 则将`#${key}`作为key,去页面`<script type="importmap">`中寻找对应的组件地址
	 * value: 2、如果是非空字符串, 则将`new URL(value, importUrl)`作为组件路径
	 */
	[key: string]: string | "" | Component;
	"": string | Component;
}

export type { Com_Map };
