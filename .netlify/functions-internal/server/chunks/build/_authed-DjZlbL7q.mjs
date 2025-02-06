import { p as p$1, f } from './prisma-y_Uazyjg.mjs';
import { s } from './session-lOfsFNRv.mjs';
import { A, l } from './index-zE0fNPw6.mjs';
import 'node:crypto';
import '@prisma/client';
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
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import '@tanstack/react-router';
import 'tiny-invariant';
import 'node:async_hooks';
import 'react/jsx-runtime';
import '@tanstack/router-devtools';
import 'react';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const p = A("app_routes_authed_tsx--loginFn_createServerFn_handler", "/_server", (r) => m.__executeServer(r)), m = l({ method: "POST" }).validator((r) => r).handler(p, async ({ data: r }) => {
  const e = await p$1.user.findUnique({ where: { email: r.email } });
  if (!e) return { error: true, userNotFound: true, message: "User not found" };
  const s$1 = await f(r.password);
  if (e.password !== s$1) return { error: true, message: "Incorrect password" };
  await (await s()).update({ userEmail: e.email });
});

export { p as loginFn_createServerFn_handler };
//# sourceMappingURL=_authed-DjZlbL7q.mjs.map
