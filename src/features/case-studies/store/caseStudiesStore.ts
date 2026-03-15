import React from "react";
import { CaseStudiesState, PayloadCaseStudies } from "@/features/case-studies/types/caseStudiesTypes";
import { getCaseStudies } from "@/features/case-studies/service/caseStudiesService";

export const useCaseStudiesStore = (setCaseStudies: React.Dispatch<React.SetStateAction<CaseStudiesState>>) => {

    const fetchCaseStudies = async (payload: PayloadCaseStudies) => {
        try {
            setCaseStudies(prev => ({ ...prev, isLoading: true, isError: false }));

            const { data } = await getCaseStudies(payload);

            if (data) {
                setCaseStudies({ data, isLoading: false, isError: false });
            } else {
                setCaseStudies(prev => ({ ...prev, isError: true, isLoading: false }));
            }

            return { data };
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
