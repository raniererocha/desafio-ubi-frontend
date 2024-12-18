import { useForm } from "react-hook-form"
import { SignUpInterface, SignUpSchema } from "./signup.schema"
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from "../../hooks/use-toast"
import { HttpContractInterface } from "../../infra/http"
import { useUsers } from "../../storage/UsersProvider"
import { useEffect } from "react"

interface SignUpModelInterface {
    http: HttpContractInterface
}

export const useSignUpModel = (props: SignUpModelInterface) => {

    const { http } = props
    const {handleGetUpdateUsers, user} = useUsers()
    const { register, handleSubmit, formState: {
        errors
    }, reset } = useForm<SignUpInterface>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: user
    })

    const { toast } = useToast()
    const onSubmit = handleSubmit(async (formData) => {
        const response = await http.post<SignUpInterface & { statusCode?: number, message?: string }, SignUpInterface>('http://localhost:3000/users', formData)
        if (response.statusCode && response.statusCode === 400) {
            toast({
                variant: "destructive",
                title: "Ops :/",
                description: response.message || "Algo inesperado aconteceu"
            })
            return
        }
        toast({
            title: 'Parabéns ;)',
            description: "Usuário criado com sucesso!",
        })
        handleGetUpdateUsers()
    })

    useEffect(() => {
        if (user) {
            reset({
                cep: user.cep,
                email: user.email,
                name: user.name
            })
        }
    }, [user])
    return {
        register,
        onSubmit,
        errors
    }
}