// IPC need to be the first import to allow it to catch errors happening during
// the other imports
import startHandler from "@vercel/turbopack-next/internal/page-server-handler";

import App from "@vercel/turbopack-next/pages/_app";
import Document from "@vercel/turbopack-next/pages/_document";

import Component, * as otherExports from "INNER";

import chunkGroup from "INNER_CLIENT_CHUNK_GROUP";

startHandler({
  isDataReq: false,
  App,
  Document,
  Component,
  otherExports,
  chunkGroup,
});
