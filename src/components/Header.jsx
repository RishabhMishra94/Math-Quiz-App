// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrementTimer } from '../features/quizSlice';

// const Header = () => {
//   const { userName, timer, isQuizCompleted } = useSelector((state) => state.quiz);
//   const dispatch = useDispatch();
 

//   useEffect(() => {
//     let timerInterval;

//      if (!isQuizCompleted && timer > 0) {
//       timerInterval = setInterval(() => {
//         dispatch(decrementTimer());
//       }, 1000);
//     } else {
//       clearInterval(timerInterval);
//     }

//     return () => clearInterval(timerInterval);
//   }, [timer, dispatch, isQuizCompleted]);

//   return (
//     <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg p-4">
//       <div className="flex justify-between items-center p-4">
      
//         <h1 className="text-black font-bold text-lg md:text-2xl tracking-wide">
//           Math Quiz App
//         </h1>

//     {userName && (
//           <div className="flex items-center space-x-3">
            
//             <p className="text-white font-bold text-lg  lg:text-base ">
//             Hello {userName}

//             </p>
//           </div>
//         )}

//         <div>
//             <button Onclick={handleLogoutButton}>

//             </button>
//         </div>

      
//         <div className="flex items-center space-x-4 mr-16">
//           {!isQuizCompleted && (
//             <p className="text-white font-bold text-xl">
//               Timer: {timer}s
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;



import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementTimer } from '../features/quizSlice';

const Header = () => {
  const { userName, timer, isQuizCompleted } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  
  const handleLogoutButton = () => {
     window.location.reload(); 
  };

 
  useEffect(() => {
    let timerInterval;

    if (!isQuizCompleted && timer > 0) {
      timerInterval = setInterval(() => {
        dispatch(decrementTimer());
      }, 1000);
    }
    else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [timer, dispatch, isQuizCompleted]);

  return (
    <div className="bg-violet-500 shadow-lg p-4">
      <div className="flex justify-between items-center p-4">
     <h1 className="text-black font-bold text-lg md:text-2xl tracking-wide">
          Math Quiz App
        </h1>
   {userName && (
          <div className="flex items-center space-x-3">
            <p className="text-white font-bold text-lg lg:text-base">
              Hello, {userName}
            </p>
          </div>
        )}

       <div>
          {userName && (
            <button
              onClick={handleLogoutButton}
              className=" bg-voilet-300 text-white font-bold text-lg py-2 px-4 rounded-lg shadow-lg">
             Logout
            </button>
          )}
        </div>

        <div className="flex items-center space-x-4 mr-16">
          {!isQuizCompleted && (
            <p className="text-white font-bold text-xl">
              Timer: {timer}s
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
