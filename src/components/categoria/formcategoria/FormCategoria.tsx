import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import type Categoria from '../../../model/Categoria'
import { atualizar, buscar, cadastrar } from '../../../services/service'

function FormCategoria() {
  const navigate = useNavigate()

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {
      alert('Erro ao buscar categoria')
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovaCategoria(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (id !== undefined) {
        await atualizar(`/categorias`, categoria, setCategoria)
        alert('Categoria atualizada com sucesso!')
        retornar()
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria)
        alert('Categoria cadastrada com sucesso!')
        retornar()
      }
      

    } catch (error: any) {
      alert('Erro ao salvar categoria')
      retornar()
    }
    
    setIsLoading(false)
    
  }

  function retornar() {
    navigate('/categorias')
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-3xl text-center my-8 font-semibold text-[#8FC105]">
        {id !== undefined ? 'Editar Categoria' : 'Cadastrar Categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-bold">
            Nome
          </label>

          <input
            type="text"
            placeholder="Digite o nome da categoria"
            name="nome"
            className="border-2 border-slate-700 rounded-lg p-2"
            value={categoria.nome || ''}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="descricao" className="font-bold">
            Descrição da categoria
          </label>
          <input
            type="text"
            placeholder="Descreva a categoria"
            name="descricao"
            className="border-2 border-slate-700 rounded-lg p-2"
            value={categoria.descricao || ''}
            onChange={atualizarEstado}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-[#00899C]
                     hover:bg-[#00222B] w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
          onClick={retornar}
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
          )}
        </button>
      </form>
    </div>
  )
}

export default FormCategoria
