import Home from "./Section/Home.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {


  return (

      <main className="App w-screen h-screen absolute bg-gray-950">





        <div className={`Layout w-8/12 mx-auto h-full`}>
           <div className={`flex justify-center p-1`}> <Navbar/></div>
            <section id={`HOME `} className={`h-[90vh]`}>
                <Home/>
            </section>
        </div>

      </main>




  )
}

export default App
