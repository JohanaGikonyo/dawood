import React,{useState,useEffect} from 'react';
import { readyMade1 } from '../helpers/helpers';
import { readyMade2 } from '../helpers/helpers';
import Image from 'next/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Modal from './Modal';
import { UploadedReady } from '../helpers/fetched';

function Ready() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
      const [items, setItems] = useState(readyMade1);
  
useEffect(()=>{
      const fetchData=async()=>{    
        const data=await UploadedReady()
        setItems( [...items,...data])
            }
  fetchData()
    },[])
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };
  return (
    <div className="container mx-auto py-16 px-2">
      <div className="mb-10">
      <div className="overflow-x-auto no-scrollbar flex   gap-4 "> 
            {items.map((item, index) => (
                <div onClick={() => openModal(item)} className='hover:cursor-pointer ' key={index}
                >
              <div  className=" flex flex-col items-center  justify-evenly bg-gradient-to-t from-slate-100 to-slate-50 w-60 pb-3">
                 <Image 
                         src={item.img} 
                         alt={item.name} 
                         // layout="responsive"
                         width={200} 
                         height={200} 
                         className="rounded-lg shadow-md mb-4  " 
                         style={{ objectFit: 'fit',width: '100%', 
                           height: '200px', }}
                                   priority 
                       />
                <p className="text-sm mt-2">{item.quality}</p>
                <p className="text-sm font-semibold">{item.name}</p>
                <button className="mt-2 flex border-2 text-slate-500 px-2 py-1 rounded-xl hover:text-white hover:bg-teal-600 justify-between"                 onClick={() => openModal(item)}
                >
                  Order <ArrowRightAltIcon className="ml-1" />
                </button>
              </div></div>
            ))}
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {readyMade2.map((item) => (
            <div onClick={() => openModal(item)} key={item.id} className="pb-3 hover:cursor-pointer relative flex flex-col items-center justify-evenly bg-gradient-to-t from-slate-100 to-slate-50">
               <Image 
                       src={item.img} 
                       alt={item.name} 
                       // layout="responsive"
                       width={200} 
                       height={200} 
                       className="rounded-lg shadow-md mb-4  " 
                       style={{ objectFit: 'fit',width: '100%', 
                         height: '200px', }}
                                 priority 
                     />
              <p className="text-sm">{item.quality}</p>
              <p className="text-sm font-semibold">{item.name}</p>
              <button className="mt-2 flex border-2 text-slate-500 px-2 py-1 rounded-xl hover:text-white hover:bg-teal-600"                 onClick={() => openModal(item)}
              >
              Order <ArrowRightAltIcon className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} item={selectedItem} />

    </div>
  );
}

export default Ready;