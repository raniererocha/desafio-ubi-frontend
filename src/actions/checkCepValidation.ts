import { FetchApiHttp } from "../infra/http/FetchApiHttp"

interface ErrorResponse {
    message: string
    type: string
    name: string
    errors: Error[]
}

interface Error {
    name: string
    message: string
    service: string
}

interface CEPInterface extends Partial<ErrorResponse> {
    cep: string
    state: string
    city: string
    neighborhood: string
    street: string
    service: string
}

const http = new FetchApiHttp()

const validatedCEPsCache = new Set<string>()

const checkCepValidation = async (CEP: string): Promise<boolean> => {
    if (validatedCEPsCache.has(CEP)) {
        return true
    }
    if (CEP.length < 8) {
        return true
    }
    const response = await http.get<CEPInterface>(`https://brasilapi.com.br/api/cep/v1/${CEP}`)

    if (!response?.errors) {
        validatedCEPsCache.add(CEP)
        return true
    }

    return false
}

export { checkCepValidation }