import './styles.css'

function obtenerDescripcion(codigo,data){
    let desc=document.getElementById("descripcionmaterial" );
    let un=document.getElementById("unidadmaterial");
            data.data.forEach((material)=>{
                if (material.id===parseInt(codigo)){
                    desc.value=material.descripcion; 
                    un.value=material.unidad;            
                }                   
            })     
} 

function FormMaterial(data) {     
    let path=document.location.pathname
  return (          

        <form action="" className='flex flex-col'>
        <label >Codigo:</label>
        <datalist id="list_material" name="list_material"  >
               {
                data.data?.map(data=>(
                    <option key={data.id} value={data.id} label={data.descripcion} ></option> 
                ))
               }                          
            </datalist> 
            <input type="text" name="material" id="idmaterial" list="list_material"
             onInput={(e)=>obtenerDescripcion(e.target.value,data)}
             placeholder='codigo'
             defaultValue={path==='/update-material'? data.data[0].id :''} required/>
            <label >Descripcion:</label>
            <input type="text" name="descripcionmaterial" id="descripcionmaterial" 
            defaultValue={path==='/update-material'? data.data[0].descripcion : ''} disabled required/>
            <label >Unidad:</label>
            <input type="text" name="unidadmaterial" id="unidadmaterial" 
            defaultValue={path==='/update-material'? data.data[0].unidad : ''}disabled  required/>
            <label >Cantidad:</label>
            <input type="number" name="cantidadmaterial" id="cantidadmaterial"
            defaultValue={path==='/update-material'? data.data[0].cantidad : ''}  required/>
            <label >Observacion:</label>
            <textarea name="observacionmaterial" id="observacionmaterial" 
            defaultValue={path==='/update-material'? data.data[0].observacion : ''} required/>
        </form>
  )
}
export default FormMaterial