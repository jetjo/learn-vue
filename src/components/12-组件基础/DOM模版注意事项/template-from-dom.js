import { BlogPost1, BlogPost2, BlogPost3, BlogPost4 } from "./blog-post.js";
export default {
  components: {
    BlogPost: BlogPost1,
    BlogPOST: BlogPost2,
    BlogPost3,
    BlogPost4,
  },
  /*   [Vue warn]: Failed to resolve component: blogpost
  // vue框架收到的模版变成了:
  <template>
    <blogpost posttitle="hello!">{{ this.blog }}</blogpost>
    <blogpost posttitle="hello!">{{ this.blog }}</blogpost>
  </template> 
  // 导致两个blogpost标签未被识别为预期的组件
  */
  template: "#template-from-dom",

  // template: /* html */ `
  //   <div>
  //     <BlogPost postTitle="hello!" @updatePost="onUpdatePost">
  //       {{ this.blog }}
  //     </BlogPost>
  //     <BlogPOST postTITLE="hello!" @updatePOST="onUpdatePost">
  //       {{ this.blog }}
  //     </BlogPOST>
  //     <div><blog-post-3 />blog 3 default content!</div>
  //     <ul>
  //       <blog-post-4> </blog-post-4>
  //     </ul>
  //   </div>`,
  data() {
    return {
      blog: "Hello Vue.js!",
    };
  },
  methods: {
    onUpdatePost() {},
  },
};
