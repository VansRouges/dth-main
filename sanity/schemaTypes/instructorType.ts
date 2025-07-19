import { defineField, defineType } from "sanity";

export const instructorType = defineType({
  name: "instructor",
  title: "Instructor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
    }),
    defineField({
      name: "yearsOfExperience",
      title: "Years of Experience",
      type: "number",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "profileInsights",
      title: "Profile Insights",
      type: "array",
      of: [{ type: "reference", to: [{ type: "profileInsight" }] }],
    }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "array",
      of: [{ type: "reference", to: [{ type: "experience" }] }],
    }),
  ],
});