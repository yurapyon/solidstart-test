"use server";

import { auth } from "~/lib/auth";
import { toSolidStartHandler } from "better-auth/solid-start";

const handlers = toSolidStartHandler(auth);

export const GET = handlers.GET;
export const POST = handlers.POST;
