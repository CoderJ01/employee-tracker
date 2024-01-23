FROM maven:3.8.8-eclipse-temurin-21-alpine AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:21-ea-14-jdk-slim
COPY --from=build /target/server-0.0.1-SNAPSHOT.jar server.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "server.jar"]