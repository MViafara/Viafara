<!doctype html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>OpenShift</title>
 <!--Firestore-->
 <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
 <script src="https://www.gstatic.com/firebasejs/4.9.1/firebase-firestore.js"></script>
  </head>
  <body>
   
     <div class="container">

        <h1>Agregar Ciudad!</h1>
        <input type="text" id="ciudad" placeholder="Ciudad" class="form-control my-3">
        <input type="text" id="pais" placeholder="Pais" class="form-control my-3">
        <input type="text" id="barrio" placeholder="Barrio" class="form-control my-3">
        <button class="btn btn-success" id="boton" onclick="guardar()">Guardar</button>

<!--TABLA -->
<table class="table my-3" >
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Pais</th>
                <th scope="col">Barrio</th>
                <th scope="col">Eliminar</th>
                <th scope="col">Actualizar</th>
            </tr>
        </thead>
        <tbody id="tabla">


        </tbody>
    </table>
    
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="app.js"></script> 
</body>
</html>