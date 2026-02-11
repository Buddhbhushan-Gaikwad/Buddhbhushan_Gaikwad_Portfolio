FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

RUN mvn clean package -DskipTests

CMD ["java", "-jar", "target/portfolio-backend-0.0.1-SNAPSHOT.jar"]
