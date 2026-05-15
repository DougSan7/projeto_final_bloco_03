import blue1 from '../../assets/blue1.png'

function Home() {
  return (
    <>
      <div className="bg-[#00AFC4] flex justify-center py-10">
        <div className="container grid grid-cols-2 text-[#00222B]">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-7xl font-bold">Seja bem vindo!</h2>

            <p className="text-4xl font-semibold">O lugar que busca para melhorar sua saúde!</p>

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
