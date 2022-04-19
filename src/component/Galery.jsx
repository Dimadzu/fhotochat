import React from 'react';
import '../App';

export const Image=(props)=>{
let {allPhoto, showModal}=props;
const showModal_click=id=>{
	return()=>{
      showModal(id)}; 
;
}

    return(
        
            allPhoto.map((item) => ( 
                <img className="image" src = { item.url } alt = 'image' key= {item.id} data-key={item.id} onClick={showModal_click(item.id)} />
            ))
        
    )

}