import { FetchApiHttp } from "../../infra/http/FetchApiHttp"
import { useSignUpModel } from "./signup.model"
import { SignUpUserView } from "./signup.view"

export const SignUpUser = () => {
    const http = new FetchApiHttp()
    const methods = useSignUpModel({
        http
    })
    return (
        <SignUpUserView {...methods} />
    )
}