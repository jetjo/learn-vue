// JavaScript 中的 camelCase
const BlogPost1 = {
  props: ["postTitle"],
  emits: ["updatePost"],
  template: `
    <div>
      <h3>{{ postTitle }} - 1</h3>
      <slot />
    </div>
  `,
  mounted() {
    this.$emit("updatePost", "Hello from BlogPost-1");
  },
};
// JavaScript 中的 camelCase
const BlogPost2 = {
  props: ["postTITLE"],
  emits: ["updatePOST"],
  template: `
    <div>
      <h3>{{ postTITLE }} - 2</h3>
      <slot />
    </div>
  `,
  mounted() {
    this.$emit("updatePOST", "Hello from BlogPost-2");
  },
};
const BlogPost3 = {
  template: /* html */ 
    `<h3>post - 3</h3> 
    <p style="color: red;"> <slot /> </p>`,
};
const BlogPost4 = {
  template: /* html */ 
    `<li>blog post 4</li>`,
};
export { BlogPost1, BlogPost2, BlogPost3, BlogPost4 };
