import React, { useState, useEffect, useCallback } from "react";
import { useDispatch , useSelector} from "react-redux";
import {getCard} from "../redux/actions"
import { ReactSortable } from "react-sortablejs";

import loader from "../assets/images/loader.gif";

import Modal from "./Modal.js";

import data from "../data/data.json";

export default function Card() {
  const dispatch = useDispatch();
 
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(true);
	const [modalstate, setModalstate] = useState({
    isOpen: false,
    data: []
  })
  
  useEffect(() => {
		dispatch(getCard());
  },[]);
  
  const response = useSelector((state) =>{
		return state
	})
  
  useEffect(() => { 
		if(response.card.getCardStatus) {
      setState(response.card.cards.data)
		}
	},[response.card.getCardStatus]);


	const toggleModal = (data) => {
    setModalstate({
      isOpen: !modalstate.isOpen,
      data: data
    });
	}
	
	const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      setModalstate({
				isOpen: modalstate.isOpen,
				data: data
			});
    }
  },[]);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  },);

  const imageLoading = () => {
    setLoading(false);
  }

  return (
		<div className="container">	
      {state.length > 0 ? 
			<ReactSortable list={state} setList={setState}>
					{state.map(item => (
						<div key={item.position} className="card custome-card">
							<p>{item.title}</p><br></br> 
              <img src={loader} style={{ width:"250px", height: "200px", display: loading ? "block" : "none"}} alt="..." />
							<img src={item.img} onClick={() => {toggleModal(item)}}  style={{width:"250px", height: "200px", display: loading ? "none" : "block"}} alt={item.title} onLoad={imageLoading}/>
						</div>
					))}
      </ReactSortable>	
      : <div style={{textAlign:"center"}}><img src={loader} alt="..." /></div>}

			<Modal show={modalstate.isOpen}
          onClose={() => {toggleModal(false)}}>
          { modalstate.data && 
            <div className="alignCenter">
              <img src={modalstate.data.img} style={{width:"100%"}} alt={modalstate.data.title}/>
            </div>
          }
      </Modal>	
		</div>
  );
};
