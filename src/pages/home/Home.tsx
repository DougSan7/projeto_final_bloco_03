import blue1 from '../../assets/blue1.png'

function Home() {
  return (
    <>
      <div className="bg-[#00AFC4] flex justify-center py-20">
        <div className="container grid grid-cols-2 text-[#00222B]">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-7xl font-bold">Seja bem vindo!</h2>

            <p className="text-4xl font-semibold">O lugar que busca para melhorar sua saúde!</p>

            <div className="flex justify-around gap-4">
              <div className="rounded-3xl border-white border-solid border-2 py-2 px-4 my-4 font-semibold text-[#8FDCE3]">
                Busque um produto!
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={blue1}
              alt="Imagem pagina header"
              className="w-2/3 rounded-4xl shadow-xl "
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
