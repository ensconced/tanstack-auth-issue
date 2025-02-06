import { jsx, Fragment } from 'react/jsx-runtime';
import { s as se, t as tt, U as Ut, L as Lt } from '../nitro/nitro.mjs';
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
import '@tanstack/react-router';
import 'tiny-invariant';
import 'node:async_hooks';
import '@tanstack/router-devtools';
import 'react';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const A = function() {
  var _a;
  const t = se({ fn: tt(Lt) });
  return jsx(Ut, { actionText: "Sign Up", status: t.status, onSubmit: (a) => {
    const r = new FormData(a.target);
    t.mutate({ data: { email: r.get("email"), password: r.get("password") } });
  }, afterSubmit: ((_a = t.data) == null ? undefined : _a.error) ? jsx(Fragment, { children: jsx("div", { className: "text-red-400", children: t.data.message }) }) : null });
};

export { A as component };
//# sourceMappingURL=signup-CfKMAOQ9.mjs.map
