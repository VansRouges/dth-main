import { defineType } from "sanity";

export const skillsType = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Skill Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
  ],
});
