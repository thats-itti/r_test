
function Listcard({title,desc}){
    return <>
    
    <div className="col-3 pb-3">
        <div className="card p-2">
<h5>{title}</h5><br />
<br />{desc}
        </div>
        
    </div>
  

    
    </>
}
export default Listcard;