USE CentroEjercicio;

DROP PROCEDURE IF EXISTS CancelarCita;

DELIMITER //
CREATE PROCEDURE CancelarCita(
    IN vIdCliente INT,
    IN vIdClaseProgramada INT
)
BEGIN
    DECLARE vFechaHora DATETIME;
    DECLARE vExiste INT;
    

    SELECT COUNT(*) INTO vExiste
    FROM ClaseCliente
    WHERE IdCliente = vIdCliente AND IdClaseProgramada = vIdClaseProgramada;
    
    IF vExiste = 0 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Usted no está inscrito en esta clase';
    ELSE
        SELECT FechaHora INTO vFechaHora
        FROM Clases
        WHERE IdClaseProgramada = vIdClaseProgramada;
        
        IF vFechaHora < NOW() THEN
            SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Ya ha ocurrido esta clase';
        ELSE
            DELETE FROM ClaseCliente
            WHERE IdCliente = vIdCliente AND IdClaseProgramada = vIdClaseProgramada;
            
            SELECT 'Inscripción cancelada' AS Mensaje;
        END IF;
    END IF;
END //
DELIMITER ;



-- Ejemplos de cancelación
CALL CancelarCita(2, 5);
CALL CancelarCita(2, 2);
CALL CancelarCita(2, 9);