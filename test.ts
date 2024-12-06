import * as web3 from "@solana/web3.js";
import createEdgeClient from "@honeycomb-protocol/edge-client";

const API_URL = process.env.API_URL ?? "https://edge.eboy.dev/";
const RPC_URL = process.env.RPC_URL ?? "https://rpc.eboy.dev/";
const DAS_API_URL = process.env.DAS_API_URL ?? RPC_URL;

const connection = new web3.Connection(RPC_URL, {
  commitment: "processed",
  wsEndpoint: process.env.RPC_WS_URL || RPC_URL,
});

const client = createEdgeClient<false>(API_URL, false);
const sseClient = createEdgeClient<true>(API_URL, true);

console.log("ssss");
