import { jsx, jsxs } from 'react/jsx-runtime';
import { ErrorComponent } from '@tanstack/react-router';
import { o } from './posts-Cssr0xTt.mjs';
import { S as Se } from '../nitro/nitro.mjs';
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

function j({ error: o }) {
  return jsx(ErrorComponent, { error: o });
}
const v = function() {
  const r = Se.useLoaderData();
  return jsxs("div", { className: "space-y-2", children: [jsx("h4", { className: "text-xl font-bold underline", children: r.title }), jsx("div", { className: "text-sm", children: r.body })] });
}, y = ({ params: { postId: o$1 } }) => o({ data: o$1 });

export { j as PostErrorComponent, v as component, y as loader };
//# sourceMappingURL=posts._postId-DekZoZAw.mjs.map
