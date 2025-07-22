import { sanityFetch } from "../live";  // Assuming you have a utility to fetch from Sanity
import { defineQuery } from "groq";

export async function getLiveClassesByCourseId(courseId: string) {
  const getLiveClassesByCourseIdQuery = defineQuery(`
    *[_type == "liveClass" && references($courseId)] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      title,
      "slug": slug.current,
      date,
      time,
      duration,
      description,
      meetingLink,
      "course": course->{
        _id,
        title
      },
      facilitator->{
        _id,
        name
      }
    }
  `);

  const liveClasses = await sanityFetch({
    query: getLiveClassesByCourseIdQuery,
    params: { courseId }
  });

  return liveClasses.data;
}
