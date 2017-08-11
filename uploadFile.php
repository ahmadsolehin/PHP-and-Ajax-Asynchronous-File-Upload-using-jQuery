<?php
// iTech Empires - PHP Script
if ( 0 < $_FILES['file']['error'] ) {
    echo 'Error: ' . $_FILES['file']['error'] . '<br>';
}
else
{
    move_uploaded_file($_FILES['file']['tmp_name'], 'files/' . $_FILES['file']['name']);
    echo "File uploaded successfully!!";
}
?>