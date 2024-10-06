
function Navbar() {
  return (
    <div className='bg-slate-800 '>
        <div>
            <div className="flex justify-center">
            <div className="text-white mb-5 items-center">Weather Dino</div>
            </div>
            <div className="flex justify-center">
            <div>
                <input className='bg-white mb-5 rounded-lg'></input>
                <button className="bg-blue-600 rounded-lg ml-1">get</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar