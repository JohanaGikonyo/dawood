import React, {useState,useEffect} from 'react'
import { repair } from '../helpers/helpers';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Image from 'next/image';
import Modal from './Modal';
import { UploadedRepair } from '../helpers/fetched';
function Benches() {
  const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    conts[items, setItems]=useState(repair)
   useEffect(()=>{
          const fetchData=async()=>{    
            const data=await UploadedRepair()
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
    <div className='px-2'>  
        <div className='flex items-start justify-center py-5'><h1 className='font-semibold text-2xl text-teal-600'>We Renew Furnitures</h1></div>   
           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {items.map((item) => (
      <div onClick={() => openModal(item)} key={item.id} className="pb-3 hover:cursor-pointer relative flex flex-col items-center justify-evenly bg-gradient-to-t from-slate-100 to-slate-50 ">
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
        <button className="mt-2 flex border-2 text-slate-500 px-2 py-1 rounded-xl hover:text-white hover:bg-teal-600"  onClick={() => openModal(item)}>
        Order <ArrowRightAltIcon className="ml-1" />
        </button>
      </div>
    ))}
  </div>      <Modal isOpen={isModalOpen} onClose={closeModal} item={selectedItem} />
  </div>
  )
}

export default Benches