import { useEffect, useState } from "react";
import { useCaseStudiesStore } from "@/features/case-studies/store/caseStudiesStore";
import { useCaseStudiesStates } from "@/features/case-studies/states/caseStudiesStates";

export const useCaseStudiesHooks = () => {
    const { payloadCaseStudies } = useCaseStudiesStates();
    const { fetchCaseStudies } = useCaseStudiesStore();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [caseStudiesData, setCaseStudiesData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const handleCaseStudiesFetch = async () => {
        setIsLoading(true);
        setIsError(false);
        const res = await fetchCaseStudies(payloadCaseStudies, false);

        if (res?.canceled) {
            return;
        }

        if (res?.error) {
            setIsError(true);
            setIsLoading(false);
            return;
        }

        if (res?.data?.data) {
            setCaseStudiesData(res.data.data);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        handleCaseStudiesFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [payloadCaseStudies.page, payloadCaseStudies.max, payloadCaseStudies.sort]);

    return {
        handleCaseStudiesFetch,
        caseStudiesData,
        isLoading,
        isError
    };
};
