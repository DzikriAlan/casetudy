import { useState } from "react";
import { CaseStudies, PayloadCaseStudies } from "@/features/case-studies/types/caseStudiesTypes";

export const useCaseStudiesStates = () => {
    const [payloadCaseStudies, setPayloadCaseStudies] = useState<PayloadCaseStudies>({
        page: 1,
        max: 10,
        sort: "newest",
    });

    const [caseStudies, setCaseStudies] = useState<CaseStudies>({
        isLoading: true,
        isError: false,
        data: [],
        pagination: {
            page: 1,
            pageSize: 10,
            pageCount: 1,
            total: 1,
        },
        categories: [],
        positions: [],
    });

    return {
        payloadCaseStudies,
        setPayloadCaseStudies,
        caseStudies,
        setCaseStudies,
    };
};


