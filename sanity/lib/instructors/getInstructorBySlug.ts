import { sanityFetch } from "../live";
import { defineQuery } from "groq";

async function getInstructorBySlug(slug: string) {
  const getInstructorBySlugQuery = defineQuery(`*[_type == "instructor" && slug.current == $slug][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    name,
    slug, 
    bio,
    photo,
    yearsOfExperience,
    jobTitle,
    company,
    currentlyWorksAt,
    "profileInsights": profileInsights[]-> {
      _id,
      title,
      description
    },
    "experience": experience[]-> {
      _id,
      title,
      company,
      startDate,
      endDate,
      highlights
    }
  }`);

  const instructor = await sanityFetch({
    query: getInstructorBySlugQuery,
    params: { slug },
  });

  return instructor.data;
}

export default getInstructorBySlug;