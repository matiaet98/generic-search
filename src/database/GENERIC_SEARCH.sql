CREATE OR REPLACE PACKAGE GENERIC_SEARCH AS 

FUNCTION VIEW_EXISTS(P_VIEW_NAME IN VARCHAR2) RETURN BOOLEAN;
FUNCTION GET_SELECT_COLUMNS(P_VIEW_NAME IN VARCHAR2) RETURN VARCHAR2;
FUNCTION GET_FILTER_COLUMNS(P_VIEW_NAME IN VARCHAR2) RETURN VARCHAR2;
END GENERIC_SEARCH;
/


CREATE OR REPLACE PACKAGE BODY GENERIC_SEARCH AS

FUNCTION VIEW_EXISTS(P_VIEW_NAME IN VARCHAR2) RETURN BOOLEAN IS
--Chequea que exista la vista
V_EXISTE PLS_INTEGER;
BEGIN

  SELECT 1
  INTO V_EXISTE
  FROM GEN_SEARCH_PARAMS
  WHERE VIEW_NAME = P_VIEW_NAME
  AND ROWNUM = 1;
  
  RETURN TRUE;
  
  EXCEPTION 
  WHEN OTHERS THEN
    RETURN FALSE;

END VIEW_EXISTS;

FUNCTION GET_SELECT_COLUMNS(P_VIEW_NAME IN VARCHAR2) RETURN VARCHAR2 IS
--Devuelve un array con los campos que se pueden usar para armar la seccion de SELECT
V_RESPONSE VARCHAR2(32767) DEFAULT '';
VIEW_NOT_FOUND EXCEPTION;

BEGIN

IF(NOT VIEW_EXISTS(P_VIEW_NAME)) THEN
  RAISE VIEW_NOT_FOUND;
END IF;
  
--Inicializamos el ARRAY

V_RESPONSE := '[';
  
--Loopeamos para conseguir las columnas consultables

FOR RES IN (
  SELECT COLUMN_NAME,COLUMN_DISPLAY_NAME,COLUMN_TYPE
  FROM GEN_SEARCH_PARAMS
  WHERE VIEW_NAME = P_VIEW_NAME
  AND COLUMN_VISIBLE = 'S'
) LOOP
  
  V_RESPONSE := V_RESPONSE || 
  '{"value":"' || RES.COLUMN_NAME ||'",' ||
  '"text":"' || RES.COLUMN_DISPLAY_NAME ||'",' ||
  '"columnType":"' || RES.COLUMN_TYPE ||'"},';
  
END LOOP;
  
--Borro la ultima coma
V_RESPONSE := SUBSTR(V_RESPONSE,1,LENGTH(V_RESPONSE)-1);
  
V_RESPONSE := V_RESPONSE || ']';

RETURN V_RESPONSE;
  
EXCEPTION
WHEN VIEW_NOT_FOUND THEN
  RETURN '###La vista no existe';
WHEN OTHERS THEN
  RETURN '###Error general';
  
END GET_SELECT_COLUMNS;

FUNCTION GET_FILTER_COLUMNS(P_VIEW_NAME IN VARCHAR2) RETURN VARCHAR2 IS
--Devuelve un array con los campos que se pueden usar para armar la seccion de WHERE
VIEW_NOT_FOUND EXCEPTION;
V_RESPONSE VARCHAR2(32767);
BEGIN

IF(NOT VIEW_EXISTS(P_VIEW_NAME)) THEN
  RAISE VIEW_NOT_FOUND;
END IF;

V_RESPONSE := '[';

FOR RES IN (
  SELECT COLUMN_NAME,COLUMN_DISPLAY_NAME,COLUMN_TYPE,COLUMN_FILTER_TYPE
  FROM GEN_SEARCH_PARAMS
  WHERE VIEW_NAME = P_VIEW_NAME
  AND COLUMN_FILTRABLE = 'S'
) LOOP
  
  V_RESPONSE := V_RESPONSE || 
  '{"value":"' || RES.COLUMN_NAME ||'",' ||
  '"text":"' || RES.COLUMN_DISPLAY_NAME ||'",' ||
  '"columnType":"' || RES.COLUMN_TYPE ||'",' ||
  '"columnFilterType":"' || RES.COLUMN_FILTER_TYPE ||'"},';
  
END LOOP;

V_RESPONSE := SUBSTR(V_RESPONSE,1,LENGTH(V_RESPONSE)-1);
  
V_RESPONSE := V_RESPONSE || ']';

RETURN V_RESPONSE;
  
EXCEPTION
WHEN VIEW_NOT_FOUND THEN
  RETURN '###La vista no existe';
WHEN OTHERS THEN
  RETURN '###Error general';
END GET_FILTER_COLUMNS;

FUNCTION GET_OPERATION_COLUMNS(P_VIEW_NAME IN VARCHAR2) RETURN VARCHAR2 IS
--Devuelve un array con los campos que se pueden usar para armar la seccion de SELECT
V_RESPONSE VARCHAR2(32767) DEFAULT '';
VIEW_NOT_FOUND EXCEPTION;

BEGIN

IF(NOT VIEW_EXISTS(P_VIEW_NAME)) THEN
  RAISE VIEW_NOT_FOUND;
END IF;
  
--Inicializamos el ARRAY

V_RESPONSE := '[';
  
--Loopeamos para conseguir las columnas consultables

FOR RES IN (
  SELECT COLUMN_NAME,COLUMN_DISPLAY_NAME
  FROM GEN_SEARCH_PARAMS
  WHERE VIEW_NAME = P_VIEW_NAME
  AND COLUMN_OPERABLE = 'S'
) LOOP
  
  V_RESPONSE := V_RESPONSE || 
  '{"value":"' || RES.COLUMN_NAME ||'",' ||
  '"text":"' || RES.COLUMN_DISPLAY_NAME ||'"},';
  
END LOOP;
  
--Borro la ultima coma
V_RESPONSE := SUBSTR(V_RESPONSE,1,LENGTH(V_RESPONSE)-1);
  
V_RESPONSE := V_RESPONSE || ']';

RETURN V_RESPONSE;
  
EXCEPTION
WHEN VIEW_NOT_FOUND THEN
  RETURN '###La vista no existe';
WHEN OTHERS THEN
  RETURN '###Error general';
  
END GET_OPERATION_COLUMNS;

END GENERIC_SEARCH;
/
