
import { Button } from '@material-tailwind/react'
import './App.css'
import Layout from './assets/Layout/Layout'

function App() {

  return (
    <>
     <h1 className="pb-4">
      Hello world!
    </h1>
    <div className='w-100 d-block my-3'>

    <Button>Button</Button>
    </div>
      <button className='w-80 bg-red-500 text-white' >click</button>
      <Layout/>
    </>
  )
}

export default App
