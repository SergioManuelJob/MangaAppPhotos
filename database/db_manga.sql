-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: db_manga
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
  `title` varchar(200) NOT NULL,
  `pages` int NOT NULL,
  `volume` int NOT NULL,
  `genre` varchar(90) NOT NULL,
  `imagen` varchar(260) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mangas`
--

LOCK TABLES `mangas` WRITE;
/*!40000 ALTER TABLE `mangas` DISABLE KEYS */;
INSERT INTO `mangas` VALUES (1,'Ijiranaide, Nagatoro-san,Ijiranaide, Nagatoro-san',94,1,'RomCom,RomCom','https://images-na.ssl-images-amazon.com/images/I/81vpI3GVHbL.jpg'),(2,'Akame ga kill!',90,1,'Acción','https://kbimages1-a.akamaihd.net/99ab3395-b042-4969-82a7-cb51a558d568/1200/1200/False/akame-ga-kill-vol-1-2.jpg'),(3,'20th Century Boys',110,2,'Misterio','https://images-na.ssl-images-amazon.com/images/I/91J08a8L4BL.jpg'),(5,'Black Clover',97,3,'Aventuras','https://www.normaeditorial.com/upload/media/albumes/0001/06/4f25e153675fea771587dd5cbae2ef8e3a167cce.jpeg'),(6,'Solo Leveling',103,1,'Acción','https://www.normaeditorial.com/upload/media/albumes/0001/18/5105c140436e7f20a05fcf1337b66f97097bd97f.jpeg'),(7,'One Piece',104,1,'Aventuras','https://images-na.ssl-images-amazon.com/images/I/91XwYkbfN-L.jpg'),(8,'Jagaaan',90,1,'Acción','https://www.normaeditorial.com/upload/media/albumes/0001/07/238eebc5b56b171946cfd501ff088a9085b85e18.jpeg'),(14,'Soul Eater',103,5,'Acción','https://images-na.ssl-images-amazon.com/images/I/71AUiSvLpRL.jpg');
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

-- Dump completed on 2022-09-30 20:36:35
