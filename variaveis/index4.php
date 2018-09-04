<?php

$nome = "Mauricio";

function teste() {

	global $nome;
	echo $nome;

}

$nome2 = " Freitas";

function teste2() {

global $nome2;
echo $nome2." agora no teste2";

}

teste();

teste2();

?>