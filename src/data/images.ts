// Curated Unsplash photos (free to use under the Unsplash License).
// Keys describe what the photo ACTUALLY shows — verified visually, not guessed.
function unsplash(id: string, params = "auto=format&fit=crop&q=80") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const images = {
  /** Hand signing a document with a pen, dark desk. Reads legal/contractual. */
  signingDocument: unsplash("1450101499163-c8848c66ca85", "auto=format&fit=crop&q=80&w=1600"),
  /** Wooden gavel and sound block on white marble. */
  gavelOnMarble: unsplash("1589391886645-d51941baf7fb", "auto=format&fit=crop&q=80&w=1200"),
  /** Close-up business handshake in an office. */
  handshakeCloseup: unsplash("1521791136064-7986c2920216", "auto=format&fit=crop&q=80&w=1200"),
  /** Group seated around a long table, laptops — consultation/meeting feel. */
  meetingTable: unsplash("1521737604893-d14cc237f11d", "auto=format&fit=crop&q=80&w=1200"),
  /** Two women in conversation across a table by a window. */
  clientConsultation: unsplash("1573497491208-6b1acb260507", "auto=format&fit=crop&q=80&w=1200"),

  /** Smiling professional woman, head and shoulders. */
  clientPortraitFemale: unsplash("1573497019940-1c28c88b4f3e", "auto=format&fit=crop&q=80&w=400"),
  /** Smiling man, head and shoulders. */
  clientPortraitMale: unsplash("1507003211169-0a1dd7228f2d", "auto=format&fit=crop&q=80&w=400"),
};
