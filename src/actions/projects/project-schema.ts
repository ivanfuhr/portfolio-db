import z from "zod";

export const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  picture: z.string().url(),
  url: z.string().url(),
});

export type TProject = z.infer<typeof projectSchema>;
