// Split large industry data into smaller, lazily loaded chunks
export const getIndustryById = async (id) => {
  const { industries } = await import('./industries-data.js');
  return industries.find(industry => industry.id === id);
};

export const getIndustrySubset = async (startIndex = 0, count = 10) => {
  const { industries } = await import('./industries-data.js');
  return industries.slice(startIndex, startIndex + count);
};

export const getAllIndustries = async () => {
  const { industries } = await import('./industries-data.js');
  return industries;
};

// Basic industry categories for initial load
export const industryCategories = [
  { id: "tech", name: "Technology", count: 13 },
  { id: "finance", name: "Financial Services", count: 13 },
  { id: "healthcare", name: "Healthcare & Life Sciences", count: 15 },
  { id: "manufacturing", name: "Manufacturing", count: 12 },
  { id: "retail", name: "Retail & E-commerce", count: 10 },
  { id: "education", name: "Education", count: 8 },
  { id: "energy", name: "Energy & Utilities", count: 11 },
  { id: "consulting", name: "Consulting", count: 7 },
  { id: "media", name: "Media & Entertainment", count: 9 },
  { id: "transportation", name: "Transportation & Logistics", count: 8 },
  { id: "realestate", name: "Real Estate", count: 6 },
  { id: "nonprofit", name: "Non-Profit & Government", count: 5 },
];