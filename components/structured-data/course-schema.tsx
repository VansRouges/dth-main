import Script from 'next/script';
import { GetCourseBySlugQueryResult } from '@/sanity.types';

interface CourseSchemaProps {
  course: GetCourseBySlugQueryResult;
}

export default function CourseSchema({ course }: CourseSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://datatechhub.com";
  
  // Return null if essential course data is missing
  if (!course?.title || !course?.slug?.current) {
    return null;
  }
  
  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description || `Learn ${course.title} with DataTechHub`,
    "url": `${baseUrl}/courses/${course.slug.current}`,
    "provider": {
      "@type": "Organization",
      "name": "DataTechHub",
      "url": baseUrl
    },
    "courseCode": course.slug.current,
    "educationalLevel":  course.level || "Beginner to Advanced",
    "teaches": [],
    ...(course.price && {
      "offers": {
        "@type": "Offer",
        "price": course.price,
        "priceCurrency": "NGN",
        "availability": "https://schema.org/InStock"
      }
    }),
    ...(course.instructor && {
      "instructor": {
        "@type": "Person",
        "name": course.instructor.name,
        ...(course.instructor.bio && { "description": course.instructor.bio })
      }
    }),
    ...(course.duration && {
      "timeRequired": course.duration
    })
  };

  return (
    <Script
      id={`course-schema-${course.slug.current}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(courseData),
      }}
    />
  );
}
