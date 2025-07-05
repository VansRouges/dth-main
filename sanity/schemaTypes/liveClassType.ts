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
      options: {
        dateFormat: 'YYYY-MM-DD'
      }
    }),
    defineField({
      name: "time",
      title: "Time",
      type: "string",
      validation: (rule) => rule.required()
        .regex(
          /^([1-9]|1[0-2]):[0-5][0-9] [AP]M$/,
          {
            name: "time"
          }
        ),
      description: "Enter time in 12-hour format (e.g., 2:30 PM)",
    }),
    defineField({
      name: "facilitator",
      title: "Facilitator",
      type: "reference",
      to: [{ type: "instructor" }], // References instructor documents
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
    // Removed the status field since we'll calculate it based on date/time
  ],
  preview: {
    select: {
      title: "title",
      course: "course.title",
      date: "date",
      time: "time",
      facilitator: "facilitator.name"
    },
    prepare({ title, course, date, time, facilitator }) {
      return {
        title,
        subtitle: `${course} - ${date} at ${time} (${facilitator})`,
      };
    },
  },
});