import { defineField, defineType } from "sanity";

export const courseType = defineType({
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      name: "price",
      title: "Price (NGN)",
      type: "number",
      description: "Price in NGN",
      validation: (Rule) => Rule.min(0),
    },
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Course Image",
      type: "image",
    }),
    defineField({
      name: "previewVideo",
      title: "Preview Video Link",
      type: "url",
      description: "Link to a preview video (YouTube, Vimeo, etc.)",
      validation: (rule) => rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      }),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "duration",
      description: "Enter the duration of the course (hour and minutes)",
    }),
    {
      name: "topRated",
      title: "Top Rated",
      type: "boolean",
    },
    {
      name: "skillsCovered",
      title: "Skills Covered",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    },
    {
      name: "level",
      title: "Course Level",
      type: "string",
      options: {
        list: ["Beginner", "Intermediate", "Advanced"],
        layout: "radio",
      },
    },
    {
      name: "certification",
      title: "Certification",
      type: "boolean",
    },
    {
      name: "designedFor",
      title: "Who this course is designed for",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "whatYouWillLearn",
      title: "What you'll learn",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "jobOpportunities",
      title: "Job Opportunities",
      type: "array",
      of: [{ type: "reference", to: [{ type: "jobOpportunity" }] }],
    },
    defineField({
      name: "modules",
      title: "Modules",
      type: "array",
      of: [{ type: "reference", to: { type: "module" } }],
    }),
    defineField({
      name: "instructor",
      title: "Instructor",
      type: "reference",
      to: { type: "instructor" },
    }),
  ],
});