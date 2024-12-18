import { HttpContractInterface } from ".";

export class FetchApiHttp implements HttpContractInterface {

    async get<TResponse=unknown>(path: string): Promise<TResponse> {
      
        const object = await fetch(path)
        const data = await object.json()
        return data as TResponse
    }

    async post<TResponse=unknown, TBody=any>(path: string, body: TBody): Promise<TResponse> {
        const object = await fetch(path, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        const data = await object.json()
        return data as TResponse
    }
}