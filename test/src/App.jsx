import Leftbox from "./leftb0x"
import Rightbox from "./rightbox"
import Navbar from "./navbar"
import Listcard from "./component/Listcard"
import Testcard from "./component/Testcard"


import hero from "./assets/react.svg";

function app(){
  return <>
  <Navbar>

  </Navbar>
  <div className="row">
    <Leftbox></Leftbox>
    <Rightbox></Rightbox> 
</div>
<div className="row">
  <Listcard title ={'hello'} desc ={'i am descrioption'}></Listcard>
  <Listcard title ={"what that"} desc ={'is there any things'}></Listcard>
  <Listcard title ={'how '} desc ={'then there is it'}></Listcard>
  <Listcard title ={'fourth one'} desc={'then is it'}></Listcard>
</div>
<div className="row">
<Testcard info ={'text-white'}>
  <h2 className="">hello world</h2>
  <p>i am good</p>
</Testcard>
<Testcard info = {'tie-breaker'}>
 <button>subscribe</button>
 <button>tweets</button>
 <button>posts</button>
</Testcard>
<Testcard >
  <img src={hero} alt="" />
 
</Testcard>
</div>
</>
}
export default app;