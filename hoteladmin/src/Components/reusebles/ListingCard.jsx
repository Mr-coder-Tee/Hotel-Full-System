import React,{useEffect,useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const img="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

const ListingCard = ({room,altImage}) => {
  const[currentIndex,setCurrentIndex]=useState(0)
  const[picture,setPicture]=useState(room.galary[currentIndex]||altImage)
  // const picture=room.galary[0]||altImage
  const roomDeatils=room.room
  // console.log(picture)


  // setInterval(()=>{
  //   console.log('ruun')
  //   if(room.galary.length===0){
  //     setPicture(altImage)
  //   }else if(room.galary.length===1){
  //     setPicture(room.galary[0])
  //   }else{
  //     if(currentIndex+1===room.galary.length){
  //       setCurrentIndex(0)
  //     }else{
  //       setCurrentIndex(currentIndex+1)
  //     }
  //   }
  //   setPicture(currentIndex)

  // },10000)

 

   

  return (
    <div className="listingCardContainer">
      <div className="listingCardImageContainer">
        <img src={picture} alt="No image"/>
      </div>
      <div className="listingCardDetails">
        <h3>{`Beds: ${roomDeatils.beds}`}</h3>
        <h3>{`Rooms: ${roomDeatils.rooms}`}</h3>
        <h3>{`Adults: ${roomDeatils.adults}`}</h3>
        <h3>{`children: ${roomDeatils.children}`}</h3>
        <h3>{`Remaing Rooms: ${roomDeatils.avaliableRooms}`}</h3>
        <h3>{`Price: R${room.price}`}</h3>
      </div>
      <div className="listingCardBtns ">
        <div>
          <button className="editListingBtn">
            <FontAwesomeIcon icon={faPencilAlt} className="cardIcon" />
          </button>
        </div>
        <div>
          <button className="deletebtn">
            <FontAwesomeIcon icon={faTrashAlt} className="cardIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
