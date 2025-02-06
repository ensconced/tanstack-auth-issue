import nodeCrypto from 'node:crypto';
import { PrismaClient } from '@prisma/client';

const p = new PrismaClient();
function f(t) {
  return new Promise((o, r) => {
    nodeCrypto.pbkdf2(t, "salt", 1e5, 64, "sha256", (s, e) => {
      s ? r(s) : o(e.toString("hex"));
    });
  });
}

export { f, p };
//# sourceMappingURL=prisma-y_Uazyjg.mjs.map
