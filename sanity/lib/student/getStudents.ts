import { sanityFetch } from "../live";
import { defineQuery } from "groq";

export async function getStudents() {
  const getStudentsQuery = defineQuery(`*[_type == "student"] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    firstName,
    lastName,
    email,
    clerkId,
    imageUrl
  }`);

  const students = await sanityFetch({ query: getStudentsQuery });
  return students.data;
}
