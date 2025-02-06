import { jsxs, jsx } from 'react/jsx-runtime';
import { Link, Outlet } from '@tanstack/react-router';
import { _ } from './posts-Cssr0xTt.mjs';
import { g as ge } from '../nitro/nitro.mjs';
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
import '@tanstack/router-devtools';
import 'react';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const g = function() {
  const i = ge.useLoaderData();
  return jsxs("div", { className: "p-2 flex gap-2", children: [jsx("ul", { className: "list-disc pl-4", children: [...i, { id: "i-do-not-exist", title: "Non-existent Post" }].map((o) => jsx("li", { className: "whitespace-nowrap", children: jsx(Link, { to: "/posts/$postId", params: { postId: o.id }, className: "block py-1 text-blue-800 hover:text-blue-600", activeProps: { className: "text-black font-bold" }, children: jsx("div", { children: o.title.substring(0, 20) }) }) }, o.id)) }), jsx("hr", {}), jsx(Outlet, {})] });
}, j = () => _();

export { g as component, j as loader };
//# sourceMappingURL=posts--TqO-k-0.mjs.map
