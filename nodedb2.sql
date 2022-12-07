-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.6.7-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para nodedb2
CREATE DATABASE IF NOT EXISTS `nodedb2` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
USE `nodedb2`;

-- Volcando estructura para tabla nodedb2.ejes
CREATE TABLE IF NOT EXISTS `ejes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla nodedb2.ejes: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `ejes` DISABLE KEYS */;
INSERT INTO `ejes` (`id`, `nombre`) VALUES
	(1, 'Gobernanza y Sinergias'),
	(2, 'Gestión del Cambio y Capital Humano Avanzado'),
	(3, 'I+D Aplicado y Vínculo con Sector Productivo'),
	(4, 'Comercialización de Tecnología y Emprendimiento de Base Tecnológica'),
	(5, 'Alianzas Internacionales'),
	(6, 'Armonización Curricular y postgrados tecnológicos');
/*!40000 ALTER TABLE `ejes` ENABLE KEYS */;

-- Volcando estructura para tabla nodedb2.historialpeticiones
CREATE TABLE IF NOT EXISTS `historialpeticiones` (
  `id` varchar(50) NOT NULL DEFAULT 'hola',
  `id_imm` varchar(50) DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL,
  `solicitud` varchar(50) DEFAULT NULL,
  `estado` varchar(100) DEFAULT NULL,
  `fecha` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla nodedb2.historialpeticiones: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `historialpeticiones` DISABLE KEYS */;
INSERT INTO `historialpeticiones` (`id`, `id_imm`, `tipo`, `solicitud`, `estado`, `fecha`) VALUES
	('b1c8ax8nh6t', 'M2', 1, 'Añadir', 'Aprobado', '2022-12-07 11:54:22'),
	('t9f1gumiy5', 'M1', 1, 'Eliminar', 'Aprobado', '2022-12-07 11:54:34'),
	('u8ixe7bnlt', 'M1', 1, 'Añadir', 'Aprobado', '2022-12-07 11:54:22');
/*!40000 ALTER TABLE `historialpeticiones` ENABLE KEYS */;

-- Volcando estructura para tabla nodedb2.indicadores
CREATE TABLE IF NOT EXISTS `indicadores` (
  `id` varchar(50) DEFAULT NULL,
  `CalificacionCORFO` varchar(100) DEFAULT NULL,
  `NumeroIndicador` int(11) NOT NULL AUTO_INCREMENT,
  `MisionUniversitaria` varchar(100) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `TipoIndicador` varchar(100) DEFAULT NULL,
  `eje` int(11) DEFAULT NULL,
  `Unidad` varchar(100) DEFAULT NULL,
  `FuenteInformacion` varchar(100) DEFAULT NULL,
  `Responsable` varchar(100) DEFAULT NULL,
  `Frecuencia` varchar(100) DEFAULT NULL,
  `Aprobado` int(50) DEFAULT NULL,
  `Peticion` varchar(50) DEFAULT NULL,
  `id_editado` varchar(50) DEFAULT NULL,
  `Descripcion` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`NumeroIndicador`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla nodedb2.indicadores: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `indicadores` DISABLE KEYS */;
INSERT INTO `indicadores` (`id`, `CalificacionCORFO`, `NumeroIndicador`, `MisionUniversitaria`, `nombre`, `TipoIndicador`, `eje`, `Unidad`, `FuenteInformacion`, `Responsable`, `Frecuencia`, `Aprobado`, `Peticion`, `id_editado`, `Descripcion`) VALUES
	('M1', 'Mínimo', 1, 'Primera', 'qwe', 'Entrada resultado', 1, 'qwe', 'qwe', 'qwe', 'Mensual', 2, 'Eliminar', NULL, 'qwe'),
	('M2', 'Mínimo', 2, 'Primera', 'qwe', 'Entrada resultado', 1, 'qwe', 'qwe', 'qwe', 'Mensual', 1, 'Añadir', NULL, 'qwe');
/*!40000 ALTER TABLE `indicadores` ENABLE KEYS */;

-- Volcando estructura para tabla nodedb2.metas
CREATE TABLE IF NOT EXISTS `metas` (
  `id` varchar(50) NOT NULL DEFAULT 'hola',
  `idindicador` varchar(150) NOT NULL DEFAULT '0',
  `fecha` varchar(150) NOT NULL DEFAULT '0',
  `cantidad` int(11) DEFAULT NULL,
  `Peticion` varchar(150) NOT NULL DEFAULT '0',
  `Aprobado` int(11) DEFAULT NULL,
  `antiguaid` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla nodedb2.metas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `metas` DISABLE KEYS */;
/*!40000 ALTER TABLE `metas` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
