import React from 'react'
export default function Listt(){
    const college=[{id:1,stuName:"vikram",age:18},
    {id:1,stuName:"sachin",age:19},
    {id:1,stuName:"santhosh",age:48}]
    const display=college.map((col)=><li key={col.id}>{col.stuName}   {col.age}</li>)
    return(
        <div>
            <h1>List of Students</h1>
            {display}
        </div>
    )

}