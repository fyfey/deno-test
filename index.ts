import { serve } from "https://deno.land/std@0.91.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("listening on :8000");
for await (const req of s) {
  req.respond({ body: "SETL rules!\n" });
}

