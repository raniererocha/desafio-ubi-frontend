import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { useListUsersModel } from "./listusers.model"


type ListUserProps = ReturnType<typeof useListUsersModel>

export const ListUsersView = (props: ListUserProps) => {
    
    const {users,handleSelectUser} = props

    return (
        <Card className="w-full bg-transparent border-none text-white">
            <CardHeader>
                <CardTitle>
                    Lista de usuários cadastrados
                </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-2">
             {
                users && users.map(user => (
                    <Card className="cursor-pointer" onClick={() => {handleSelectUser(user.id)}}>
                    <CardHeader>
                        <CardTitle>{user.name}</CardTitle>
                        <CardDescription>{user.email}</CardDescription>
                        <CardDescription>{user.cep}</CardDescription>
                    </CardHeader>
                </Card>
                ))
             }
            </CardContent>
        </Card>
    )
}