import { Link } from "react-router-dom"
function Navbar(){
  return(
    <>
      <div className=" w-full flex justify-center py-4 bg-[#8FC105] text-white font-semibold">

        <div className="container flex justify-between text-[18px] mx-8 ">
          <div className="pt-1 text-4xl" >Farmacia Online</div>

          <div className="flex gap-4 ">
            <div className=" rounded-4xl text-white border-[#00899C] border-solid border-2 py-2 align-middle">
            <Link 
              to="/" 
              className="p-2 rounded-full hover:bg-red-100 hover:text-[#00899C] transition"
              >Pagina Inicial
              </Link>
            </div>


            <div className=" rounded-4xl text-white border-[#00899C] border-solid border-2 py-2  align-middle">
              <Link 
                to="/produtos" 
                className="p-2 rounded-full hover:bg-red-100 hover:text-[#00899C] transition"
                >Produtos
              </Link>
            </div>

            <div className=" rounded-4xl text-white border-[#00899C] border-solid border-2 py-2  align-middle">
                <Link 
                  to="/categorias" 
                  className="p-2 rounded-full hover:bg-red-100 hover:text-[#00899C] transition"
                  >Categorias
                </Link>
            </div>            
          </div>
        </div>  
      </div>    
    </>
  )
}

export default Navbar;
