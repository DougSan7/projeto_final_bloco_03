import type Categoria from "../../../model/Categoria";
import { buscar } from "../../../services/service";
import CardCategoria from "../cardcategoria/CardCategoria";
import { useEffect, useState } from "react";


function ListaCategoria() {

  const [categorias, setCategorias] = useState<Categoria[]>([])
  
  async function buscarCategoria() {
    try {
        await buscar('/categorias', setCategorias)
    } catch (error: any) {} 
  }
  useEffect(() => {
    buscarCategoria()
    }, [])

  
  return (
  <div className="flex justify-center w-full my-4">
    <div className="container flex flex-col">
        {(categorias.length === 0) && (
          <span className="text-3xl text-center my-8 font-semibold"></span>
        )}

      <div className="grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 gap-8">
        {
            categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria}/>
            ))
        }
      </div>
    </div>
  </div>
  )
}
export default ListaCategoria;