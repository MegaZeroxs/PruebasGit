<?php
Header('Access-Control-Allow-Origin: *');
if ($_GET) {
    $comando = $_GET['comando'];
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "wallet_test";
    // Crear conexión
    $conn = new mysqli(
        $servername,
        $username,
        $password,
        $dbname
    );
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    if ($comando == 'agregar') {
        $nombres = $_GET["nombres"];
        $apellidos = $_GET["apellidos"];
        $tipo_cliente = $_GET["tipo_cliente"];
        $direccion_postal = $_GET["direccion_postal"];
        $direccion_trabajo = $_GET["direccion_trabajo"];
        $telefono = $_GET["telefono"];
        $correo = $_GET["correo"];
        $nivel_economico = $_GET["nivel_economico"];
        $posibilidades = $_GET["posibilidades"];
        $intereses = $_GET["intereses"];
        $sql = "INSERT INTO `clientes` (`nombres`, `apellidos`, `tipo_cliente`, `direccion_postal`, `direccion_trabajo`, `telefono`, `correo`, `nivel_economico`, `posibilidades`, `intereses`) 
        VALUES ('$nombres', '$apellidos', '$tipo_cliente', '$direccion_postal', '$direccion_trabajo', '$telefono', '$correo', '$nivel_economico', '$posibilidades', '$intereses')";
        if ($conn->query($sql) === TRUE) {
            echo '{"mensaje":"Nuevo registro añadido"}';
        } else {
            echo '{"error: "' . $sql . ' ' . $conn->error . '"}';
        }
    }
    if ($comando == 'editar') {
        $nombres = $_GET["nombres"];
        $apellidos = $_GET["apellidos"];
        $tipo_cliente = $_GET["tipo_cliente"];
        $direccion_postal = $_GET["direccion_postal"];
        $direccion_trabajo = $_GET["direccion_trabajo"];
        $telefono = $_GET["telefono"];
        $correo = $_GET["correo"];
        $nivel_economico = $_GET["nivel_economico"];
        $posibilidades = $_GET["posibilidades"];
        $intereses = $_GET["intereses"];
        $id_cliente = $_GET["id_cliente"];
        $sql = "UPDATE `clientes` SET `nombres` = '$nombres', `apellidos` = '$apellidos', `tipo_cliente` = '$tipo_cliente', `direccion_postal` = '$direccion_postal', `direccion_trabajo` = '$direccion_trabajo', `telefono` = '$telefono', `correo` = '$correo', `nivel_economico` = '$nivel_economico', `posibilidades` = '$posibilidades', `intereses` = '$intereses' WHERE `clientes`.`id_cliente` = $id_cliente";
        if ($conn->query($sql) === TRUE) {
            echo '{"mensaje":"Registro actualizado"}';
        } else {
            echo '{"error: "' . $sql . ' ' . $conn->error . '"}';
        }
    }
    if ($comando == 'eliminar') {
        $id_cliente = $_GET["id_cliente"];
        // sql to delete a record
        $sql = "DELETE FROM clientes WHERE id_cliente=$id_cliente";
        if ($conn->query($sql) === TRUE) {
            echo '{"mensaje":"Registro eliminado"}';
        } else {
            echo '{"error: "' . $sql . ' ' . $conn->error . '"}';
        }
    }
    if ($comando == 'listar') {
        $sql = "SELECT * FROM clientes";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            // obtener cada uno de los registros y almacenarlos en un vector y luego regresarlos en formato json
            $registros = array();
            $i = 0;
            while ($row = $result->fetch_assoc()) {
                //echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " .
                $row["nombres"] . "<br>";
                $registros[$i] = $row;
                $i++;
            }
            echo '{"records":' . json_encode($registros) . '}';
        } else {
            echo '{"records":[]}';
        }
    }
    $conn->close();
}
