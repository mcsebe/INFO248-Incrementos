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


-- Volcando estructura de base de datos para nodedb
CREATE DATABASE IF NOT EXISTS `nodedb` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
USE `nodedb`;

-- Volcando estructura para tabla nodedb.disciplina
CREATE TABLE IF NOT EXISTS `disciplina` (
  `id` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla nodedb.disciplina: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `disciplina` DISABLE KEYS */;
/*!40000 ALTER TABLE `disciplina` ENABLE KEYS */;

-- Volcando estructura para tabla nodedb.ejes
CREATE TABLE IF NOT EXISTS `ejes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla nodedb.ejes: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `ejes` DISABLE KEYS */;
INSERT INTO `ejes` (`id`, `nombre`) VALUES
	(1, 'Gobernanza y Sinergias'),
	(2, 'Gestión del Cambio y Capital Humano Avanzado'),
	(3, 'I+D Aplicado y Vínculo con Sector Productivo'),
	(4, 'Comercialización de Tecnología y Emprendimiento de Base Tecnológica'),
	(5, 'Alianzas Internacionales'),
	(6, 'Armonización Curricular y postgrados tecnológicos');
/*!40000 ALTER TABLE `ejes` ENABLE KEYS */;

-- Volcando estructura para tabla nodedb.excel
CREATE TABLE IF NOT EXISTS `excel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `archivo` mediumblob DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla nodedb.excel: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `excel` DISABLE KEYS */;
/*!40000 ALTER TABLE `excel` ENABLE KEYS */;

-- Volcando estructura para tabla nodedb.excel_metrica
CREATE TABLE IF NOT EXISTS `excel_metrica` (
  `id_metrica` int(11) NOT NULL,
  `id_excel` int(11) NOT NULL,
  `valor` int(50) DEFAULT NULL,
  PRIMARY KEY (`id_metrica`,`id_excel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla nodedb.excel_metrica: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `excel_metrica` DISABLE KEYS */;
/*!40000 ALTER TABLE `excel_metrica` ENABLE KEYS */;

-- Volcando estructura para tabla nodedb.historialpeticiones
CREATE TABLE IF NOT EXISTS `historialpeticiones` (
  `id` varchar(50) NOT NULL DEFAULT 'hola',
  `id_imm` varchar(50) DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL,
  `solicitud` varchar(50) DEFAULT NULL,
  `estado` varchar(100) DEFAULT NULL,
  `fecha` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla nodedb.historialpeticiones: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `historialpeticiones` DISABLE KEYS */;
/*!40000 ALTER TABLE `historialpeticiones` ENABLE KEYS */;

-- Volcando estructura para tabla nodedb.indicadores
CREATE TABLE IF NOT EXISTS `indicadores` (
  `id` varchar(50) NOT NULL DEFAULT 'AUTO_INCREMENT',
  `CalificacionCORFO` varchar(100) DEFAULT NULL,
  `NumeroIndicador` varchar(50) DEFAULT NULL,
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
  `antiguaid` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla nodedb.indicadores: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `indicadores` DISABLE KEYS */;
/*!40000 ALTER TABLE `indicadores` ENABLE KEYS */;

-- Volcando estructura para tabla nodedb.metas
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

-- Volcando datos para la tabla nodedb.metas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `metas` DISABLE KEYS */;
/*!40000 ALTER TABLE `metas` ENABLE KEYS */;

-- Volcando estructura para tabla nodedb.publicacion
CREATE TABLE IF NOT EXISTS `publicacion` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL DEFAULT '0',
  `id_diciplina` int(100) NOT NULL DEFAULT 0,
  `clasificacion` varchar(10) NOT NULL DEFAULT '0',
  `citaciones` int(10) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla nodedb.publicacion: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `publicacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `publicacion` ENABLE KEYS */;

-- Volcando estructura para tabla nodedb.rol
CREATE TABLE IF NOT EXISTS `rol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla nodedb.rol: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` (`id`, `name`) VALUES
	(1, 'Gerente'),
	(2, 'Administrador'),
	(3, 'Analista');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;

-- Volcando estructura para tabla nodedb.rol_usuario
CREATE TABLE IF NOT EXISTS `rol_usuario` (
  `id_rut` varchar(50) NOT NULL DEFAULT '',
  `id_rol` int(11) NOT NULL,
  PRIMARY KEY (`id_rut`,`id_rol`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla nodedb.rol_usuario: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `rol_usuario` DISABLE KEYS */;
INSERT INTO `rol_usuario` (`id_rut`, `id_rol`) VALUES
	('17270745-9', 1);
/*!40000 ALTER TABLE `rol_usuario` ENABLE KEYS */;

-- Volcando estructura para tabla nodedb.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `rut` varchar(30) NOT NULL DEFAULT '0',
  `nombre` varchar(255) NOT NULL DEFAULT '0',
  `apellido` varchar(255) NOT NULL DEFAULT '0',
  `correo` varchar(255) NOT NULL DEFAULT '0',
  `contraseña` varchar(30) NOT NULL DEFAULT '0',
  PRIMARY KEY (`rut`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla nodedb.usuario: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`rut`, `nombre`, `apellido`, `correo`, `contraseña`) VALUES
	('17270745-9', 'Joaquin', 'Contreras', 'joaquin.contreras@uach.cl', 'J2022');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
