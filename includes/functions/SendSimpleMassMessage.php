<?php

function SendSimpleMassMessage($Owners, $Sender, $Time, $Type, $From, $Subject, $Message)
{
	if(empty($Time))
	{
		$Time = 'UNIX_TIMESTAMP()';
	}

	$QryInsertMessage = "INSERT INTO {{table}} (`id`, `id_owner`, `id_sender`, `time`, `type`, `from`, `subject`, `text`, `read`, `deleted`) VALUES ";
	$QueryArray = false;
	foreach($Owners as $ID)
	{
		$QueryArray[] = "(NULL, {$ID}, {$Sender}, {$Time}, {$Type}, '{$From}', '".mysql_real_escape_string($Subject)."', '".mysql_real_escape_string($Message)."', false, false)";
	}
	$QryInsertMessage .= implode(', ', $QueryArray).';';

	doquery($QryInsertMessage, 'messages');
}

?>