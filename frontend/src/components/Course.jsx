import React, { useEffect, useState } from 'react'
import Cards from './Cards'
//import list from "../../public/list.json";
import {Link} from 'react-router-dom';
import axios from "axios";

function Course() {
   const [book , setBook ] = useState([]);
   useEffect(() =>{
      const getBook = async() => {
         try{
            const res = await axios.get("https://bookstore-4cmg.onrender.com/book");
            console.log(res.data);
            setBook(res.data);
         }catch (error) {
            console.log(error);
         }
      }
      getBook();
   },[]);
  return (
    <>
         <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'> 
         <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-accent'>here! :)</span></h1>
            <p className='mt-12'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iusto doloremque, iure libero sequi repudiandae ad harum doloribus dolore numquam?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fuga quasi corrupti explicabo vero doloremque odit architecto voluptatibus dolorem inventore expedita quidem iure suscipit ut repellendus et. voluptatibus dolorem inventore expedita quidem iure suscipit ut repellendus et. 
            </p>
           <Link to="/">
           <button className='mt-6 btn-accent px-4 py-2 rounded-md'>Back</button>
           </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
             {
                book.map((item) => (
                <Cards key={item.id} item={item}/>
               ))
            }
        </div>
       </div>
    </>
  )
}

export default Course
