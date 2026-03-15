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

export interface CaseStudy {
    [key: string]: unknown;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DataCaseStudies = any;

export interface CaseStudies {
    isLoading: boolean;
    isError: boolean;
    data: CaseStudy[];
    pagination: CaseStudiesPagination;
}

export type CaseStudiesState<T = unknown> = {
    data: T[];
    isLoading: boolean;
    isError: boolean;
};
