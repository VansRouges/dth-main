import { defineType } from "sanity";

export const profileInsightType = defineType({
  name: "profileInsight",
  title: "Profile Insight",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    },
  ],
});
