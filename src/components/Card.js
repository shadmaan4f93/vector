import React, { useState, useEffect, useCallback } from "react";
import { ReactSortable } from "react-sortablejs";

import Modal from "./Modal.js";

import data from "../data/data.json";

export default function Card() {

	const [state, setState] = useState(data);
	const [modalstate, setModalstate] = useState({
    isOpen: false,
    data: []
	})
	
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


  return (
		<div className="container">	
			<ReactSortable list={state} setList={setState}>
					{state.map(item => (
						<div key={item.position} className="card custome-card">
							<p>{item.title}</p><br></br> 
							<img src={item.img} onClick={() => {toggleModal(item)}}  style={{width:"250px", height: "200px"}} alt={item.title}/>
						</div>
					))}
			</ReactSortable>	

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
