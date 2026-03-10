// Helper operations for case studies 
export const formattingCaseStudiesDate = (date: string) => {
    if (!date) return "";
    const d = new Date(date);
    const day = d.getDate();
    const month = d.toLocaleString("id-ID", { month: "short" });
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
};
