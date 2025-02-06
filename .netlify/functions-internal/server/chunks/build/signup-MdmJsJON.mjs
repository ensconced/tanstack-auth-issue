import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import * as R from 'react';
import { useRouter, isRedirect, redirect, createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import { p, f } from './prisma-y_Uazyjg.mjs';
import { s } from './session-lOfsFNRv.mjs';
import { l, A as A$1 } from './index-zE0fNPw6.mjs';
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
import '@tanstack/router-devtools';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

function U(e) {
  const r = useRouter();
  return async (...a) => {
    try {
      const t = await e(...a);
      if (isRedirect(t)) throw t;
      return t;
    } catch (t) {
      if (isRedirect(t)) {
        const n = r.resolveRedirect({ ...t, _fromLocation: r.state.location });
        return r.navigate(n);
      }
      throw t;
    }
  };
}
function j(e) {
  const [r, a] = R.useState(), [t, n] = R.useState(), [w, l] = R.useState(), [f, b] = R.useState(), [S, u] = R.useState("idle"), v = R.useCallback(async (d) => {
    var _a;
    u("pending"), a(Date.now()), n(d);
    try {
      const i = await e.fn(d);
      return await ((_a = e.onSuccess) == null ? void 0 : _a.call(e, { data: i })), u("success"), l(void 0), b(i), i;
    } catch (i) {
      u("error"), l(i);
    }
  }, [e.fn]);
  return { status: S, variables: t, submittedAt: r, mutate: v, error: w, data: f };
}
function D({ actionText: e, onSubmit: r, status: a, afterSubmit: t }) {
  return jsx("div", { className: "fixed inset-0 bg-white dark:bg-black flex items-start justify-center p-8", children: jsxs("div", { className: "bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg", children: [jsx("h1", { className: "text-2xl font-bold mb-4", children: e }), jsxs("form", { onSubmit: (n) => {
    n.preventDefault(), r(n);
  }, className: "space-y-4", children: [jsxs("div", { children: [jsx("label", { htmlFor: "email", className: "block text-xs", children: "Username" }), jsx("input", { type: "email", name: "email", id: "email", className: "px-2 py-1 w-full rounded border border-gray-500/20 bg-white dark:bg-gray-800" })] }), jsxs("div", { children: [jsx("label", { htmlFor: "password", className: "block text-xs", children: "Password" }), jsx("input", { type: "password", name: "password", id: "password", className: "px-2 py-1 w-full rounded border border-gray-500/20 bg-white dark:bg-gray-800" })] }), jsx("button", { type: "submit", className: "w-full bg-cyan-600 text-white rounded py-2 font-black uppercase", disabled: a === "pending", children: a === "pending" ? "..." : e }), t || null] })] }) });
}
const P = () => Promise.resolve().then(() => O), A = A$1("app_routes_signup_tsx--signupFn_createServerFn_handler", "/_server", (e) => g.__executeServer(e)), g = l({ method: "POST" }).validator((e) => e).handler(A, async ({ data: e }) => {
  const r = await p.user.findUnique({ where: { email: e.email } }), a = await f(e.password), t = await s();
  if (r) {
    if (r.password !== a) return { error: true, userExists: true, message: "User already exists" };
    throw await t.update({ userEmail: r.email }), redirect({ href: e.redirectUrl || "/" });
  }
  const n = await p.user.create({ data: { email: e.email, password: a } });
  throw await t.update({ userEmail: n.email }), redirect({ href: e.redirectUrl || "/" });
}), E = createFileRoute("/signup")({ component: lazyRouteComponent(P, "component", () => E.ssr) }), M = function() {
  var _a;
  const r = j({ fn: U(g) });
  return jsx(D, { actionText: "Sign Up", status: r.status, onSubmit: (a) => {
    const t = new FormData(a.target);
    r.mutate({ data: { email: t.get("email"), password: t.get("password") } });
  }, afterSubmit: ((_a = r.data) == null ? undefined : _a.error) ? jsx(Fragment, { children: jsx("div", { className: "text-red-400", children: r.data.message }) }) : null });
}, O = Object.freeze(Object.defineProperty({ __proto__: null, component: M }, Symbol.toStringTag, { value: "Module" }));

export { M as component };
//# sourceMappingURL=signup-MdmJsJON.mjs.map
