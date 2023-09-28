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

/*	SUCURSAL NORTE*/
/*	VENDEDORES*/


INSERT INTO reg_empleado.Empleado VALUES ('2253','Cristiano','Ronaldo','02-05-1985',007,1,35500,2);
INSERT INTO reg_empleado.Empleado VALUES ('2254','Jose','Calderon','03-05-1989',71554,1,2500,2), 
('2255','Javier','Gonzales','14-05-1998',45678,1,2800,2),
('2256','Rigo','Tovar','15-09-1999',68554,1,2500,2), 
('2257','Monica','LaFuente','08-05-1996',10554,1,2600,2),
('2258','Alicia','De Leon','15-03-2001',70554,1,2500,2);

/*INVENTARIO*/
INSERT INTO reg_empleado.Empleado VALUES ('2864','Ramon','Calderon','03-05-1995',68554,1,2500,4), 
('2605','Armando','Mendoza','14-10-1990',48978,1,2800,4),
('2996','Ringo','Martinez','05-09-1999',68104,1,2500,4), 
('2887','Estrella','Lopez','18-05-1999',95405,1,2600,4);

/*BODEGA*/
INSERT INTO reg_empleado.Empleado VALUES
('2901', 'Cristian', 'Nodal', '15-06-1998',77615,1,2900,3);

