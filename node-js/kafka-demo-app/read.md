to start docker - docker-compose up

run command: docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \ --create \ --zookeeper zookeeper:2181 \ --replication-factor 1\ --partition 1 \ --topic test