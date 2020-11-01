-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 01-11-2020 a las 11:57:03
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `peliculas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actors`
--

CREATE TABLE `actors` (
  `id` int(11) NOT NULL,
  `names` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `photoURL` text NOT NULL,
  `status` varchar(8) NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `actors`
--

INSERT INTO `actors` (`id`, `names`, `age`, `photoURL`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Henry Cavill', 37, 'https://firebasestorage.googleapis.com/v0/b/peliculas-294019.appspot.com/o/pictures%2Fhenry_cavill.jpg?alt=media&token=0567d52a-a958-404f-9b0a-34dd606eae52', 'ACTIVE', '2020-10-29 02:59:33.129320', '2020-11-01 10:25:37.000000'),
(2, 'Amy Adams', 46, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Amy_Adams_UK_Nocturnal_Animals_Premiere_%28cropped%29.jpg/800px-Amy_Adams_UK_Nocturnal_Animals_Premiere_%28cropped%29.jpg', 'ACTIVE', '2020-10-29 07:44:56.385453', '2020-10-29 07:44:56.385453'),
(3, 'Tom Holland', 24, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg', 'ACTIVE', '2020-10-29 17:46:39.304293', '2020-10-29 17:46:39.304293'),
(4, 'Zendaya Maree Stoermer Coleman', 24, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/1200px-Zendaya_-_2019_by_Glenn_Francis.jpg', 'ACTIVE', '2020-10-29 17:47:44.773247', '2020-10-29 17:47:44.773247'),
(6, 'Robert Downey Jr.', 55, 'https://firebasestorage.googleapis.com/v0/b/peliculas-294019.appspot.com/o/pictures%2FRobert%20Downey%20Jr.jpg?alt=media&token=3ad94e2f-0da5-47af-ad30-66c61f35d881', 'ACTIVE', '2020-11-01 04:08:12.971185', '2020-11-01 04:08:12.971185'),
(7, 'Marisa Tomei', 55, 'https://firebasestorage.googleapis.com/v0/b/peliculas-294019.appspot.com/o/pictures%2FMarisa_Tomei.jpg?alt=media&token=23d84342-4913-4b0f-a43b-3b3e6fa596f2', 'ACTIVE', '2020-11-01 04:35:12.492477', '2020-11-01 04:35:12.492477'),
(8, 'Laura Harrier', 30, 'https://firebasestorage.googleapis.com/v0/b/peliculas-294019.appspot.com/o/pictures%2FLaura%20Harrier.jpg?alt=media&token=8bb1832b-64ce-4aa5-8a89-37d76403822e', 'ACTIVE', '2020-11-01 04:42:45.762995', '2020-11-01 10:48:03.000000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `nameGenre` varchar(25) NOT NULL,
  `status` varchar(8) NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `nameGenre`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Comedia', 'ACTIVE', '2020-10-29 01:25:38.962589', '2020-10-29 01:25:38.962589'),
(2, 'Acción', 'ACTIVE', '2020-10-29 17:32:12.198070', '2020-10-29 17:32:12.198070'),
(3, 'Aventura', 'ACTIVE', '2020-10-29 17:32:18.506717', '2020-10-29 17:32:18.506717'),
(4, 'Fantasia', 'ACTIVE', '2020-10-29 17:32:27.401571', '2020-10-29 17:32:27.401571'),
(5, 'Ciencia Ficción', 'ACTIVE', '2020-10-29 17:44:28.283311', '2020-10-29 17:44:28.283311');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(2, 1603914765069, 'moviesMigration1603914765069'),
(3, 1603917237286, 'actorsMigration1603917237286'),
(4, 1603918922872, 'genreMigration1603918922872'),
(5, 1603928382611, 'fixGenreMigration1603928382611'),
(6, 1603936037866, 'fixDates1603936037866'),
(7, 1603941858262, 'fixSynopsis1603941858262');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `duration` int(11) NOT NULL,
  `synopsis` text NOT NULL,
  `status` varchar(8) NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `genre_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `name`, `duration`, `synopsis`, `status`, `created_at`, `updated_at`, `genre_id`) VALUES
(1, 'El hombre de acero', 143, 'Mientras lucha con las repercusiones de su origen y sus habilidades extraordinarias, el joven Clark Kent debe convertirse en un héroe y salvar a las personas que ama de una grave amenaza.', 'ACTIVE', '2020-10-29 05:42:34.000000', '2020-11-01 10:15:46.000000', 2),
(2, 'Spide-Man: De regreso a casa', 133, 'Peter Parker asume su nueva identidad como Spider-Man y regresa a vivir con su tía después de su aventura con los Vengadores. Al volver, mientras sigue bajo la tutela de Tony Stark, descubre que ha surgido un nuevo y despiadado enemigo que pretende destruir todo lo que ama', 'ACTIVE', '2020-10-29 17:57:40.406323', '2020-11-01 10:48:32.000000', 5),
(3, 'Iron Man', 126, 'Un empresario millonario construye un traje blindado y lo usa para combatir el crimen y el terrorismo.', 'ACTIVE', '2020-11-01 09:22:02.820509', '2020-11-01 09:22:02.820509', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movie_actors`
--

CREATE TABLE `movie_actors` (
  `moviesId` int(11) NOT NULL,
  `actorsId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movie_actors`
--

INSERT INTO `movie_actors` (`moviesId`, `actorsId`) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(2, 6),
(3, 6);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_b3caf4b16b81ef2932fe33d6f5` (`names`),
  ADD UNIQUE KEY `IDX_405de21b4701eced0cf56386a5` (`photoURL`) USING HASH;

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_d7aeb06b61c386eb07e37033a1` (`nameGenre`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_3a794f850bd3e432c46b3faa91` (`name`),
  ADD UNIQUE KEY `IDX_c24885923a89c503b27c3c719e` (`synopsis`) USING HASH,
  ADD KEY `FK_cf3f214b7bdb6bc5e641930ee6b` (`genre_id`);

--
-- Indices de la tabla `movie_actors`
--
ALTER TABLE `movie_actors`
  ADD PRIMARY KEY (`moviesId`,`actorsId`),
  ADD KEY `IDX_9cece9fdb698e5c4f98c613de3` (`moviesId`),
  ADD KEY `IDX_0e5267847734b6af68dbecf46f` (`actorsId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actors`
--
ALTER TABLE `actors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `FK_cf3f214b7bdb6bc5e641930ee6b` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `movie_actors`
--
ALTER TABLE `movie_actors`
  ADD CONSTRAINT `FK_0e5267847734b6af68dbecf46f0` FOREIGN KEY (`actorsId`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_9cece9fdb698e5c4f98c613de36` FOREIGN KEY (`moviesId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
