import { useState } from "react"
import CourseList from "../components/CourseList"
import Doctors from "../components/Teachers"
import { appointmentData} from "../helpers/data"
import Teachers from "../components/Teachers"

const Home = () => {
  const[kursList,setKursList]=useState(appointmentData)
  console.log(kursList);
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger fw-bolder mt-4">Clarus Course</h1>
      <Teachers setKursList={setKursList} kursList={kursList}/>
      <CourseList kursList={kursList} setKursList={setKursList}/>
     
    </main>
  )
}

export default Home