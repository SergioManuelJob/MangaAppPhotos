CREATE DATABASE  IF NOT EXISTS `db_manga_photos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_manga_photos`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: db_manga_photos
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mangas`
--

DROP TABLE IF EXISTS `mangas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mangas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `pages` int DEFAULT NULL,
  `volume` int DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mangas`
--

LOCK TABLES `mangas` WRITE;
/*!40000 ALTER TABLE `mangas` DISABLE KEYS */;
INSERT INTO `mangas` VALUES (5,'Ijiranaide, Nagatoro-san',93,1,'RomCom','image-1665332113845.jpg','2022-10-09 16:15:13','2022-10-09 16:15:13'),(7,'Akame ga kill',104,3,'Acción','image-1665332323117.jpg','2022-10-09 16:18:43','2022-10-09 16:18:43'),(8,'20th Century Boy',140,5,'Misterio','image-1665332381080.jpg','2022-10-09 16:19:41','2022-10-09 16:19:41'),(9,'One Piece',104,2,'Aventuras','image-1665332860133.jpg','2022-10-09 16:21:37','2022-10-09 16:27:40'),(10,'Black Clover',94,1,'Acción','image-1665332597410.jpg','2022-10-09 16:23:17','2022-10-09 16:23:17'),(11,'Jigokuraku',110,2,'Acción','image-1665332743324.jpg','2022-10-09 16:25:43','2022-10-09 16:25:43'),(12,'Monster',114,6,'Misterio','image-1665333004661.jpg','2022-10-09 16:30:04','2022-10-09 16:30:04'),(13,'Blame',89,1,'Acción','image-1665333065520.jpg','2022-10-09 16:31:05','2022-10-09 16:31:05'),(14,'Komi-san',135,4,'RomCom','image-1665333146837.jpg','2022-10-09 16:32:26','2022-10-09 16:32:26'),(15,'Berserk',145,13,'Fantasía oscura','image-1665333349205.jpg','2022-10-09 16:35:49','2022-10-09 16:35:49'),(16,'HunterXHunter',103,1,'Aventuras','image-1665333469061.jpg','2022-10-09 16:37:49','2022-10-09 16:37:49');
/*!40000 ALTER TABLE `mangas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-09 17:38:48
