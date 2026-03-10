import { PayloadCaseStudies } from "@/features/case-studies/types/caseStudiesTypes";
import { getCaseStudies } from "@/features/case-studies/service/caseStudiesService";
import { useCaseStudiesStates } from "@/features/case-studies/states/caseStudiesStates";
import { setCaseStudiesMapper } from "@/features/case-studies/helpers/caseStudiesStore";

export const useCaseStudiesStore = () => {
    const { payloadCaseStudies, setCaseStudiesState } = useCaseStudiesStates();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setCaseStudies = (res: any) => setCaseStudiesMapper(res, setCaseStudiesState);

    const fetchCaseStudies = async (payload: PayloadCaseStudies = payloadCaseStudies, isStore: boolean = true) => {
        try {
            if (isStore) {
                setCaseStudiesState((prev) => ({ ...prev, isLoading: true, isError: false }));
            }

            const data = await getCaseStudies(payload);

            if (isStore) {
                setCaseStudies(data);
            }

            return { data };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.name !== "CanceledError") {
                if (isStore) {
                    setCaseStudiesState((prev) => ({ ...prev, isLoading: false, isError: true }));
                }
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
