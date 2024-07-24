import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Recap from "./components/Recap";
import Data from "./components/Data";


import Chart from "react-apexcharts";


import "./assets/css/main.css";
import { useEffect, useState } from "react";


function App() {
   const [data, setData] = useState([]);


   // const addData = (e) => {
   //     const newCode = Math.floor(1000 + Math.random() * 9000);
   //     setData((prevData) => [...prevData, { ...e, code: newCode }]);


   //     setTimeout(() => {
   //         localStorage.setItem(
   //             "moneyData",
   //             JSON.stringify([...data, { ...e, code: newCode }])
   //         );
   //     }, 100);
   // };


   const addData = (e) => {
       const newCode = Math.floor(1000 + Math.random() * 9000);


       const existingItemIndex = data.findIndex(
           (item) => item.title === e.title
       );


       if (existingItemIndex !== -1) {
           const newData = [...data];
           newData[existingItemIndex].value += e.value;
           setData(newData);
       } else {
           setData((prevData) => [...prevData, { ...e, code: newCode }]);
       }


       setTimeout(() => {
           localStorage.setItem(
               "moneyData",
               JSON.stringify([...data, { ...e, code: newCode }])
           );
       }, 100);
   };


   const deleteData = (e) => {
       setData((prevData) => {
           const newData = prevData.filter((item) => item.code !== e);
           localStorage.setItem("moneyData", JSON.stringify(newData));
           return newData;
       });
   };


   useEffect(() => {
       setTimeout(() => {
           const localStorageData = JSON.parse(
               localStorage.getItem("moneyData")
           );


           if (localStorageData) {
               setData(localStorageData);
           }
       });
   }, []);


   useEffect(() => {
       const processData = (data) => {
           let type1Sum = 0;
           let type2Sum = 0;
           let type2Values = [];


           data.forEach((item) => {
               if (item.type === 1) {
                   type1Sum += item.value;
               } else if (item.type === 2) {
                   type2Sum += item.value;
                   type2Values.push(item.value);
               }
           });


           const series = [type1Sum - type2Sum, ...type2Values];


           const labels = [
               "Sisa",
               ...data
                   .filter((item) => item.type === 2)
                   .map((item) => item.title),
           ];


           return { series, labels };
       };


       const { series, labels } = processData(data);
       setChartData({ series, labels });
   }, [data]);


   const [chartData, setChartData] = useState({
       series: [],
       labels: [],
   });


   return (
       <>
           <div className='container mt-5 px-3'>
               <h1>Hi</h1>
               <p className='fs-5'>
                   Selamat Datang di Aplikasi{" "}
                   <span className='text-primary fw-medium'>
                       Money Management
                   </span>
               </p>


               {/* Chart */}
               <div className='d-flex justify-content-center'>
                   <Chart
                       options={{
                           labels: chartData.labels,
                           chart: {
                               width: 380,
                               type: "pie",
                           },
                           responsive: [
                               {
                                   breakpoint: 480,
                                   options: {
                                       chart: {
                                           width: 200,
                                       },
                                       legend: {
                                           position: "bottom",
                                       },
                                   },
                               },
                           ],
                       }}
                       series={chartData.series}
                       type='pie'
                       width={380}
                   />
               </div>


               <Recap data={data} />
               <Data data={data} addData={addData} deleteData={deleteData} />
           </div>
       </>
   );
}


export default App;
