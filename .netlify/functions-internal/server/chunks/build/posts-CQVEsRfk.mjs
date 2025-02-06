import { notFound } from '@tanstack/react-router';
import o from 'redaxios';
import { A, l } from './index-zE0fNPw6.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'tiny-invariant';
import 'node:async_hooks';
import 'react/jsx-runtime';
import '@tanstack/router-devtools';
import 'react';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const a = A("app_utils_posts_ts--fetchPost_createServerFn_handler", "/_server", (t) => p.__executeServer(t)), n = A("app_utils_posts_ts--fetchPosts_createServerFn_handler", "/_server", (t) => h.__executeServer(t)), p = l({ method: "GET" }).validator((t) => t).handler(a, async ({ data: t }) => (console.info(`Fetching post with id ${t}...`), await o.get(`https://jsonplaceholder.typicode.com/posts/${t}`).then((e) => e.data).catch((e) => {
  throw console.error(e), e.status === 404 ? notFound() : e;
}))), h = l({ method: "GET" }).handler(n, async () => (console.info("Fetching posts..."), await new Promise((t) => setTimeout(t, 1e3)), o.get("https://jsonplaceholder.typicode.com/posts").then((t) => t.data.slice(0, 10))));

export { a as fetchPost_createServerFn_handler, n as fetchPosts_createServerFn_handler };
//# sourceMappingURL=posts-CQVEsRfk.mjs.map
