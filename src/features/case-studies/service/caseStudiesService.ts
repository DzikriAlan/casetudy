import apiClient from "@/shared/lib/api/axios";
import { PayloadCaseStudies } from "@/features/case-studies/types/caseStudiesTypes";

let abortCaseStudies: AbortController | null = null;

export const getCaseStudies = async (payload: PayloadCaseStudies) => {
    try {
        if (abortCaseStudies) abortCaseStudies.abort();
        abortCaseStudies = new AbortController();

        const { data } = await apiClient.get(
            "/case-studies",
            {
                params: {
                    "pagination[page]": payload.page,
                    "pagination[pageSize]": payload.max,
                    sort: payload.sort,
                },
                signal: abortCaseStudies.signal,
            }
        );
        return data;
    } catch (error) {
        throw error;
    }
};
