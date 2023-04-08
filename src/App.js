import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react';
import { GlobalContext } from "./contexts/GlobalContext.jsx";
import Router from "./routes/Router";


function App() {
  const [userInfo, setUserInfo] = useState({name: "", email: "", password: ""})
  const [login, setLogin] = useState({email: "", password: ""})
  const [post, setPost] = useState([])

  const context = {}
  return (
    <GlobalContext.Provider value={context}>
      <ChakraProvider>
        <Router/>
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}

export default App;
