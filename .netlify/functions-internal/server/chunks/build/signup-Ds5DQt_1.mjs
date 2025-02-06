import { redirect, createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import { p, f as f$1 } from './prisma-y_Uazyjg.mjs';
import { s } from './session-lOfsFNRv.mjs';
import { A, l as l$1 } from './index-zE0fNPw6.mjs';
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
import 'tiny-invariant';
import 'node:async_hooks';
import 'react/jsx-runtime';
import '@tanstack/router-devtools';
import 'react';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const l = () => import('./signup-MdmJsJON.mjs'), w = A("app_routes_signup_tsx--signupFn_createServerFn_handler", "/_server", (e) => h.__executeServer(e)), h = l$1({ method: "POST" }).validator((e) => e).handler(w, async ({ data: e }) => {
  const r = await p.user.findUnique({ where: { email: e.email } }), t = await f$1(e.password), s$1 = await s();
  if (r) {
    if (r.password !== t) return { error: true, userExists: true, message: "User already exists" };
    throw await s$1.update({ userEmail: r.email }), redirect({ href: e.redirectUrl || "/" });
  }
  const o = await p.user.create({ data: { email: e.email, password: t } });
  throw await s$1.update({ userEmail: o.email }), redirect({ href: e.redirectUrl || "/" });
}), f = createFileRoute("/signup")({ component: lazyRouteComponent(l, "component", () => f.ssr) });

export { w as signupFn_createServerFn_handler };
//# sourceMappingURL=signup-Ds5DQt_1.mjs.map
