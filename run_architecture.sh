docker-compose -f docker-compose.yml up -d --build app
docker-compose -f docker-compose.yml up -d --build server
docker-compose -f docker-compose.yml up -d --build mariadb


DATABASE_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' database) 

DATABASE_IP_app=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' appPrueba)


DATABASE_IP_server=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' serverPrueba)


echo "ip base de datos : "   $DATABASE_IP



echo "ip app : " $DATABASE_IP_app


echo "ip server :" $DATABASE_IP_server
