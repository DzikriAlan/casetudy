import { useEffect } from "react";
import { useCaseStudiesStore } from "@/features/case-studies/store/caseStudiesStore";
import { useCaseStudiesStates } from "@/features/case-studies/states/caseStudiesStates";
import { abortGetCaseStudies } from "@/features/case-studies/service/caseStudiesService";

export const useCaseStudiesHooks = () => {
    const { payloadCaseStudies, setPayloadCaseStudies, caseStudies, setCaseStudies } = useCaseStudiesStates();
    const { fetchCaseStudies } = useCaseStudiesStore(setCaseStudies);

    const categoryKey = JSON.stringify(payloadCaseStudies.category ?? null);

    useEffect(() => {
        fetchCaseStudies(payloadCaseStudies);
        return () => abortGetCaseStudies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [payloadCaseStudies.page, payloadCaseStudies.max, payloadCaseStudies.sort, categoryKey, payloadCaseStudies.search]);

    return { caseStudies, payloadCaseStudies, setPayloadCaseStudies };
};
