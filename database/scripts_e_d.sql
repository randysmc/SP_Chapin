/*REGISTRO PRODUCTOS
1 alimento 2 bebida 3 dormitorio 4 electrodomesticos 5 ferreteria 6 cocina 7 linea blanca 8 jugueteria 9 muebles 10 deportes 11 limpieza
*/

INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Doritos', 5, 1);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Coca Cola Lata', 5, 2);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Almohada Algodon', 25, 3);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Martillo Taladro', 125, 4);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Vajilla Navidena', 100, 6);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Plancha ropa', 75, 7);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Carro Mario Bross', 250, 8);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Escritorio Metal', 400, 9);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Remera Leo Messi', 500, 10);

INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Pollo Horneado', 80, 1);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Botella Vino', 75, 2);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Edredon Rayo Mcqueen', 125, 3);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Microondas', 225, 4);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Pulidora', 200, 5);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Vajilla Navidena', 100, 6);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Vasos Cristal', 60, 6);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Lavadora LG', 7500, 7);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Juego de Cartas UNO', 100, 8);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Ropero Melamina', 4000, 9);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Playera del Xelaju MC', 500, 10);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Desinfectante liquido', 100, 11);



/*Registro Empresa Producto en Sucursal*/



/*Registro Empleados*/
/*1 Admin, 2 Vendedor, 3 Bodega, 4 Inventario*/
/*1 CENTRAL, 2 NORTE, 3 SUR*/

/*	SUCURSAL CENTRAL*/
/*	VENDEDORES CENTRAL*/


INSERT INTO reg_empleado.Empleado VALUES ('2253','Cristiano','Ronaldo','02-05-1985',007,1,35500,2);
INSERT INTO reg_empleado.Empleado VALUES ('2254','Jose','Calderon','03-05-1989',71554,1,2500,2), 
('2255','Javier','Gonzales','14-05-1998',45678,1,2800,2),
('2256','Rigo','Tovar','15-09-1999',68554,1,2500,2), 
('2257','Monica','LaFuente','08-05-1996',10554,1,2600,2),
('2258','Alicia','De Leon','15-03-2001',70554,1,2500,2);

/*INVENTARIO CENTRAL*/
INSERT INTO reg_empleado.Empleado VALUES ('2864','Ramon','Calderon','03-05-1995',68554,1,2500,4), 
('2605','Armando','Mendoza','14-10-1990',48978,1,2800,4),
('2996','Ringo','Martinez','05-09-1999',68104,1,2500,4), 
('2887','Estrella','Lopez','18-05-1999',95405,1,2600,4);

/*BODEGA CENTRAL*/
INSERT INTO reg_empleado.Empleado VALUES
('2901', 'Cristian', 'Nodal', '15-06-1998',77615,1,2900,3);


/*	SUCURSAL NORTE 2*/
/*	VENDEDORES*/
INSERT INTO reg_empleado.Empleado VALUES ('3253','Agustin','Amado','15-05-1984',71889,2,2500,2), 
('3254','Karla','Escobar','26-05-1989',57175,2,2500,2), 
('3255','Pablo','Gomez','24-04-1993',41094,2,2500,2),
('3256','Jaime','Toc','15-09-2000',41576,2,2500,2), 
('3257','Karin','Benzema','08-09-1992',59118,2,2500,2),
('3258','Maria','Perez','15-08-2003',77889,2,2500,2);


/*INVENTARIO*/
INSERT INTO reg_empleado.Empleado VALUES ('3864','Emilinao','Martinez','23-02-1991',55876,2,2400,4), 
('3865','Alejandra','Gutierrez','11-12-1998',48657,2,2400,4),
('3866','Mynor','Ovalle','02-06-1996',49562,2,2400,4), 
('3867','Luz','Maldonado','15-03-1996',42496,2,2400,4);

/*BODEGA*/
INSERT INTO reg_empleado.Empleado VALUES
('3901', 'Vicente', 'Garcia', '05-06-1990',40475,2,2800,3);

/*	SUCURSAL SUR 3*/
/*	VENDEDORES 2*/
INSERT INTO reg_empleado.Empleado VALUES 
('4223','Jorge','Negrete','16-09-1974',75645,3,2600,2), 
('4224','Alba','Estrada','12-04-1999',45790,3,2600,2), 
('4225','Maria','Gonzales','14-07-1998',41098,3,2600,2),
('4226','Jose','Tovar','15-10-2004',78945,3,2600,2), 
('4227','Karina','Ovalle','08-08-1991',49115,3,2600,2),
('4228','Margot','Morales','15-05-2000',78452,3,2600,2);


/*INVENTARIO 4*/
INSERT INTO reg_empleado.Empleado VALUES 
('4834','Emilia','Gomez','20-02-1994',57154,3,2400,4), 
('4835','Alejandro','Colom','11-11-1993',40557,3,2400,4),
('4836','Andrea','Rodas','08-08-1998',44562,3,2400,4), 
('4837','Ana','De Leon','25-03-1999',42620,3,2400,4);

/*BODEGA 3*/
INSERT INTO reg_empleado.Empleado VALUES
('4991', 'Alexander', 'Matias', '05-05-1999',50501,3,2800,3);

