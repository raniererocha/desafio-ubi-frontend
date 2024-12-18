import {createContext, useCallback, useContext, useEffect, useState} from 'react'
import { UserInterface } from '../components/ListUsers/listusers.shema'
import { HttpContractInterface } from '../infra/http'

const userContext = createContext<{
    users: UserInterface[], 
    user?: UserInterface,
    handleGetUpdateUsers: () => Promise<void>,
    handleSelectUser: (id: string) => void
}>({
    users: [],
    user: undefined,
    handleGetUpdateUsers: () => {
        return new Promise(resolve => resolve())
    },
    handleSelectUser: (id: string) => { console.log(id)}
})

export const UserProvider = ({http,children}: {children: React.ReactNode, http: HttpContractInterface}) => {
    const [users, setUsers] = useState<UserInterface[]>([])
    const [user, setUser] = useState<UserInterface | undefined>(undefined)

    const handleGetUpdateUsers = useCallback(async () => {
        const response = await http.get<UserInterface[]>('http://localhost:3000/users')
        setUsers(response)
    }, [http])

    const handleSelectUser = (id: string) => {
        const currentUser = users.find(user => user.id === id)
        setUser(currentUser)
        return
    }

    useEffect(() => {
      handleGetUpdateUsers()    
    }, [])
    return (
        <userContext.Provider value={{users, handleGetUpdateUsers, user, handleSelectUser}}>
        {children}
        </userContext.Provider>
    )
}

export const useUsers = () => useContext(userContext)