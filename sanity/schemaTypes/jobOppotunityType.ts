import { defineType } from "sanity";

export const jobOpportunityType = defineType({
  name: "jobOpportunity",
  title: "Job Opportunity",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
  ],
});
