import React from "react";
import { CaseStudies, PayloadCaseStudies } from "@/features/case-studies/types/caseStudiesTypes";
import { getCaseStudies } from "@/features/case-studies/service/caseStudiesService";

export const useCaseStudiesStore = (setCaseStudies: React.Dispatch<React.SetStateAction<CaseStudies>>) => {

    const fetchCaseStudies = async (payload: PayloadCaseStudies) => {
        try {
            setCaseStudies(prev => ({ ...prev, isLoading: true, isError: false }));

            const response = await getCaseStudies(payload);

            if (response?.data) {
                setCaseStudies(prev => ({
                    ...prev,
                    data: response.data ?? [],
                    pagination: response.meta?.pagination ?? prev.pagination,
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
