// Mock data for Netflix games ASO dashboard

export const gameData = [
  {
    id: 1,
    name: "Squid Game: Unleashed",
    icon: "https://img.icons8.com/color/96/squid-game--v1.png",
    lastUpdated: "March 10, 2025",
    growthPercent: 24,
    stats: {
      totalInstalls: "2.4M",
      installsGrowth: "+12%",
      asoConversion: "3.8%",
      conversionGrowth: "+0.5%",
      keywordsRanked: 14,
      keywordsGrowth: "+3"
    },
    appStore: {
      installs: "1.6M",
      conversion: "4.2%",
      featured: "Yes (Games)"
    },
    googlePlay: {
      installs: "0.8M",
      conversion: "3.5%",
      featured: "No"
    },
    topKeywords: [
      { keyword: "squid game", rank: 1 },
      { keyword: "battle royale", rank: 3 },
      { keyword: "netflix games", rank: 1 },
      { keyword: "survival game", rank: 5 },
      { keyword: "pvp games", rank: 12 }
    ]
  },
  {
    id: 2,
    name: "WWE 2K25 Mobile",
    icon: "https://cdn-icons-png.flaticon.com/512/3097/3097980.png",
    lastUpdated: "March 8, 2025",
    growthPercent: 15,
    stats: {
      totalInstalls: "1.8M",
      installsGrowth: "+8%",
      asoConversion: "3.2%",
      conversionGrowth: "+0.3%",
      keywordsRanked: 9,
      keywordsGrowth: "+2"
    },
    appStore: {
      installs: "1.0M",
      conversion: "3.6%",
      featured: "No"
    },
    googlePlay: {
      installs: "0.8M",
      conversion: "2.9%",
      featured: "Yes (Sports)"
    },
    topKeywords: [
      { keyword: "wwe", rank: 2 },
      { keyword: "wrestling games", rank: 1 },
      { keyword: "netflix games", rank: 3 },
      { keyword: "sports games", rank: 18 },
      { keyword: "fighting games", rank: 7 }
    ]
  }
];

export const monthlyInstalls = [
  { month: "Jan", installs: 1200000 },
  { month: "Feb", installs: 1450000 },
  { month: "Mar", installs: 1800000 },
  { month: "Apr", installs: 2100000 },
  { month: "May", installs: 2300000 },
  { month: "Jun", installs: 2400000 }
];

export const keywordRankings = [
  { date: "2025-01-01", "squid game": 4, "battle royale": 8, "netflix games": 2 },
  { date: "2025-01-15", "squid game": 3, "battle royale": 6, "netflix games": 2 },
  { date: "2025-02-01", "squid game": 2, "battle royale": 5, "netflix games": 1 },
  { date: "2025-02-15", "squid game": 2, "battle royale": 4, "netflix games": 1 },
  { date: "2025-03-01", "squid game": 1, "battle royale": 3, "netflix games": 1 }
];

export const storeDistribution = {
  appStore: 62,
  googlePlay: 38
};
