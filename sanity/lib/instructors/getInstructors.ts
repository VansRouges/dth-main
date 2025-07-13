import { sanityFetch } from "../live";
import { defineQuery } from "groq";

export async function getInstructors() {
  const getInstructorsQuery = defineQuery(`*[_type == "instructor"] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    name,
    bio,
    photo,
    yearsOfExperience,
    currentlyWorksAt
  }`);

  const instructors = await sanityFetch({ query: getInstructorsQuery });
  return instructors.data;
}