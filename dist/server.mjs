import {
  registerForEvent
} from "./chunk-LEJZHWX3.mjs";
import {
  errorHandler
} from "./chunk-57V7VJUF.mjs";
import {
  checkIn
} from "./chunk-6XKZHFUV.mjs";
import {
  createEvent
} from "./chunk-2ZSQB4FW.mjs";
import "./chunk-R75UC5HS.mjs";
import {
  getAttendeeBadge
} from "./chunk-J4SQX3GL.mjs";
import {
  getAttendeesEvent
} from "./chunk-B4ZOHTSY.mjs";
import {
  getEvent
} from "./chunk-VAQKXH4D.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "Pass In",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in constru\xEDda durante o NLW Unite Summit da RocketSeat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getAttendeesEvent);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTPP server running...");
});
