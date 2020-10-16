import React, { useEffect, useState } from 'react';

import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';

const AdminServiceList = () => {
    const [alldata,setAlldata]=useState()
useEffect(() => {
    fetch('http://localhost:5000/allData')
    .then(res=>res.json())
    .then(data=>setAlldata(data))
},[])

    return (
        <div className="row mt-5 mx-5">
        <div className="col-md-3">
           <CustomerSidebar></CustomerSidebar>
         </div> 
         <div style={{backgroundColor:"#F4F7FC",height:'550px'}}  className="pt-5 pl-5 col-md-9">
         <table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">
          Email Id
      </th>
      <th scope="col">Service</th>
      <th scope="col">Project detail</th>
    </tr>
  </thead>
  <tbody>
   
    {
        !alldata?<tr>Please wait data is loading</tr> : alldata.map(pd=><tr  key={pd._id}>
            <th scope="row"> {pd.name}</th>
            <td>{pd.email}</td>
             <td>{pd.service}</td>
              <td>{pd.detail}</td>
          </tr>)
    }
  </tbody>
</table>
         </div>
     </div>
    );
};

export default AdminServiceList;