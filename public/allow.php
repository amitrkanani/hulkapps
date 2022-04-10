<?php
if( ini_get('allow_url_fopen') ) {
die('Good Luck !! v allow_url_fopen is enabled. file_get_contents should work well');
} else {
die('Sorry Your allow_url_fopen is disabled. file_get_contents would not work');
}

?>
