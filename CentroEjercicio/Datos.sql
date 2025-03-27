#Karla Trejo Delgadillo y Luis Lagos Camacho - Proyecto
#Base de datos de un centro de ejercicio

#Script para insertar valores en las tablas

USE CentroEjercicio;

INSERT INTO TipoUsuario (Tipo) Values
('Administrador'),
('Coach'),
('Cliente');

SELECT * FROM tipoUsuario;

INSERT INTO Usuarios (Usuario, Contraseña, Tipo) VALUES
('admin1', 'pass123', 1 ),
('coach1', 'pass456', 2 ),
('coach2', 'pass789', 2 ),
('coach3', 'pass896', 2 ),
('coach4', 'pass006', 2 ),
('coach5', 'pass345', 2 ),
('coach6', 'pass234', 2 ),
('coach7', 'pass234', 2 ),
('coach8', 'pass234', 2 ),
('cliente1', 'password1', 3 ),
('cliente2', 'password2', 3),
('cliente3', 'password3', 3),
('cliente4', 'password4', 3),
('cliente5', 'password5', 3),
('cliente6', 'password6', 3),
('cliente7', 'password7', 3),
('cliente8', 'password8', 3),
('cliente9', 'password9', 3),
('cliente10', 'password10', 3),
('cliente11', 'password11', 3),
('cliente12', 'password12', 3),
('cliente13', 'password13', 3),
('cliente14', 'password14', 3),
('cliente15', 'password15', 3),
('cliente16', 'password16', 3),
('cliente17', 'password17', 3),
('cliente18', 'password18', 3),
('cliente19', 'password19', 3),
('cliente20', 'password20', 3);

SELECT * FROM Usuarios;

INSERT INTO Especialidad (NombreEspecialidad, Descripcion) VALUES
('Yoga', 'Entrenamiento de Yoga'),
('Pilates', 'Entrenamiento de Pilates'),
('CrossFit', 'Entrenamiento de alta intensidad');
SELECT * FROM Especialidad;

INSERT INTO Coach (NombreCoach, ApellidoPaterno, ApellidoMaterno, IdEspecialidad, FechaNacimiento, Telefono, FechaContratacion, Email, IdUsuario) VALUES
('Carlos', 'Pérez', 'Ramírez', 1, '1985-03-15', '5551234567', '2021-01-10', 'carlos.perez@example.com', 2),
('Ana', 'López', 'García', 2, '1990-07-20', '5552345678', '2020-05-15', 'ana.lopez@example.com', 3),
('Luis', 'Hernández', 'Martínez', 3, '1988-09-10', '5553456789', '2022-03-01', 'luis.hernandez@example.com', 4),
('María', 'Gómez', 'Sánchez', 1, '1992-11-25', '5554567890', '2019-10-20', 'maria.gomez@example.com', 5),
('Roberto', 'Díaz', 'Jiménez', 2, '1986-01-05', '5555678901', '2018-12-05', 'roberto.diaz@example.com', 6),
('Lucía', 'Torres', 'Vega', 3, '1994-06-18', '5556789012', '2023-02-15', 'lucia.torres@example.com', 7),
('Carlos', 'Gomez', 'Sanchez', 1, '1985-02-15', '1234567890', '2022-01-10', 'carlos.gomez@example.com', 8),
('Ana', 'Lopez', 'Martinez', 2, '1990-07-25', '0987654321', '2023-03-05', 'ana.lopez@example.com', 9);


SELECT * FROM Coach;

INSERT INTO Clientes (NombreCliente, ApellidoPaterno, ApellidoMaterno, FechaNacimiento, Telefono, Email, IdUsuario, FechaRegistro) VALUES
('Juan', 'Pérez', 'López', '1990-01-15', '555-1234', 'juan.perez@example.com', 1, '2024-01-01'),
('María', 'Gómez', 'Ramírez', '1985-03-22', '555-2345', 'maria.gomez@example.com', 2, '2024-01-02'),
('Carlos', 'Hernández', 'Martínez', '1992-05-10', '555-3456', 'carlos.hernandez@example.com', 3, '2024-01-03'),
('Ana', 'Ruiz', 'Sánchez', '1994-07-18', '555-4567', 'ana.ruiz@example.com', 4, '2024-01-04'),
('Luis', 'Díaz', 'Flores', '1988-09-25', '555-5678', 'luis.diaz@example.com', 5, '2024-01-05'),
('Sofía', 'Morales', 'Jiménez', '1991-11-30', '555-6789', 'sofia.morales@example.com', 6, '2024-01-06'),
('Miguel', 'Ortiz', 'Vargas', '1987-02-14', '555-7890', 'miguel.ortiz@example.com', 7, '2024-01-07'),
('Laura', 'López', 'Mendoza', '1993-04-20', '555-8901', 'laura.lopez@example.com', 8, '2024-01-08'),
('Jorge', 'Ramírez', 'Salazar', '1986-06-15', '555-9012', 'jorge.ramirez@example.com', 9, '2024-01-09'),
('Elena', 'Romero', 'Cruz', '1990-08-10', '555-0123', 'elena.romero@example.com', 10, '2024-01-10'),
('Ricardo', 'Santos', 'Luna', '1995-10-05', '555-1234', 'ricardo.santos@example.com', 11, '2024-01-11'),
('Paula', 'Torres', 'Molina', '1989-12-15', '555-2345', 'paula.torres@example.com', 12, '2024-01-12'),
('Gabriel', 'Castillo', 'Paredes', '1992-03-25', '555-3456', 'gabriel.castillo@example.com', 13, '2024-01-13'),
('Valeria', 'Silva', 'Pérez', '1988-05-18', '555-4567', 'valeria.silva@example.com', 14, '2024-01-14'),
('Diego', 'García', 'Fernández', '1994-07-07', '555-5678', 'diego.garcia@example.com', 15, '2024-01-15'),
('Carmen', 'Soto', 'Blanco', '1985-09-27', '555-6789', 'carmen.soto@example.com', 16, '2024-01-16'),
('Alberto', 'Ramos', 'Campos', '1991-01-19', '555-7890', 'alberto.ramos@example.com', 17, '2024-01-17'),
('Luisa', 'Molina', 'Quintero', '1987-03-03', '555-8901', 'luisa.molina@example.com', 18, '2024-01-18'),
('Esteban', 'Vega', 'Estrada', '1993-06-09', '555-9012', 'esteban.vega@example.com', 19, '2024-01-19'),
('Mónica', 'Herrera', 'Guerrero', '1989-08-21', '555-0123', 'monica.herrera@example.com', 20, '2024-01-20');

SELECT * FROM Clientes;

INSERT INTO Administrador (NombreAdmin, ApellidoPaterno, ApellidoMaterno, FechaNacimiento, Telefono, FechaContratacion, Email, IdUsuario) VALUES
('Roberto', 'Diaz', 'Ruiz', '1980-11-10', '3453453456', '2020-05-01', 'roberto.diaz@example.com', 1);
SELECT * FROM Administrador;

INSERT INTO CatalogoClases (NombreClase, Descripcion, Duracion, Costo) VALUES
('Yoga Básico', 'Clase de yoga para principiantes', '01:00:00', 200.00),
('Yoga Intermedio', 'Clase de yoga para principiantes', '01:00:00', 200.00),
('Pilates Básico', 'Clase de pilates nivel intermedio', '01:15:00', 250.00),
('Pilates Intermedio', 'Clase de pilates nivel intermedio', '01:15:00', 250.00),
('CrossFit', 'Entrenamiento intensivo avanzado', '01:30:00', 300.00);
SELECT * FROM CatalogoClases;

INSERT INTO Salones (NombreSalon, Capacidad) VALUES
('Salon A', 20),
('Salon B', 15),
('Salon C', 25);
SELECT * FROM Salones;

INSERT INTO Clases (IdClase, IdCoach, FechaHora, Capacidad, IdSalon) VALUES
-- Clases que ya pasaron
(1, 2, '2024-11-20 08:00:00', 20, 1),
(2, 3, '2024-11-25 10:00:00', 15, 2),
(3, 4, '2024-12-01 18:00:00', 25, 3),
(4, 5, '2024-12-05 07:00:00', 18, 1),

-- Clases por pasar
(5, 6, '2024-12-15 09:00:00', 20, 2),
(1, 7, '2024-12-18 17:00:00', 15, 3),
(2, 2, '2024-12-20 06:30:00', 25, 1),
(3, 3, '2024-12-22 12:00:00', 22, 3),
(4, 4, '2024-12-23 19:00:00', 18, 2),
(5, 5, '2024-12-25 08:00:00', 24, 1);
SELECT * FROM Clases;

INSERT INTO ClaseCliente (IdCliente, IdClaseProgramada, FechaInscripcion) VALUES
(1, 1, '2024-11-10'),
(2, 2, '2024-11-11'),
(3, 3, '2024-11-12'),
(1, 1, CURDATE()),
(2, 1, CURDATE()),
(5, 2, '2024-11-12'),
(4, 3, CURDATE()),
(2,5,'2024-11-06'),

(1, 1, '2024-11-15'),
(2, 2, '2024-11-20'),
(3, 3, '2024-11-28'),
(4, 4, '2024-12-01'),


(5, 5, '2024-12-10'),
(6, 6, '2024-12-12'),
(7, 7, '2024-12-10'),
(8, 8, '2024-12-09'),
(9, 9, '2024-12-08'),
(10, 10, '2024-12-05'),

(11, 5, '2024-12-09'),
(12, 6, '2024-12-07'),
(13, 7, '2024-12-08'),
(14, 8, '2024-12-10'),
(15, 9, '2024-12-10'),
(16, 10, '2024-12-07'),
(17, 5, '2024-12-11'),
(18, 6, '2024-12-10'),
(19, 7, '2024-12-10'),
(20, 8, '2024-12-10');


SELECT * FROM ClaseCliente WHERE IdCliente =2;


INSERT INTO CatalogoPlanes (NombrePlan, Descripcion, Costo) VALUES 
    ('Básico', 'Acceso a todas las clases durante 1 mes', 500.00),
    ('Premium', 'Acceso ilimitado y uso de equipos especiales durante 1 mes', 1000.00),
    ('Anual', 'Acceso a todas las clases durante 1 año', 5000.00);

SELECT * FROM CatalogoPlanes;

INSERT INTO FormaPago (NombreFormaPago, Descripcion) VALUES 
    ('Tarjeta de Crédito', 'Pago mediante tarjeta de crédito'),
    ('Transferencia Bancaria', 'Pago mediante transferencia bancaria'),
    ('Efectivo', 'Pago en efectivo en el centro de ejercicio');
    
SELECT * FROM FormaPago;

INSERT INTO Pagos (IdCliente, IdPlan, IdFormaPago, Monto, FechaPago, EstadoPago)VALUES 
    (1, 1, 1, 500.00, '2024-10-01 10:00:00', TRUE),   
    (2, 2, 2, 1000.00, '2024-09-15 12:00:00', TRUE),  
    (3, 1, 3, 500.00, '2024-10-05 15:00:00', FALSE),  
    (1, 3, 1, 5000.00, '2024-10-10 09:30:00', TRUE),  
    (2, 1, 2, 500.00, '2024-08-20 11:00:00', TRUE);  
    
SELECT * FROM Pagos;