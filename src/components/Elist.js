import React from 'react'

export default function Elist() {
    return (
        <div className="card bg-light" id="tab" >
        <div className="card bg-dark" style={{height:'200px',width:'700px',margin:'auto',color:'white'}} >
              <table >
              <tr className="bg-primary" >
              <th>Employee ID</th>
              <th>Name </th>
              <th>Designation </th>
              <th>Salary </th>
              </tr>
              <tr>
              <td>1</td>
              <td>Ashok</td>
              <td>developer</td>
              <td>20000</td>
              </tr>
              <tr>
              <td>1</td>
              <td>sneha</td>
              <td>associate</td>
              <td>10000</td>
              </tr>
              <tr>
              <td>1</td>
              <td>lokesh</td>
              <td>tester</td>
              <td>30000</td>
              </tr>
              <tr>
              <td>1</td>
              <td>mahesh</td>
              <td>developer</td>
              <td>40000</td>
              </tr>

              </table>
        </div>
        </div>

    )
}