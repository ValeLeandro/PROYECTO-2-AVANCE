create database Kavaleza
use Kavaleza

CREATE TABLE Usuarios(
    Cedula INT PRIMARY KEY NOT NULL,
    NombreCliente VARCHAR(50) NOT NULL,
    ApellidosCliente VARCHAR(100),
    Email VARCHAR(150) NOT NULL,
    Telefono VARCHAR(15),
	Direccion VARCHAR(255),
	Fecha_Registro DATETIME DEFAULT GETDATE(),
	TipoUsuario VARCHAR(10) NOT NULL CHECK (TipoUsuario IN ('administrador', 'cliente'))
);

CREATE TABLE Pedidos (
    id_pedido INT IDENTITY(1,1) PRIMARY KEY,
    id_usuario INT NOT NULL,
    fechaentrega DATE NOT NULL,
    Totalpedido DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY ( id_usuario) REFERENCES Usuarios(Cedula)
);

CREATE TABLE Detalle_Pedido (
    id INT IDENTITY(1,1) PRIMARY KEY,
    id_pedido INT,
    id_Producto INT,
    cantidad INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
    FOREIGN KEY (id_Producto) REFERENCES Productos(id_Producto)
);

CREATE TABLE Pago (
    Id_pago INT IDENTITY(1,1) PRIMARY KEY,
    Monto DECIMAL(10, 2) NOT NULL,
    Fecha_compra DATE NOT NULL,
    Metodo_pago VARCHAR(100) NOT NULL,
    id_pedido INT,
    FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
	ID_Metodo_Pago INT,
	FOREIGN KEY (ID_Metodo_Pago) REFERENCES Metodos_Pago(ID_Metodo_Pago)
);

CREATE TABLE Metodos_Pago (
    ID_Metodo_Pago INT PRIMARY KEY IDENTITY,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(255)
);



CREATE TABLE Productos (
    id_Producto INT IDENTITY(1,1) PRIMARY KEY,
	Foto VARBINARY(MAX),
	Descuento VARCHAR(50),
    NombreProducto VARCHAR(150) NOT NULL,
    Precio DECIMAL(10, 2) NOT NULL,
	Categoria VARCHAR(100) NOT NULL CHECK (Categoria IN ('Vestidos', 'Zapatos', 'Blusas','Pantalones')),
	Foto2 VARBINARY(MAX)
);

INSERT INTO Productos(id_Producto,Foto,Descuento,NombreProducto,Precio,Categoria)
VALUES 
(1, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/zapato1.jfif', SINGLE_BLOB) AS Foto), 
    '-13%', 'Tacones negros con detalles dorados', 20, 'Zapatos'),
(2, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/zapato2.jfif', SINGLE_BLOB) AS Foto), 
    '5%', 'Tacones rosados pastel con plataforma', 35, 'Zapatos'),
(3, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/zapato3.jfif', SINGLE_BLOB) AS Foto), 
    '15%', 'Tacones negros elegantes', 35, 'Zapatos'),
(4, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/zapato4.jfif', SINGLE_BLOB) AS Foto), 
    '15%', 'Tacones plateados con brillo', 35, 'Zapatos'),
(5, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/zapato5.jfif', SINGLE_BLOB) AS Foto), 
    '10%', 'Zapatos negros con plataforma', 35, 'Zapatos'),
(6, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/zapato6.jfif', SINGLE_BLOB) AS Foto), 
    '10%', 'Tacones blancos con detalles plateados', 35, 'Zapatos'),
(7, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/zapato7.jfif', SINGLE_BLOB) AS Foto), 
    '10%', 'Tacones negros con plataforma', 35, 'Zapatos'),
(8, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/zapato8.jfif', SINGLE_BLOB) AS Foto), 
    '10%', 'Tacones rojos', 35, 'Zapatos'),
(9, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/zapato9.jfif', SINGLE_BLOB) AS Foto), 
    '10%', 'Tacones blancos con detalle de tela', 35, 'Zapatos'),
(10, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/zapato10.jfif', SINGLE_BLOB) AS Foto), 
    '10%', 'Zapato plateado con detalles brillantes', 35, 'Zapatos'),
(11, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/zapato11.jpg', SINGLE_BLOB) AS Foto), 
    '13%', 'Tacones plateados', 35, 'Zapatos'),
(12, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/zapato12.jpg', SINGLE_BLOB) AS Foto), 
    '5%', 'Tacones rosados', 35, 'Zapatos');

INSERT INTO Productos(id_Producto,Foto,Descuento,NombreProducto,Precio,Categoria)
VALUES 
(1, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/blusa1.jpg', SINGLE_BLOB) AS Foto), 
    '20%', 'Blusa blanca con mangas acampanadas', 20, 'Blusas'),
(2, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/blusa2.jpg', SINGLE_BLOB) AS Foto), 
    '5%', 'Blusa beige sin mangas', 30, 'Blusas'),
(3, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/blusa3.jpeg', SINGLE_BLOB) AS Foto), 
    '15%', 'Blusa Negra Asimétrica con Nudo', 28, 'Blusas'),
(4, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/blusa 4.jpg', SINGLE_BLOB) AS Foto), 
    '15%', 'Blusa Negra con Cuello Blanco Cuadrado', 25, 'Blusas'),
(5, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/blusa5.jpg', SINGLE_BLOB) AS Foto), 
    '10%', 'Blusa Polo Negra con Blanco', 35, 'Blusas'),
(6, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/blusa6.jpg', SINGLE_BLOB) AS Foto), 
    '13%', 'Blusa Blanca con Fruncido', 35, 'Blusas'),
(7, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/blusa7.jpg', SINGLE_BLOB) AS Foto), 
    '13%', 'Blusa Blanca Off-Shoulder', 20, 'Blusas'),
(8, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/blusa8.jpg', SINGLE_BLOB) AS Foto), 
    '10%', 'Blusa Negra Espalda Descubierta', 35, 'Blusas'),
(9, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/blusa9.jpg', SINGLE_BLOB) AS Foto), 
    '5%', 'Blusa Blanca con flores azules', 25, 'Blusas'),
(10, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/blusa10.jpg', SINGLE_BLOB) AS Foto), 
    '10%', 'Blusa Beige Asimétrica', 30, 'Blusas'),
(11, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/blusa11.jpg', SINGLE_BLOB) AS Foto), 
    '13%', 'Blusa Café Manga Larga con Nudo', 20, 'Blusas'),
(12, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/blusa12.jpg', SINGLE_BLOB) AS Foto), 
    '5%', 'Blusa Café con Encaje', 30, 'Blusas');

INSERT INTO Productos(id_Producto,Foto,Descuento,NombreProducto,Precio,Categoria)
VALUES
(1, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/vestido1azul.jpg', SINGLE_BLOB) AS Foto), 
    '20%', 'Vestido azul floreado', 20, 'Vestidos'),
(2, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/vestido2.jpg', SINGLE_BLOB) AS Foto), 
    '5%', 'Vestido vintage', 30, 'Vestidos'),
(3, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/vestido3.jpg', SINGLE_BLOB) AS Foto), 
    '15%', 'Vestido con rosas', 28, 'Vestidos'),
(4, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/vestido4.jpg', SINGLE_BLOB) AS Foto), 
    '15%', 'Vestido blanco elegante', 35, 'Vestidos'),
(5, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/vestido 5.jpg', SINGLE_BLOB) AS Foto), 
    '10%', 'Vestido claro largo', 35, 'Vestidos'),
(6, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/vestido6.jpg', SINGLE_BLOB) AS Foto), 
    '13%', 'Vestido con cerezas', 35, 'Vestidos'),
(7, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/vestido7.jpg', SINGLE_BLOB) AS Foto), 
    '13%', 'Vestido negro de tirantes', 29, 'Vestidos'),
(8, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/vestido8.jpg', SINGLE_BLOB) AS Foto), 
    '10%', 'Vestido cafe con espalda abierta', 35, 'Vestidos'),
(9, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/vestido9.jpg', SINGLE_BLOB) AS Foto), 
    '5%', 'Vestido verde', 25, 'Vestidos'),
(10, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/vestido10.jpg', SINGLE_BLOB) AS Foto), 
    '10%', 'Vestido celeste', 20, 'Vestidos'),
(11, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/vestido11.jpg', SINGLE_BLOB) AS Foto), 
    '13%', 'Vestido amarillo', 20, 'Vestidos'),
(12, 
    (SELECT * FROM OPENROWSET(BULK 'imagenes objetos/vestido12.jpg', SINGLE_BLOB) AS Foto), 
    '5%', 'Vestido beige elegante', 38, 'Vestidos');

CREATE TABLE Carrito (
    ID_Carrito INT PRIMARY KEY IDENTITY,
    ID_Usuario INT,
	FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(Cedula),
    ID_Producto INT,
	FOREIGN KEY( ID_Producto) REFERENCES Productos( id_Producto),
    Cantidad INT NOT NULL DEFAULT 1,
    Precio_Unitario DECIMAL(10, 2) NOT NULL,
    Fecha_Agregado DATETIME DEFAULT GETDATE()
);