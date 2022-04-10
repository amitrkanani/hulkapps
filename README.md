# hulkapps

TECH DETAIL OF PROJECT

Laravel v5.6.*
min PHP v7.1.*
Database MySQL

==================================

INSTALLTION GUIDE

Its just plug and play laravel code.

1. upload main folder to ur working directory or public_html
2. Change database config in .env file
3. upload database (database in DB folder)
4. add .htaccess file along with main folder and add below code 

<IfModule mod_rewrite.c>

RewriteEngine on
#RewriteCond %{HTTPS} !=on    
#RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
    
RewriteCond %{REQUEST_URI} !^public
RewriteRule ^(.*)$ main/public/$1 [L]

</IfModule>

NOTE : if u have ssl domain then remove # from 2nd 3rd line 

ADMIN
ID : 9876543210
PWD : 123456

USER
ID : 9876543212
PWD : 123456

==============================================

My mind set is "CAN DO" so that's why this project easy to develop for me. Yeah but i got one idea by your project defination to impliment in my current company project. Thank you for this.

No one know everything in coding so always learn from everyone either senior or juniore. I'm always studen for new learning.

I take 2 hour and 30 min for complete it.

I not include select option in form building but i can add it.


