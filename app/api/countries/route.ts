import { NextResponse } from "next/server";

// Define the response structure for each country
interface Country {
  name: string;
  flag: string;
}

// Handler to fetch country data
export async function GET() {
  try {
    // Fetch data from the REST Countries API
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
    
    if (!res.ok) {
      throw new Error("Failed to fetch country data");
    }

    const countries: { name: { common: string }; flags: { png: string } }[] = await res.json();

    // Map to extract only the country name and PNG flag
    const countryData: Country[] = countries.map((country) => ({
      name: country.name.common,
      flag: country.flags.png,
    }));

    return NextResponse.json(countryData);

  } catch (error) {
    console.error("Error fetching country data:", error);
    return new NextResponse("Failed to fetch country data", { status: 500 });
  }
}
