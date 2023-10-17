import React from 'react';
import './Navbar.css';
import { TbSettings2 } from 'react-icons/tb';
import { TbSquareKey } from 'react-icons/tb';
import { LuBox } from 'react-icons/lu';
import { BsPeople } from 'react-icons/bs';
import { PiMoney } from 'react-icons/pi';
import { HiOutlineIdentification } from 'react-icons/hi';
import { TbHelpSquare } from 'react-icons/tb';
import { GrFormNext } from 'react-icons/gr';
import {FcNext} from 'react-icons/fc';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Navbar = () => {

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Quaterly',
        data: [4, 3, 7, 6, 7.2, 7.6, 7.4, 6, 6, 6.6, 6.4, 5.8],
        backgroundColor: 'purple',
        borderWidth: 1,
        borderRadius: 20
      }
    ]
  }

  return (
    <div className='Nav'>
      <div className='sideBar'>
        <div className='head2'>
        <TbSettings2 className="icon2" size={26}></TbSettings2> <b> <span className='head1'>Dashboard</span>  </b>
        </div>
        <div className='navBelow'>
          <div><TbSquareKey></TbSquareKey> <span>Dashboard</span> <FcNext color='white'/></div>
          <div><LuBox></LuBox> <span>Products</span> <GrFormNext color='white'/></div>
          <div><BsPeople></BsPeople> <span>Customers</span> <GrFormNext></GrFormNext></div>
          <div><PiMoney></PiMoney><span> Income</span> <GrFormNext></GrFormNext></div>
          <div><HiOutlineIdentification></HiOutlineIdentification><span>Promote</span> <GrFormNext></GrFormNext></div>
          <div><TbHelpSquare></TbHelpSquare><span>Help</span><GrFormNext></GrFormNext></div>
        </div>

      <div className='infoName'>
        <div>
          <img className="image1" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVCD1ibnU5iRVxK-Ckd1l9gKav19z6KRyKA&usqp=CAU' alt='noImg'/>
        </div>
        <div>
          <p>Evano <br/>
          Project Manager</p>
        </div>
        </div>

      </div>

      <div className='rightBlock'>
        <div>
        <h4>Hello Shalini </h4>
      
        </div>
        

        <div className='sideBox'>
          <div>
          <img className="imageBox1" src='https://media.istockphoto.com/id/1278432471/vector/icon-of-dollar-sign-in-circle-with-two-arrow-green-usd-dollar-symbol.jpg?s=612x612&w=0&k=20&c=NxYIY7Igg4bdb3GukExNZwNqNvFFr-9NeMOY8f1sQo4=' alt='noImg'/>
          </div>

          <div>
            <p>Earning <br/>
            $198k <br/>
            37.8k this month</p>
          </div>
          
          <div>
          <img className="imageBox1" src='https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/3/1/3150.9-notepad-and-pencil-icon-iconbunny.jpg' alt='noImg'/>
          </div>

          <div>
            <p>Earning <br/>
            $198k <br/>
            37.8k this month</p>
          </div>

          <div>
          <img className="imageBox1" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrbZYxoz2TUeLY88lv1UNFa_hVY1725XbQwB6ZdTUuhoWNCLfsxOPAL327ji90Z4iQj4&usqp=CAU' alt='noImg'/>
          </div>

          <div>
            <p>Earning <br/>
            $198k <br/>
            37.8k this month</p>
          </div>

          <div>
          <img className="imageBox1" src='https://static.vecteezy.com/system/resources/previews/005/232/711/original/flat-rounded-icon-of-a-shopping-bag-isolated-on-pink-background-vector.jpg' alt='noImg'/>
          </div>

          <div>
            <p>Earning <br/>
            $198k <br/>
            37.8k this month</p>
          </div>


          </div>

          <div>
            <h3>Overview</h3>
            <div style={

{
  width: '80%'
}

}>
<Bar

  data={data}
// options={options}

></Bar>
</div>
          </div>
      </div>
    </div>
  )
}

export default Navbar;