import PatientListNavabar from '@/components/patientlist/PatientListNavabar'
import Image from 'next/image'
import React from 'react'
import {FiSearch} from "react-icons/fi"
import {patient} from "../../fakedata/PATIENT_FAKE_DATA.js"

const PatientCard = ({img, name, id} : any) => {
    return(
        <div className='flex justify-between items-center py-[22px] px-[25px] bg-white border border-primary-100 mt-[16px] rounded-lg'>
            <div className='flex items-center gap-6 text-[24px]'>
                <div className='relative w-[56px] h-[56px]'>
                    <Image src={img} alt="patient image" fill />
                </div>
                <div className='text-[24px] text-primary-600 font-bold'>
                    {name}
                </div>
            </div>
            <button className="border border-primary-100 text-primary-600 w-[174px] h-[56px] rounded-full flex items-center justify-center gap-2 text-[17px] font-bold bg-primary-50">Open Profile</button>
        </div>
    )
}

const index = () => {
  return (
    <div>
        <PatientListNavabar />
        <div className='py-[47px] px-[29px] flex justify-between'>
            <h1 className='text-[40px] text-primary-600 font-bold'>Patient List</h1>
            <button className="border border-primary-100 text-primary-600 w-[184px] h-[56px] rounded-full flex items-center justify-center gap-2 text-[17px] font-bold"><FiSearch />Search Patients</button>
        </div>
        <div className='px-[29px]'>
            {
                patient.map((pt : any) => <PatientCard key={pt.id} img={pt.img} name={pt.name} />)
            }
        </div>
    </div>
  )
}

export default index