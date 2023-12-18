
import React from 'react'
function DisplayName(props){
    return(
        <div>
<h1>{props.name}</h1>
        </div>
    )
}
export default function List(){
    const studentName=["yaseen","shyam","santhosh","vikram"]
    const stname=studentName.map((stu)=><DisplayName name={stu}</DisplayName>)
}