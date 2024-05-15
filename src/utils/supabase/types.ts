export interface SupabaseQueryResponse<T> {
    data: T | null;
    error: unknown | null;
}
