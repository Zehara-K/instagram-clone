import React from 'react'
import Sidebar from './Sidebar'
import Suggestions from './Suggestions'
import Feed from './feed'


function App() {
  return (
    <div className='d-flex vh-100'>
      <div className="w-20"> <Sidebar/></div>
      <div className="w-50"><Feed/></div>
      <div className="w-30"><Suggestions/></div>
    </div>
    
  )
}
// w-25 w-50 w-75 w-100 
export default App
//rfce
// json-server --watch db.json --port 3000
// json-server --watch db.json --port 3000

