import { api } from "@/shared/lib/api/axios";
import { PayloadCaseStudies } from "@/features/case-studies/types/caseStudiesTypes";

let abortCaseStudies: AbortController | null = null;

export const abortGetCaseStudies = () => abortCaseStudies?.abort();

export const getCaseStudies = async (payload: PayloadCaseStudies) => {
    try {
        if (abortCaseStudies) abortCaseStudies.abort();
        abortCaseStudies = new AbortController();

        const { data } = await api.get("/case-studies", {
            params: {
                page: payload.page,
                pageSize: payload.max,
                sort: payload.sort,
            },
            signal: abortCaseStudies.signal,
        });

        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};
