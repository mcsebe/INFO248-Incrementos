docker-compose -f docker-compose.yml up -d --build mariadb

DATABASE_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' database) 

echo $DATABASE_IP



docker exec -i database mysql -prueeba01 --password=123456789 indicadores  < BaseDeDatos.sql
