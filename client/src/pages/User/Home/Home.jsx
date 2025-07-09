import React from 'react'
import {motion}from 'framer-motion'
import "./Home.css"
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {


  const navigate = useNavigate()

const menuhandler = ()=>{
  navigate("/menu")
}


  const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};


  return (

    <div className='homemain'>

    <div className='homebox1'>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
      className='homebox11'>
         <motion.h1
           initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
         >Commerce <span className='burger'>Burger</span>  Wala</motion.h1>
         <h3 
        >Give Yourself a tasty Burger</h3>
        <motion.button onClick={menuhandler}
       whileTap={{ scale: 0.95 }}
    whileHover={{ scale: 1.05, backgroundColor: "#e97014" }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
      > Explore Menu</motion.button>
      </motion.div>
      <div className='homebox12'>
      
    <motion.button
       initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
    whileTap={{ scale: 0.95 }}
    whileHover={{ scale: 1.05, backgroundColor: "transparent" }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}><img src="http://res.cloudinary.com/dhte80xl2/image/upload/v1749965972/m3mhy3rfcuyg4l4rggot.jpg" alt="" /></motion.button>
      </div>
    </div>



    <div className='homebox2'>
 <motion.button 
    initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
  whileTap={{ scale: 0.95 }}
    whileHover={{ scale: 1.05, backgroundColor: "transparent" }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className='sandbutton'><img src="././src/assets/Pizza.png" alt="" className='sandimage'/></motion.button>
   <motion.button 
     initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
   whileTap={{ scale: 0.95 }}
    whileHover={{ scale: 1.05, backgroundColor: "transparent" }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}className='sandbutton'><img src="././src/assets/chips.webp" alt="" className='sandimage'/></motion.button> 
  <motion.button 
    initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
  whileTap={{ scale: 0.95 }}
    whileHover={{ scale: 1.05, backgroundColor: "transparent" }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}className='sandbutton'><img src="././src/assets/noodle.jpg" alt="" className='sandimage'/></motion.button>
     <motion.button 
       initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
           whileTap={{ scale: 0.95 }}
    whileHover={{ scale: 1.05, backgroundColor: "transparent" }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}className='sandbutton'><img src="././src/assets/samosa.webp" alt="" className='sandimage'/></motion.button>
     <motion.button 
       initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
           whileTap={{ scale: 0.95 }}
    whileHover={{ scale: 1.05, backgroundColor: "transparent" }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}className='sandbutton'><img src="././src/assets/pasta.avif" alt="" className='sandimage'/></motion.button>
     <motion.button 
       initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
           whileTap={{ scale: 0.95 }}
    whileHover={{ scale: 1.05, backgroundColor: "transparent" }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}className='sandbutton'><img src="././src/assets/sand.jpg" alt="" className='sandimage' /></motion.button> 

    </div>
   
   
   </div>
  )
}

export default Home



{/* <section className='home'>

   

    <motion.div 
     initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className='right'>
    </motion.div>
   </section>


   <motion.div 
    className='sand'
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}>
   




  //  </motion.div> */}


  
// .home {
//   height: 60vh;

//   display: flex;

//   > .left {
//     margin-top: 1.8rem;
//     /* background-color: antiquewhite; */
//     width: 55%;

    // > h1 {
    //   margin-top: 3vh;
    //   padding-left: 1.3rem;
    //   font-size: 10vh;
    //   > span {
    //     color: #e68932;
    //   }
    // }

    // > h3 {
    //   padding-left: 2rem;
    //   font-size: 4vh;
    //   margin-top: 1rem;
    // }

    // > button {
    //   padding: 0.8rem 1.8rem;
    //   margin-left: 2.3rem;
    //   margin-top: 7vh;
    //   font-size: 1.1rem;
    //   font-weight: 600;
    //   border-radius: 1rem;
    //   outline: none;
    //   /* border: 1.7px solid black; */
    //   background-color: #f6973f;
    //   color: white;

    //   &:hover {
    //     cursor: pointer;
    //     background-color: #e97014;
    //     color: black;
    //   }
    // }
//   }

//   > .right {
//     /* background-color: azure; */
//     width: 45%;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     > img {
//       height: 80%;
//       width: 72%;
//     }
//   }
// }

// .sand {
//   width: 100vw;
//   position: absolute;
//   bottom: 1%;
//   height: 25vh;
//   display: flex;
//   width: 100%;
//   justify-content: space-evenly;


//   >.sandbutton{
   
//     border: none;
//     outline: none;
//     background-color: transparent;

//     &:hover{
//       cursor: pointer;
//     }

//   }

//   .sandimage {
//     height: 100%;
//     width: 100%;
//   }
// }

// @media (max-width: 600px) {



//   .homemain {
//     height: calc(100vh - 4.5rem);

//     > .home {
//       display: flex;
//       height: auto;

//       > .left {
//         width: 60%;
//         margin-top: 0.2rem;
//         height: 100%;

//         > h1 {
//           font-size: 1.5rem;
//         }

//         > h3 {
//           font-size: 1rem;
//           padding-left: 1.3rem;
//         }

//         > button {
//           padding: 0.5rem 1.4rem;
//           margin-left: 1.3rem;
//           margin-top: 1.3rem;
//           font-size: 1.3rem;
//           margin-bottom: 0.3rem;
//         }
//       }

//       > .right {
//         width: 40%;

//         > img {
//           width: 85%;
//           height: auto;
//         }
//       }
//     }
//   }


//    .sand {
//     height: 60vh;
//     width: 100vw;
//     display: flex;
//     flex-wrap: wrap;
//     gap: 10px;
    

    
//     > .sandimage {
      
//   height: 5rem;
//   width: 5rem;
//     }
//   }

 
// }

// @media (max-width: 900px) {

//     .homemain{

//         height: 90vh;
//     }

//   .home {
//     margin-top: 2rem;
//     display: flex;
//     height: auto;

//     > .left {
//       width: 60%;
//       margin-top: 0.2rem;
//       height: 100%;

//       > h1 {
//         font-size: 3rem;
//       }

//       > h3 {
//         font-size: 1rem;
//         padding-left: 1.3rem;
//       }

//       > button {
//         padding: 0.5rem 1.4rem;
//         margin-left: 1.3rem;
//         margin-top: 1.3rem;
//         font-size: 1.3rem;
//         margin-bottom: 0.3rem;
//       }
//     }

//     > .right {
//       width: 40%;

//       > img {
//         width: 90%;
//         height: auto;
//       }
//     }
//   }

//   .sand {
//     height: 60vh;
//     width: 100vw;
//     display: flex;
//     align-items: center;
//     flex-wrap: wrap;
//     gap: 15px;
//     padding: 0px 20px;
//     padding-top:0.2rem;

//     >.sandbutton{
//       height: 10rem;
//       width: 10rem;
//     }

//     > .sandimage {
//   height: 12rem;
//   width: 12rem;
//     }
//   }
// }








