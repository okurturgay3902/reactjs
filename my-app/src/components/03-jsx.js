import React from 'react'

const Jsx = () => {

    const isAdmin =true;

    

    // if yerine tornery calismasi
  return (
    <div> 
        {isAdmin ? 
        (<>
        <h2>Admin Menu</h2>
        <ul>
            <li>Create User</li>
            <li>Update User</li>
            <li>Delete User</li>
        </ul>
        </>)
         : (<>
         <h2>User Menu</h2>
        <ul>

            <li>Create Review</li>
            <li>Update Review</li>
            
        </ul>
         </>)}

        {/* 
        <h2>Admin Menu</h2>
        <ul>

            <li>Create User</li>
            <li>Update User</li>
            <li>Delete User</li>
        </ul>

        <h2>User Menu</h2>
        <ul>

            <li>Create Review</li>
            <li>Update Review</li>
            
        </ul>*/}
    </div>
  )
}

const test1 = ()=>{
   return ( <>
    test1
    </>)
}

const test2 = ()=>{
    return (<>
    test2
    </>)
}

export default Jsx;
export {test1, test2}
