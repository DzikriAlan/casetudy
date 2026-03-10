// payload
export interface PayloadCaseStudies {
    page: number;
    max: number;
    sort: string;
}

// state data yang dikonsumsi
export interface DataCaseStudies {
    id: number;
    documentId: string;
    title: string;
    description: string;
    external_link?: string;
    approved?: boolean;
    publishedAt?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export interface CaseStudiesPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

// state data
export interface CaseStudies {
    isLoading: boolean;
    isError: boolean;
    data: DataCaseStudies[];
    pagination: CaseStudiesPagination;
}
