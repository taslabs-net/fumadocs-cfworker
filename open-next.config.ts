import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Temporarily disable R2 caching to get deployment working
// Will configure with custom binding name later
export default defineCloudflareConfig({
  // incrementalCache: r2IncrementalCache,
});
