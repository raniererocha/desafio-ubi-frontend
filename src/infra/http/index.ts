export interface HttpContractInterface {
    get: <TResponse=unknown>(path: string) => Promise<TResponse>
    post: <TResponse=unknown, Tbody=any>(path: string, body: Tbody) => Promise<TResponse>
   
}