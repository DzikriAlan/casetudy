export interface PayloadCaseStudies {
    page: number;
    max: number;
    sort: string;
}

export interface CaseStudiesPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface CaseStudies {
    isLoading: boolean;
    isError: boolean;
    data: [];
    pagination: CaseStudiesPagination;
}

export type CaseStudiesState<T = unknown> = {
    data: T[];
    isLoading: boolean;
    isError: boolean;
};
