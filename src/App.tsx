import React, {useEffect} from 'react';
import './App.css';
import {useActions} from "./hooks/useActions";
import { Toaster } from "react-hot-toast";
import SearchForm from "./components/search-form/Search-form";
function App() {
  const {citiesActions} = useActions()
  useEffect(() => {
    citiesActions.getCitiesAction()
  }, [])
  return (
    <div>
     <SearchForm />
      <Toaster />
    </div>
  );
}

export default App;
