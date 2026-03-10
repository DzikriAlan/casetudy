import { useState } from "react";
import { CaseStudies, PayloadCaseStudies } from "@/features/case-studies/types/caseStudiesTypes";

export const useCaseStudiesStates = () => {
    const [payloadCaseStudies, setPayloadCaseStudies] = useState<PayloadCaseStudies>({
        page: 1,
        max: 10,
        sort: "title:asc",
    });

    const [caseStudies, setCaseStudiesState] = useState<CaseStudies>({
        isLoading: false,
        isError: false,
        data: [],
        pagination: {
            page: 1,
            pageSize: 10,
            pageCount: 1,
            total: 1,
        },
    });

    return {
        payloadCaseStudies,
        setPayloadCaseStudies,
        caseStudies,
        setCaseStudiesState,
    };
};
