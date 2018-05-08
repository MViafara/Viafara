firebase.initializeApp({
    apiKey: "AIzaSyC_UzkqDorzvk67q__n1waBcIwvVS06jsc",
    authDomain: "proyectousuario-10836.firebaseapp.com",
    projectId: "proyectousuario-10836",

  });
 
  // Agregar Documento

   // Initialize Cloud Firestore through Firebase
   var db = firebase.firestore();

  function guardar() {
    var ciudad = document.getElementById('ciudad').value;
    var pais = document.getElementById('pais').value;
    var barrio = document.getElementById('barrio').value;

    db.collection("users").add({
            first:ciudad,
            last: pais,
            born: barrio
        })
        
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('ciudad').value = '';
            document.getElementById('pais').value = '';
            document.getElementById('barrio').value = '';
            
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });


       

}
 //------------------leerr datos-------------//
 var tabla = document.getElementById('tabla');
 db.collection("users").onSnapshot((querySnapshot) => {
     tabla.innerHTML = '';
     querySnapshot.forEach((doc) => {
         console.log(`${doc.id} => ${doc.data().first}`);
         tabla.innerHTML += `
         <tr>
         <th scope="row">${doc.id}</th>  
         <td>${doc.data().first}</td>  
         <td>${doc.data().last}</td>  
         <td>${doc.data().born}</td>  
        <td><button class="btn btn-danger" id="boton" onclick="eliminar('${doc.id}')">Eliminar</button></td>
         <td><button class="btn btn-info" id="boton" onclick="actualizar('${doc.id}','${doc.data().first}','${doc.data().last}','${doc.data().born}')">Actualizar</button></td>
         </tr>
         `
     });
 });

// Borrar datos
function eliminar(id) {
    db.collection("users").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}

//Editar Documento

function actualizar(id, ciudad, pais, barrio) {
    document.getElementById('ciudad').value = ciudad;
    document.getElementById('pais').value = pais;
    document.getElementById('barrio').value = barrio;

    var boton = document.getElementById('boton');
    boton.innerHTML = 'Actualizar';

    boton.onclick = function () {
        var washingtonRef = db.collection("users").doc(id);

        // Set the "capital" field of the city 'DC'
        var ciudad = document.getElementById('ciudad').value;
        var pais = document.getElementById('pais').value;
        var barrio = document.getElementById('barrio').value;

        return washingtonRef.update({
                first: ciudad,
                last: pais,
                born: barrio
            })
            .then(function () {
                console.log("Document successfully updated!");
                boton.innerHTML = 'Guardar';
                document.getElementById('ciudad').value = '';
                document.getElementById('pais').value = '';
                document.getElementById('barrio').value = '';
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }



}