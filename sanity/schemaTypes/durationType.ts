import { defineType } from "sanity";

export const durationType = defineType({
  name: "duration",
  title: "Duration",
  type: "object",
  fields: [
    {
      name: "hour",
      title: "Hour",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "mins",
      title: "Minutes",
      type: "string",
      validation: (rule) => rule.required(),
    },
  ],
});
