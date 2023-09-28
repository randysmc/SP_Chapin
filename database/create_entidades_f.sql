INSERT INTO reg_empresa.Sucursal VALUES (1, 'Central', 100);
INSERT INTO reg_empresa.Sucursal VALUES (2,'Norte',75),(3,'Sur', 75);

SELECT * FROM reg_empresa.Sucursal;

INSERT INTO reg_producto.Categoria_Producto VALUES(1, 'Alimento');
INSERT INTO reg_producto.Categoria_Producto VALUES(2, 'Bebida');
INSERT INTO reg_producto.Categoria_Producto VALUES(3, 'Dormitorio');
INSERT INTO reg_producto.Categoria_Producto VALUES(4,'Electrodomesticos'),
            (5, 'Ferreteria'),(6, 'Cocina'),(7, 'Linea Blanca'), (8, 'Jugueteria'), 
            (9, 'Muebles'), (10, 'Deportes'), (11, 'Limpieza');

SELECT * FROM reg_producto.Categoria_Producto;

\dt SCHEMA.*

INSERT INTO reg_empleado.Rol_Empleado VALUES(1, 'Administrador');
INSERT INTO reg_empleado.Rol_Empleado VALUES(2, 'Cajero'), (3, 'Bodega'), (4, 'Inventario');

SELECT * FROM reg_empleado.Rol_Empleado;

INSERT INTO reg_cliente.Cliente VALUES('CF', 'Pedro', 'Dos Santos', 'Quetzaltenango', 478454);

SELECT * FROM reg_cliente.Cliente;

INSERT INTO reg_empresa.Tarjeta VALUES (1,'Comun', 5);
INSERT INTO reg_empresa.Tarjeta VALUES (2, 'Oro', 10);
INSERT INTO reg_empresa.Tarjeta VALUES (3,'Platino', 20);
INSERT INTO reg_empresa.Tarjeta VALUES (4,'Diamante', 30);

SELECT * FROM reg_empresa.Tarjeta;

