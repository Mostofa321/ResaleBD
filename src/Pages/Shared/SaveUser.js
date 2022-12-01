// import React, { useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SaveUser = ({user}) => {
//     console.log(user)
//     useEffect(()=>{
//         fetch('http://localhost:5000/user', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(user)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if(data.insertedId){
//                     return toast("Food Added Successfully!")
//                 };
//             })
//             .catch(err => console.log(err));
        
//     },[user])

//     return <ToastContainer />
// };

// export default SaveUser;