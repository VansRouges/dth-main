import { defineField, defineType } from "sanity";

export const liveClassType = defineType({
  name: "liveClass",
  title: "Live Class",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "time",
      title: "Time",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "facilitator",
      title: "Facilitator",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "course",
      title: "Course",
      type: "reference",
      to: [{ type: "course" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "meetingLink",
      title: "Meeting Link",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Upcoming", value: "upcoming" },
          { title: "Past", value: "past" },
        ],
        layout: "radio",
      },
      initialValue: "upcoming",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      course: "course.title",
      date: "date",
      status: "status",
    },
    prepare({ title, course, date, status }) {
      return {
        title,
        subtitle: `${course} - ${date} (${status})`,
      };
    },
  },
});