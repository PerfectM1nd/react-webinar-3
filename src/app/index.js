import {useCallback, useContext, useEffect, useState} from 'react';
import Main from "./main";
import Basket from "./basket";
import useStore from "../store/use-store";
import useSelector from "../store/use-selector";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
      <Router>
        <Routes>
          <Route path=":limit?/:skip?" element={<Main/>} />
        </Routes>
      </Router>
      {activeModal === 'basket' && <Basket/>}
    </>
  );
}

export default App;
