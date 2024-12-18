import { useListUsersModel } from "./listusers.model"
import { ListUsersView } from "./listusers.view"

export const ListUsers = () => {
    const methods = useListUsersModel()
    return (
        <ListUsersView {...methods} />
    )
}