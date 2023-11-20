
## `mount`, `shallow` and `stubs`: which one and when?

As a rule of thumb, **the more your tests resemble the way your software is used**, the more confidence they can give you.

Tests that use `mount` will render the entire component hierarchy, which is closer to what the user will experience in a real browser.

On the other hand, tests using `shallow` are focused on a specific component. `shallow` can be useful for testing advanced components in complete isolation. If you just have one or two components that are not relevant to your tests, consider using `mount` in combination with `stubs` instead of `shallow`. The more you stub, the less production-like your test becomes.

Keep in mind that whether you are doing a full mount or a shallow render, good tests focus on inputs (`props` and user interaction, such as with `trigger`) and outputs (the DOM elements that are rendered, and events), not implementation details.

So regardless of which mounting method you choose, we suggest keeping these guidelines in mind.

## Conclusion

- use `global.stubs` to replace a component or directive with a dummy one to simplify your tests
- use `shallow: true` (or `shallowMount`) to stub out all child components
- use `global.renderStubDefaultSlot` to render the default `<slot>` for a stubbed component
