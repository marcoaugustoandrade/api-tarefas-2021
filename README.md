# api-tarefas-2021

## Verificar os containers que estão rodando
docker ps

## Subir os containers que estão no docker-compose.yaml
docker-compose up -d

## Parar os containers (docker-compose.yaml)
docker-compose down

## Acessar o MongoDB (docker)
docker exec -it mongodb-api-tarefas mongo

## Como matar um processo rodando em uma determinada porta 
kill -9 $(lsof -t -i:3007)
