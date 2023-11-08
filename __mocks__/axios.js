// 对axios进行mock
import { vi } from "vitest";
import get from "./axios/get";

// NOTE: 这样是否形成死循环???
// import axios from "axios";

const axios = {};

axios.get = vi.fn(get);

export default axios;