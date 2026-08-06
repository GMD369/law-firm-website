// Curated Unsplash photos (free to use under the Unsplash License).
// Each entry pins a photo ID + focal params so crops stay consistent.
function unsplash(id: string, params = "auto=format&fit=crop&q=80") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const images = {
  heroOffice: unsplash("1521791136064-7986c2920216", "auto=format&fit=crop&q=80&w=1600"),
  attorneyPortrait: unsplash("1560250097-0b93528c311a", "auto=format&fit=crop&q=80&w=1200"),
  lawBooksGavel: unsplash("1589391886645-d51941baf7fb", "auto=format&fit=crop&q=80&w=1200"),
  officeDesk: unsplash("1450101499163-c8848c66ca85", "auto=format&fit=crop&q=80&w=1200"),
  meetingRoom: unsplash("1521737604893-d14cc237f11d", "auto=format&fit=crop&q=80&w=1200"),
  gavelCloseup: unsplash("1568992687947-868a62a9f521", "auto=format&fit=crop&q=80&w=1200"),
  bookshelf: unsplash("1573497491208-6b1acb260507", "auto=format&fit=crop&q=80&w=1200"),
  courthouseColumns: unsplash("1600880292203-757bb62b4baf", "auto=format&fit=crop&q=80&w=1200"),
  handshake: unsplash("1573164713988-8665fc963095", "auto=format&fit=crop&q=80&w=1200"),
  cityskyline: unsplash("1556157382-97eda2d62296", "auto=format&fit=crop&q=80&w=1600"),
  clientPortrait: unsplash("1507679799987-c73779587ccf", "auto=format&fit=crop&q=80&w=400"),
};
