import { expect } from "vitest";
import { toBeFoo } from "./assertions/foo";
import { toBeAsyncFoo } from "./assertions/foo.async";
import { toBeWithinRange } from "./assertions/number-range";

expect.extend({ toBeFoo });
expect.extend({ toBeAsyncFoo });
expect.extend({ toBeWithinRange });