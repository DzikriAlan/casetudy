import { useState } from "react";
import { CaseStudiesState, PayloadCaseStudies } from "@/features/case-studies/types/caseStudiesTypes";

export const useCaseStudiesStates = () => {
    const [payloadCaseStudies, setPayloadCaseStudies] = useState<PayloadCaseStudies>({
        page: 1,
        max: 10,
        sort: "title:asc",
    });

    const [caseStudies, setCaseStudies] = useState<CaseStudiesState>({
        data: [],
        isLoading: true,
        isError: false,
    });

    return {
        payloadCaseStudies,
        setPayloadCaseStudies,
        caseStudies,
        setCaseStudies,
    };
};
