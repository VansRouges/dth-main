import baseUrl from "@/lib/baseUrl";

export interface Country {
  name: string;
  flag: string;
}

async function getCountries(): Promise<Country[]> {
  try {
    const res = await fetch(`${baseUrl}/api/countries`, {
      cache: 'force-cache',
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      throw new Error('Failed to fetch countries');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
}

export default getCountries;
