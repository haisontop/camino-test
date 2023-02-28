import PatientCard from "@/components/PatientCard";
import PatientListNavabar from "@/components/patientlist/PatientListNavabar";
import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { patients } from "../../fakedata/PATIENT_FAKE_DATA.js";

const Patients = () => {
  return (
    <div>
      <PatientListNavabar />
      <div className="py-[47px] px-[29px] flex justify-between">
        <h1 className="text-[40px] text-primary-600 font-bold">Patient List</h1>
        <button className="border border-primary-100 text-primary-600 w-[184px] h-[56px] rounded-full flex items-center justify-center gap-2 text-[17px] font-bold">
          <FiSearch />
          Search Patients
        </button>
      </div>
      <div className="px-[29px]">
        {patients.map((pt: any) => (
          <PatientCard key={pt.id} img={pt.img} name={pt.name} id={pt.id} />
        ))}
      </div>
    </div>
  );
};

export default Patients;
