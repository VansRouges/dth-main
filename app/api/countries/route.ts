import { NextResponse } from "next/server";

// Define the response structure for each country
interface Country {
  name: string;
  flag: string;
}

// Handler to fetch country data with pagination
export async function GET(request: Request) {
  try {
    // Get query parameters for pagination
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = parseInt(url.searchParams.get("limit") || "10", 10);

    // Fetch data from the REST Countries API
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");

    if (!res.ok) {
      throw new Error("Failed to fetch country data");
    }

    const countries: { name: { common: string }; flags: { png: string } }[] = await res.json();

    // Calculate total countries and pages
    const totalCountries = countries.length;
    const totalPages = Math.ceil(totalCountries / limit);

    // Paginate the countries
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedCountries = countries.slice(startIndex, endIndex);

    // Map to extract only the country name and PNG flag
    const countryData: Country[] = paginatedCountries.map((country) => ({
      name: country.name.common,
      flag: country.flags.png,
    }));

    return NextResponse.json({
      data: countryData,
      totalCountries,
      totalPages,
      currentPage: page,
      limit,
    });

  } catch (error) {
    console.error("Error fetching country data:", error);
    return new NextResponse("Failed to fetch country data", { status: 500 });
  }
}
