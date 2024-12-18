import * as z from 'zod'
import { checkCepValidation } from '../../actions/checkCepValidation'

export interface SignUpInterface {
    name: string
    email: string
    cep: string
}


export const SignUpSchema = z.object({
    name: z.string({
        message: "O nome precisa ser um texto"
    })
        .min(3, "O nome precisa de pelo menos 3 caracteres"),
    email: z.string()
        .email({
            message: "Digite um email válido"
        }),
    cep: z.string()
        .min(8, 'Digite um CEP Válido')
        .max(8, 'Digite um CEP válido')
        .refine(async (arg) => {
            return  checkCepValidation(arg)
        }, "Digite um CEP Válido")
})
