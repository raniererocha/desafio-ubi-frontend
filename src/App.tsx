import { ListUsers } from "./components/ListUsers"
import { SignUpUser } from "./components/SignUpUser"
import { Toaster } from "./components/ui/toaster"

function App() {
  return (

      <main className="w-screen min-h-screen py-2 bg-zinc-800 text-white flex flex-col px-4 gap-4 items-center">
        <SignUpUser />
        <ListUsers />
        <Toaster />
      </main>
  
  )
}

export default App
