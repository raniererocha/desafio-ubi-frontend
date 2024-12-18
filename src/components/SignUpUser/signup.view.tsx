import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useSignUpModel } from "./signup.model"



type SignUpViewProps = ReturnType<typeof useSignUpModel>

export const SignUpUserView = (props: SignUpViewProps) => {
  const { register, onSubmit, errors } = props
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>
          Cadastro de Usuário
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-2" onSubmit={onSubmit}>
          <div>
            <Label>Nome:</Label>
            <Input {...register('name')} />
            {errors.name?.message ?? ""}
          </div>
          <div>
            <Label>Email:</Label>
            <Input {...register('email')} />
            {errors.email?.message ?? ""}
          </div>
          <div>
            <Label>CEP:</Label>
            <Input {...register('cep')} />
            {errors.cep?.message ?? ""}
          </div>
          <Button className="w-full mt-2">
            Cadastrar
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}