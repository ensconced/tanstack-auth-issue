import { $, q } from '../nitro/nitro.mjs';

const s = q("app_utils_posts_ts--fetchPost_createServerFn_handler", "/_server"), o = $({ method: "GET" }).validator((r) => r).handler(s), a = q("app_utils_posts_ts--fetchPosts_createServerFn_handler", "/_server"), _ = $({ method: "GET" }).handler(a);

export { _, o };
//# sourceMappingURL=posts-Cssr0xTt.mjs.map
