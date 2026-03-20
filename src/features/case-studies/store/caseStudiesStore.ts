import React from "react";
import { CaseStudies, PayloadCaseStudies } from "@/features/case-studies/types/caseStudiesTypes";
import { getCaseStudies } from "@/features/case-studies/service/caseStudiesService";

const sanitizeUrl = (url: unknown): unknown => {
    if (typeof url !== 'string') return url;
    // Fix malformed URLs where a base URL was prepended to an already-absolute URL
    // e.g. "http://localhost:1337https://cdn.example.com/img.png"
    const lastIndex = Math.max(url.lastIndexOf('http://'), url.lastIndexOf('https://'));
    return lastIndex > 0 ? url.slice(lastIndex) : url;
};

export const useCaseStudiesStore = (setCaseStudies: React.Dispatch<React.SetStateAction<CaseStudies>>) => {

    const fetchCaseStudies = async (payload: PayloadCaseStudies) => {
        try {
            setCaseStudies(prev => ({ ...prev, isLoading: true, isError: false }));

            const response = await getCaseStudies(payload);

            if (response?.data) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const sanitizedData = (response.data ?? []).map((item: any) => ({
                    ...item,
                    image: sanitizeUrl(item.image),
                }));
                setCaseStudies(prev => ({
                    ...prev,
                    data: sanitizedData,
                    pagination: response.meta?.pagination ?? prev.pagination,
                    categories: response.meta?.categories ?? prev.categories,
                    isError: false,
                    isLoading: false,
                }));

            } else {
                setCaseStudies(prev => ({ ...prev, isError: true, isLoading: false }));
            }

            return { data: response };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.name !== "CanceledError") {
                setCaseStudies(prev => ({ ...prev, isLoading: false, isError: true }));
                console.error(error);
                return { error };
            }
            return { canceled: true };
        }
    };

    return {
        fetchCaseStudies,
    };
};
