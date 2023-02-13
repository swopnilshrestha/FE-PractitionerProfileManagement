import React from "react";

const Dashboard = () => {
  return (
    <h6>Dashboard</h6>
    // <div className="px-0 bg-light">
    //   <div className="d-flex">
    //     <div className="d-flex align-items-center" id="navbar">
    //       <h1>test</h1>
    //     </div>
    //     <div id="navbar2" className="d-flex justify-content-end pe-4">
    //       <span className="far fa-user-circle ">user</span>
    //     </div>
    //   </div>

    //   <div className="d-md-flex">
    //     <ul id="navbar-items" className="p-0">
    //       <li>
    //         <span className="fas fa-th-list"></span>
    //         <span className="ps-3 name">Dashboard</span>
    //       </li>
    //       <li>
    //         <span className="fas fa-chart-line"></span>
    //         <span className="ps-3 name">TRANSACTIONS</span>
    //       </li>
    //       <li>
    //         <span className="fas fa-clipboard-check"></span>
    //         <span className="ps-3 name">finanials</span>
    //       </li>
    //       <li>
    //         <span className="fas fa-suitcase-rolling"></span>
    //         <span className="ps-3 name">frauds</span>
    //       </li>
    //       <li>
    //         <span className="fas fa-calendar-alt"></span>
    //         <span className="ps-3 name">account</span>
    //       </li>
    //       <li>
    //         <span className="fas fa-comment-alt"></span>
    //         <span className="ps-3 name">reqests</span>
    //       </li>
    //       <li>
    //         <span className="fas fa-store-alt"></span>
    //         <span className="ps-3 name">merchants</span>
    //       </li>
    //     </ul>
    //     <div id="topnavbar">
    //       <div className="topnav mb-3">
    //         <div className="d-flex px-1">
    //           <a href="#home" className="active">
    //             merchants
    //           </a>
    //           <a href="#news">users</a>
    //           <a href="#contact">
    //             company<span className="px-1">&</span>mid
    //           </a>
    //           <a href="#contact">account</a>
    //         </div>
    //       </div>
    //       <div className="d-flex align-items-center mb-3 px-md-3 px-2">
    //         <span className="text-uppercase fs13 fw-bolder pe-3">
    //           search<span className="ps-1">by</span>
    //         </span>
    //         <form className="example d-flex align-items-center">
    //           <input
    //             type="text"
    //             placeholder="Type in Company Name Or Mid id"
    //             name="search"
    //           />
    //           <button type="submit">
    //             <i className="fa fa-search" />
    //           </button>
    //         </form>
    //       </div>
    //       <div className="table-responsive px-2">
    //         <table className="table table-borderless">
    //           <thead>
    //             <tr>
    //               <th scope="col">
    //                 COMPANY<span>ID</span>
    //               </th>
    //               <th scope="col">COMPANY</th>
    //               <th scope="col">MID</th>
    //               <th scope="col">
    //                 BANK<span className="ps-1">NAME</span>
    //               </th>
    //               <th scope="col">CUR</th>
    //               <th className="text-center" scope="col">
    //                 3DS
    //               </th>
    //               <th className="text-center" scope="col">
    //                 ACTIVE
    //               </th>
    //               <th className="text-center" scope="col">
    //                 ACTION
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr>
    //               <td>
    //                 <span className="bg-blight">235</span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">
    //                   ABC<span className="ps-1">LOANS</span>
    //                 </span>
    //               </td>
    //               <td>
    //                 <span className="bg-blight">1343</span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">
    //                   Faster<span>Trading</span>
    //                 </span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">GBP</span>
    //               </td>
    //               <td className="text-center px-0">
    //                 <span className="fas fa-check"></span>
    //               </td>
    //               <td className="text-center">
    //                 <span className="fas fa-check"></span>
    //               </td>
    //               <td className="text-center">
    //                 <span className="fas fa-ellipsis-h"></span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>
    //                 <span className="bg-blight">236</span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">
    //                   BCE<span className="ps-1">LOANS</span>
    //                 </span>
    //               </td>
    //               <td>
    //                 <span className="bg-blight">1298</span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">
    //                   Secure<span>Trading</span>
    //                 </span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">GBP</span>
    //               </td>
    //               <td className="text-center px-0">
    //                 <span className="fas fa-check"></span>
    //               </td>
    //               <td className="text-center">
    //                 <span className="fas fa-check"></span>
    //               </td>
    //               <td className="text-center">
    //                 <span className="fas fa-ellipsis-h"></span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>
    //                 <span className="bg-blight">237</span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">
    //                   CDE<span className="ps-1">LOANS</span>
    //                 </span>
    //               </td>
    //               <td>
    //                 <span className="bg-blight">1313</span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">
    //                   Secure<span>Trading</span>
    //                 </span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">GBP</span>
    //               </td>
    //               <td className="text-center px-0">
    //                 <span className="fas fa-times"></span>
    //               </td>
    //               <td className="text-center">
    //                 <span className="fas fa-check"></span>
    //               </td>
    //               <td className="text-center">
    //                 <span className="fas fa-ellipsis-h"></span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>
    //                 <span className="bg-blight">235</span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">
    //                   DEF<span className="ps-1">LOANS</span>
    //                 </span>
    //               </td>
    //               <td>
    //                 <span className="bg-blight">1323</span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">
    //                   Secure<span>Trading</span>
    //                 </span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">GBP</span>
    //               </td>
    //               <td className="text-center px-0">
    //                 <span className="fas fa-times"></span>
    //               </td>
    //               <td className="text-center">
    //                 <span className="fas fa-check"></span>
    //               </td>
    //               <td className="text-center">
    //                 <span className="fas fa-ellipsis-h"></span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>
    //                 <span className="bg-blight">235</span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">
    //                   FEG<span className="ps-1">LOANS</span>
    //                 </span>
    //               </td>
    //               <td>
    //                 <span className="bg-blight">1443</span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">
    //                   Secure<span>Trading</span>
    //                 </span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">GBP</span>
    //               </td>
    //               <td className="text-center px-0">
    //                 <span className="fas fa-times"></span>
    //               </td>
    //               <td className="text-center">
    //                 <span className="fas fa-check"></span>
    //               </td>
    //               <td className="text-center">
    //                 <span className="fas fa-ellipsis-h"></span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>
    //                 <span className="bg-blight">237</span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">
    //                   GFR<span className="ps-1">LOANS</span>
    //                 </span>
    //               </td>
    //               <td>
    //                 <span className="bg-blight">1943</span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">
    //                   Faster<span>Trading</span>
    //                 </span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">GBP</span>
    //               </td>
    //               <td className="text-center px-0">
    //                 <span className="fas fa-times"></span>
    //               </td>
    //               <td className="text-center">
    //                 <span className="fas fa-check"></span>
    //               </td>
    //               <td className="text-center">
    //                 <span className="fas fa-ellipsis-h"></span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>
    //                 <span className="bg-blight">235</span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">
    //                   ABC<span className="ps-1">LOANS</span>
    //                 </span>
    //               </td>
    //               <td>
    //                 <span className="bg-blight">1343</span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">
    //                   Faster<span>Trading</span>
    //                 </span>
    //               </td>
    //               <td>
    //                 <span className="bg-bdark">GBP</span>
    //               </td>
    //               <td className="text-center px-0">
    //                 <span className="fas fa-times"></span>
    //               </td>
    //               <td className="text-center">
    //                 <span className="fas fa-check"></span>
    //               </td>
    //               <td className="text-center">
    //                 <span className="fas fa-ellipsis-h"></span>
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //       <div className="d-flex align-items-center justify-content-between px-3 mt-3">
    //         <div className="bg-bdark fs13">
    //           <span>Page</span>
    //           <input className="input-10 text-center" type="text" value="1" />
    //           <span>
    //             <span className="px-1">of</span>1
    //           </span>
    //         </div>
    //         <div className="d-flex justify-content-end bg-bdark fs13">
    //           <span className="pe-1">Show</span>
    //           <input className="input-10" type="number" value="25" />
    //           <span className="ps-2">
    //             <span className="pe-2">/</span>Page
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Dashboard;
