import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { createRootRoute, Link, Outlet, useRouter, useMatch, rootRouteId, ErrorComponent, useRouterState, warning } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { s } from './session-lOfsFNRv.mjs';
import { A as A$1, l } from './index-zE0fNPw6.mjs';
import * as R from 'react';
import { createElement } from 'react';
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
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

function k({ tag: t, attrs: r, children: s }) {
  switch (t) {
    case "title":
      return jsx("title", { ...r, suppressHydrationWarning: true, children: s });
    case "meta":
      return jsx("meta", { ...r, suppressHydrationWarning: true });
    case "link":
      return jsx("link", { ...r, suppressHydrationWarning: true });
    case "style":
      return jsx("style", { ...r, dangerouslySetInnerHTML: { __html: s } });
    case "script":
      return r && r.src ? jsx("script", { ...r, suppressHydrationWarning: true }) : typeof s == "string" ? jsx("script", { ...r, dangerouslySetInnerHTML: { __html: s }, suppressHydrationWarning: true }) : null;
    default:
      return null;
  }
}
const I = () => {
  const t = useRouter(), r = useRouterState({ select: (n) => n.matches.map((a) => a.meta).filter(Boolean) }), s = R.useMemo(() => {
    const n = [], a = {};
    let l;
    return [...r].reverse().forEach((p) => {
      [...p].reverse().forEach((c) => {
        var _a;
        if (c) if (c.title) l || (l = { tag: "title", children: c.title });
        else {
          const u = (_a = c.name) != null ? _a : c.property;
          if (u) {
            if (a[u]) return;
            a[u] = true;
          }
          n.push({ tag: "meta", attrs: { ...c } });
        }
      });
    }), l && n.push(l), n.reverse(), n;
  }, [r]), o = useRouterState({ select: (n) => n.matches.map((a) => a.links).filter(Boolean).flat(1).map((a) => ({ tag: "link", attrs: { ...a } })), structuralSharing: true }), i = useRouterState({ select: (n) => {
    const a = [];
    return n.matches.map((l) => t.looseRoutesById[l.routeId]).forEach((l) => {
      var p, c, u, m;
      return (m = (u = (c = (p = t.ssr) == null ? undefined : p.manifest) == null ? undefined : c.routes[l.id]) == null ? undefined : u.preloads) == null ? undefined : m.filter(Boolean).forEach((b) => {
        a.push({ tag: "link", attrs: { rel: "modulepreload", href: b } });
      });
    }), a;
  }, structuralSharing: true });
  return D([...s, ...i, ...o], (n) => JSON.stringify(n));
}, L = () => {
  const t = I();
  return jsx(Fragment, { children: t.map((r) => createElement(k, { ...r, key: `tsr-meta-${JSON.stringify(r)}` })) });
}, W = () => jsx(Fragment, { children: L() });
function D(t, r) {
  const s = /* @__PURE__ */ new Set();
  return t.filter((o) => {
    const i = r(o);
    return s.has(i) ? false : (s.add(i), true);
  });
}
const O = () => {
  const t = useRouter(), r = useRouterState({ select: (i) => {
    var n;
    const a = [], l = (n = t.ssr) == null ? undefined : n.manifest;
    return l ? (i.matches.map((p) => t.looseRoutesById[p.routeId]).forEach((p) => {
      var c, u;
      return (u = (c = l.routes[p.id]) == null ? undefined : c.assets) == null ? undefined : u.filter((m) => m.tag === "script").forEach((m) => {
        a.push({ tag: "script", attrs: m.attrs, children: m.children });
      });
    }), a) : (warning(false, "<Scripts /> found no manifest"), []);
  }, structuralSharing: true }), { scripts: s } = useRouterState({ select: (i) => ({ scripts: i.matches.map((n) => n.scripts).flat(1).filter(Boolean).map(({ children: n, ...a }) => ({ tag: "script", attrs: { ...a, suppressHydrationWarning: true }, children: n })) }) }), o = [...s, ...r];
  return jsx(Fragment, { children: o.map((i, n) => createElement(k, { ...i, key: `tsr-scripts-${i.tag}-${n}` })) });
};
function A({ error: t }) {
  const r = useRouter(), s = useMatch({ strict: false, select: (o) => o.id === rootRouteId });
  return console.error(t), jsxs("div", { className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6", children: [jsx(ErrorComponent, { error: t }), jsxs("div", { className: "flex gap-2 items-center flex-wrap", children: [jsx("button", { onClick: () => {
    r.invalidate();
  }, className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold", children: "Try Again" }), s ? jsx(Link, { to: "/", className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold", children: "Home" }) : jsx(Link, { to: "/", className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold", onClick: (o) => {
    o.preventDefault(), window.history.back();
  }, children: "Go Back" })] })] });
}
function P({ children: t }) {
  return jsxs("div", { className: "space-y-2 p-2", children: [jsx("div", { className: "text-gray-600 dark:text-gray-400", children: t || jsx("p", { children: "The page you are looking for does not exist." }) }), jsxs("p", { className: "flex items-center gap-2 flex-wrap", children: [jsx("button", { onClick: () => window.history.back(), className: "bg-emerald-500 text-white px-2 py-1 rounded uppercase font-black text-sm", children: "Go back" }), jsx(Link, { to: "/", className: "bg-cyan-600 text-white px-2 py-1 rounded uppercase font-black text-sm", children: "Start Over" })] })] });
}
const j = "/_server/assets/app-DsP6hc0w.css", z = ({ title: t, description: r, keywords: s, image: o }) => [{ title: t }, { name: "description", content: r }, { name: "keywords", content: s }, { name: "twitter:title", content: t }, { name: "twitter:description", content: r }, { name: "twitter:creator", content: "@tannerlinsley" }, { name: "twitter:site", content: "@tannerlinsley" }, { name: "og:type", content: "website" }, { name: "og:title", content: t }, { name: "og:description", content: r }, ...o ? [{ name: "twitter:image", content: o }, { name: "twitter:card", content: "summary_large_image" }, { name: "og:image", content: o }] : []], G = A$1("app_routes_root_tsx--fetchUser_createServerFn_handler", "/_server", (t) => w.__executeServer(t)), w = l({ method: "GET" }).handler(G, async () => {
  const t = await s();
  return t.data.userEmail ? { email: t.data.userEmail } : null;
});
function U() {
  return jsx(v, { children: jsx(Outlet, {}) });
}
const $ = createRootRoute({ head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, ...z({ title: "TanStack Start | Type-Safe, Client-First, Full-Stack React Framework", description: "TanStack Start is a type-safe, client-first, full-stack React framework. " })], links: [{ rel: "stylesheet", href: j }, { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }, { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }, { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }, { rel: "manifest", href: "/site.webmanifest", color: "#fffff" }, { rel: "icon", href: "/favicon.ico" }] }), beforeLoad: async () => ({ user: await w() }), errorComponent: (t) => jsx(v, { children: jsx(A, { ...t }) }), notFoundComponent: () => jsx(P, {}), component: U });
function v({ children: t }) {
  const { user: r } = $.useRouteContext();
  return jsxs("html", { children: [jsx("head", { children: jsx(W, {}) }), jsxs("body", { children: [jsxs("div", { className: "p-2 flex gap-2 text-lg", children: [jsx(Link, { to: "/", activeProps: { className: "font-bold" }, activeOptions: { exact: true }, children: "Home" }), " ", jsx(Link, { to: "/posts", activeProps: { className: "font-bold" }, children: "Posts" }), jsx("div", { className: "ml-auto", children: r ? jsxs(Fragment, { children: [jsx("span", { className: "mr-2", children: r.email }), jsx(Link, { to: "/logout", children: "Logout" })] }) : jsx(Link, { to: "/login", children: "Login" }) })] }), jsx("hr", {}), t, jsx(TanStackRouterDevtools, { position: "bottom-right" }), jsx(O, {})] })] });
}

export { G as fetchUser_createServerFn_handler };
//# sourceMappingURL=__root-BvkRr39_.mjs.map
