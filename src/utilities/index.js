const encabezadosTabla=document.querySelector('thead');
const tablaMateriales=document.querySelector('.tablas');
const seccionMateriales=document.querySelector('.seccion_materiales');


function llenarListaMateriales(lista,arrayMateriales){
    console.log('arrayMateriales:',arrayMateriales);
    arrayMateriales.forEach(material=>{
        let opcion=document.createElement('option');
        lista.appendChild(opcion);
        opcion.value=material.id;
        opcion.label=material.descripcion;
    });
  }

 export function agregarMaterialEntrada(arrayMateriales){   
    // encabezadosTabla.classList.remove('ocultar');
    // num++; 
    // let filaMaterial=document.createElement('tr');   
    // let celdaCodigo=document.createElement('td');
    // let celdaDescripcion=document.createElement('td');
    // let celdaUnidad=document.createElement('td');
    // let celdaCantidad=document.createElement('td');
    // let celdaBtnQuitar=document.createElement('td');  
    
    let listaCodigo=document.createElement('datalist');   

   
    let codigo=document.createElement('input');
    
    // let descripcion=document.createElement('input');
    // let unidad=document.createElement('input');
    // let cantidad=document.createElement('input');
    // let btnQuitar=document.createElement('img');

    listaCodigo.setAttribute('id','material')    
    codigo.setAttribute('list','material');   
    // codigo.setAttribute('id','codigo'+num) 
    // codigo.setAttribute('name','codigo'+num); 

    // descripcion.setAttribute('size',50);
    // descripcion.setAttribute('id','descripcion'+num);
    // descripcion.setAttribute('disabled',true);
    // unidad.setAttribute('size',5);
    // unidad.setAttribute('id','unidad'+num);
    // unidad.setAttribute('disabled',true);
    // cantidad.setAttribute('size',5);
    // cantidad.setAttribute('name','cantidad'+num);
    // cantidad.setAttribute('id','cantidad'+num);

    
    // btnQuitar.setAttribute('src','public/assets/eliminar.svg');   
    // btnQuitar.setAttribute('id','boton_quitar'+num);    
    // btnQuitar.style.cursor='pointer';
    
    // btnQuitar.addEventListener('click',(e)=>{
    //     let i=quitarMaterial(e.currentTarget.id);
    //     console.log(e.currentTarget.id);
    //     console.log(i);
    //     tablaMateriales.removeChild(arrayFilas[i]);
    //     arrayFilas.splice(i,1);});
    
    // celdaCodigo.appendChild(listaCodigo);
    // celdaCodigo.appendChild(codigo);    
    // celdaDescripcion.appendChild(descripcion);
    // celdaUnidad.appendChild(unidad);
    // celdaCantidad.appendChild(cantidad);
    // celdaBtnQuitar.appendChild(btnQuitar);
    // filaMaterial.appendChild(celdaCodigo);    
    // filaMaterial.appendChild(celdaDescripcion);  
    // filaMaterial.appendChild(celdaUnidad);  
    // filaMaterial.appendChild(celdaCantidad);  
    // filaMaterial.appendChild(celdaBtnQuitar); 
    // tablaMateriales.appendChild(filaMaterial);
    // //Cada fila generada se agrega en arrayFilas    
    // arrayFilas.push(filaMaterial);
    // Se carga el datalist con todos los materiales
    llenarListaMateriales(listaCodigo,arrayMateriales);
    //Una vez se cargan los codigos en el datalist se llama la funcion para automáticamente se actualizen los 
    // input correspondientes a ese material. 
    // leerListas();
}