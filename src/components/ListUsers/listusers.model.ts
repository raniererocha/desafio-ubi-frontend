import { useUsers } from "../../storage/UsersProvider"

export const useListUsersModel = () => {
    
    const {users, handleSelectUser} = useUsers()

    return { users, handleSelectUser }
}