function Navbar(){
  return(
    <>
      <div className=" w-full flex justify-center py-4 bg-[#8FC105] text-white font-semibold">

        <div className="container flex justify-between text-[18px] mx-8 ">
          <div className="pt-2 text-4xl" >Farmacia</div>

          <div className="flex gap-4 ">
            <div className=" rounded-4xl text-white border-[#00899C] border-solid border-2 py-2 px-4 align-middle">
            Tela inicial
            </div>
            <div className=" rounded-4xl text-white border-[#00899C] border-solid border-2 py-2 px-4 align-middle">
            Produtos
            </div>

            <div className=" rounded-4xl text-white border-[#00899C] border-solid border-2 py-2 px-4 align-middle">
            Categorias
            </div>            
          </div>
        </div>  
      </div>    
    </>
  )
}

export default Navbar;
