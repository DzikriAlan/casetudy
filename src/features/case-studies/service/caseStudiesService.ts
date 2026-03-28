import api from "@/shared/lib/api/axios";
import { PayloadCaseStudies } from "@/features/case-studies/types/caseStudiesTypes";

let abortCaseStudies: AbortController | null = null;

export const abortGetCaseStudies = () => abortCaseStudies?.abort();

export const getCaseStudies = async (payload: PayloadCaseStudies) => {
    try {
        if (abortCaseStudies) abortCaseStudies.abort();
        abortCaseStudies = new AbortController();

        const params = new URLSearchParams();
        params.set("page", String(payload.page));
        params.set("pageSize", String(payload.max));
        params.set("sort", payload.sort);

        if (payload.search) {
            params.set("search", payload.search);
        }

        if (payload.category) {
            const cats = Array.isArray(payload.category) ? payload.category : [payload.category];
            cats.forEach(cat => params.append("category", cat));
        }

        const { data } = await api.get("/case-studies", {
            params,
            signal: abortCaseStudies.signal,
        });

        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};
