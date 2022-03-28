
CREATE DATABASE IF NOT EXISTS `examenrombo` ;
USE `examenrombo`;

CREATE TABLE IF NOT EXISTS `prospecto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) DEFAULT NULL,
  `apeidoP` varchar(250) DEFAULT NULL,
  `apeidoM` varchar(250) DEFAULT NULL,
  `calle` varchar(250) DEFAULT NULL,
  `numero` varchar(250) DEFAULT NULL,
  `colonia` varchar(250) DEFAULT NULL,
  `codigoPostal` varchar(250) DEFAULT NULL,
  `telefono` varchar(250) DEFAULT NULL,
  `rfc` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

INSERT INTO `prospecto` (`id`, `nombre`, `apeidoP`, `apeidoM`, `calle`, `numero`, `colonia`, `codigoPostal`, `telefono`, `rfc`) VALUES
	(1, 'Adan Abraham2', 'Gonzalez', 'Arriola', 'biznaga', '29', 'palo verde', '83280', '6625114451', 'GOAA950325NLQ');
