import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { GardenGrid } from './components/gardengrid/GardenGrid';
import { TopBar } from './components/topbar/TopBar';
function App() {

  
  return (

    <ChakraProvider>
    <div className="App">
      <TopBar ></TopBar>
        <GardenGrid />
    </div>
    </ChakraProvider>
  );
}

export default App;
