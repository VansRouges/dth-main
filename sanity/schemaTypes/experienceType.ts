import { defineType } from "sanity";

export const experienceType = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (rule) => rule.required(),
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
