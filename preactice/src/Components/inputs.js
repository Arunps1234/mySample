import React , {useEffect, useState}from 'react'
import "./Input.css";
import Display from './Display';



const Input=()=>{

    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[phone, setPhone]=useState("");

    const [myvalue, setvalue]=useState()

    
const arr =[

]


const submitForm=(e)=>{
arr.push(
    {
        name:name,
        email:email,
        phone:phone
    }
)

}

const submit = ()=>{
    console.log("clicked")
}


console.log(arr)

    return(
        <div>
                <div>
<label>Name :</label>
<input type='text' placeholder='Enter Name' value={name} onChange={e=>setName(e.target.value)}/>
</div>
<br/>

<div>
<label>Email :</label>
<input type='email' placeholder='Enter Email' value={email} onChange={e=>setEmail(e.target.value)}/>
</div>
<br/>
<div>
<label>Phone :</label>
<input type='text' placeholder='Enter Number' value={phone} onChange={e=>setPhone(e.target.value)}/>
</div>

<div>
<button type="button" className="btn btn-success" onClick={submitForm}>Submit</button>

</div>
            <br/>
            <hr/>
            <div >
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {arr && arr.map(x => (
                        <tr>
                            <td>{x.name}</td>
                            <td>{x.email}</td>
                            <td>{x.phone}</td>
                        </tr>
                    ))




                    }          </tbody>
            </table>
        </div>        </div>
    )
}
export default Input