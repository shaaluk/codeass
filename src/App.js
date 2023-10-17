// import { Bar } from 'react-chartjs-2';
import './App.css';
import Navbar from './Navbar';
//import { Doughnut } from 'react-chartjs-2';

// import {
//   Chart as ChartJS,
//   BarElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// } from 'chart.js';


// ChartJS.register(
//   BarElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// );

function App() {

  
  // const data = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //   datasets: [
  //     {
  //       label: 'Quaterly',
  //       data: [4, 3, 7, 6, 7.2, 7.6, 7.4, 6, 6, 6.6, 6.4, 5.8],
  //       backgroundColor: 'purple',
  //       borderWidth: 1,
  //       borderRadius: 20
  //     }
  //   ]
  // }

  
  // const data1={
  //   labels:['mon','tue','wed','thurs']
    // datasets:[
    //   {
    //     label:"whatever",
    //     data1:[5,6,7],
    //   }
   // ]
   //}

  return (
  
    <div className="App">
       
       <div className='sideBy'>
      
      <Navbar/>
  
      <h1>Look</h1>
      </div>  
      {/* <Dashboard/>
      <h3>Bar chart</h3>
      <div style={

        {
          padding: '110px',
          width: '80%'
        }

      }>
        <Bar

          data={data}
        // options={options}

        ></Bar>
      </div>

      <h2>Dounought Chart</h2>
      <div
        style={
          {
            padding: '20px',
            width: '50%'
          }
        }>

        <Doughnut
          data={data}

        //  options={options}
        ></Doughnut>

      </div> */}
    </div>
  );
 

}

export default App;
