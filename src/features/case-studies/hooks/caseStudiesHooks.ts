import { useEffect } from "react";
import { useCaseStudiesStore } from "@/features/case-studies/store/caseStudiesStore";
import { useCaseStudiesStates } from "@/features/case-studies/states/caseStudiesStates";
import { abortGetCaseStudies } from "@/features/case-studies/service/caseStudiesService";

export const useCaseStudiesHooks = () => {
    const { payloadCaseStudies, setPayloadCaseStudies, caseStudies, setCaseStudies } = useCaseStudiesStates();
    const { fetchCaseStudies } = useCaseStudiesStore(setCaseStudies);

    useEffect(() => {
        fetchCaseStudies(payloadCaseStudies);
        return () => abortGetCaseStudies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        payloadCaseStudies.page, payloadCaseStudies.max,
        payloadCaseStudies.sort,
        payloadCaseStudies.search, payloadCaseStudies.category
    ]);

    return { caseStudies, payloadCaseStudies, setPayloadCaseStudies };
};
