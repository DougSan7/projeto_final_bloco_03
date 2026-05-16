function Footer(){
  
  const data = new Date().getFullYear()
  return (
    <>
      <div className="flex justify-center bg-[#8FC105] text-white max-">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">Farmacia | Copyright: {data}</p>

        </div>
      </div>
    </>
  )
}

export default Footer;