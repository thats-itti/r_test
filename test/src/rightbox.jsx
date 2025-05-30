import { useState } from "react"

function rightbox(){
    const [count,setcount] = useState(0)

    const [name,setname]=useState('rajesh')
function addnum(count)
{
    setcount(count+1)
}
function subnum(count)
{
    setcount(count-1)
}
function changename(){
    setname("rajesh hamal")
}



return <>
<h2>{name}</h2>
<button onClick={changename}>change name</button>
<button onClick={() => setcount(count+1)}>{count}</button>    
        <button onClick={() => addnum(count+1)}>add</button>
        <button onClick ={()=> subnum(count-1)}>sub</button>
    </>
}
export default rightbox;             