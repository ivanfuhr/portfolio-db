import z from "zod";

export const profileSkillsSchema = z.object({
  name: z.string(),
  level: z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
  ]),
});

export const profileSchema = z.object({
  name: z.string(),
  office: z.string(),
  about: z.string(),
  picture: z.string().url(),
  skills: z.array(profileSkillsSchema),
});

export type TProfile = z.infer<typeof profileSchema>;
