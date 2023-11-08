import { vi } from "vitest";

const Client = vi.fn()
Client.prototype.connect = vi.fn()
Client.prototype.query = vi.fn()
Client.prototype.end = vi.fn()

export { Client }