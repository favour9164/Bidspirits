export function groupProductsBySection(products) {
  return {
    popular: products.filter(p => p.section === "popular"),
    upcoming: products.filter(p => p.section === "upcoming"),
    sponsored: products.filter(p => p.section === "sponsored"),
    completed: products.filter(p => p.section === "completed"),
  };
}
