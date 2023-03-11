import React from 'react'

const Display = ({ arr }) => {

    return (
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
        </div>
    )
}

export default Display