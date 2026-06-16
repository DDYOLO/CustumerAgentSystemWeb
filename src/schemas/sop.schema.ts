import { z } from "zod";

export const sopSchema = z.object({ name: z.string().min(1), category: z.string().min(1), content: z.string().min(1), status: z.enum(["draft", "published"]) });
