 ***************************************************
      * COBOL Stored Procedure SAMPLE.COBSAMP
      * @param Action
      * @param City
      * @param Country
      * @param Response
      ***************************************************
       IDENTIFICATION DIVISION.
       PROGRAM-ID. COBSAMP.
       ENVIRONMENT DIVISION.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
            EXEC SQL INCLUDE SQLCA END-EXEC.
       01 Sqlcode-Pic PIC +++999 USAGE DISPLAY.
       LINKAGE SECTION.
       01 Action.
            49 VAR-LEN  PIC S9(4)  USAGE BINARY.
            49 VAR-TEXT PIC X9(8)  USAGE DISPLAY.
       01 City.
            49 VAR-LEN  PIC S9(4)  USAGE BINARY.
            49 VAR-TEXT PIC X9(32) USAGE DISPLAY.
       01 Country.
            49 VAR-LEN  PIC S9(4)  USAGE BINARY.
            49 VAR-TEXT PIC X9(32) USAGE DISPLAY.
       01 Response.
            49 VAR-LEN  PIC S9(4)  USAGE BINARY.
            49 VAR-TEXT PIC X9(80) USAGE DISPLAY.
       PROCEDURE DIVISION USING
            Action
            City
            Country
            Response.
            Move Function Upper-case(VAR-TEXT of Action)
              to VAR-TEXT of Action
            Evaluate VAR-TEXT of Action(1:VAR-LEN of Action)
              When 'S'
              When 'SELECT'
                Evaluate true also true
                  When VAR-LEN of City = 0 also VAR-LEN of Country = 0
                    EXEC SQL
                      DECLARE C1 CURSOR WITH RETURN WITH HOLD FOR
                        SELECT * FROM SAMPLE.CITYTABLE
                    END-EXEC
                    EXEC SQL
                      OPEN C1
                    END-EXEC
                  When VAR-LEN of City = 0 also VAR-LEN of Country > 0
                    EXEC SQL
                      DECLARE C2 CURSOR WITH RETURN WITH HOLD FOR
                        SELECT * FROM SAMPLE.CITYTABLE
                          WHERE COUNTRY=:COUNTRY
                    END-EXEC
                    EXEC SQL
                      OPEN C2
                    END-EXEC
                  When VAR-LEN of City > 0 also VAR-LEN of Country = 0
                    EXEC SQL
                      DECLARE C3 CURSOR WITH RETURN WITH HOLD FOR
                        SELECT * FROM SAMPLE.CITYTABLE
                          WHERE CITY=:CITY
                    END-EXEC
                    EXEC SQL
                      OPEN C3
                    END-EXEC
                  When Other
                    EXEC SQL
                      DECLARE C4 CURSOR WITH RETURN WITH HOLD FOR
                        SELECT * FROM SAMPLE.CITYTABLE
                          WHERE CITY=:CITY AND COUNTRY=:COUNTRY
                    END-EXEC
                    EXEC SQL
                      OPEN C4
                    END-EXEC
                End-Evaluate
                If Sqlcode = 0 then
                  String 'Select successful'
                    delimited by Size into VAR-TEXT of Response
                Else
                  Move SQLCode to SQLCode-Pic
                  String 'Select unsuccessful: Sqlcode ' Sqlcode-Pic
                    delimited by Size into VAR-TEXT of Response
                End-If
              When 'I'
              When 'INSERT'
                Evaluate true also true
                  When VAR-LEN of City = 0 also VAR-LEN of Country = 0
                    String 'Insert unsuccessful: '
                           'City and Country not specified'
                      delimited by Size into VAR-TEXT of Response
                  When VAR-LEN of City = 0 also VAR-LEN of Country > 0
                    String 'Insert unsuccessful: City not specified'
                      delimited by Size into VAR-TEXT of Response
                  When VAR-LEN of City > 0 also VAR-LEN of Country = 0
                    String 'Insert unsuccessful: Country not specified'
                      delimited by Size into VAR-TEXT of Response
                  When Other
                    EXEC SQL
                      INSERT INTO SAMPLE.CITYTABLE
                        (CITY, COUNTRY) VALUES (:CITY, :COUNTRY)
                    END-EXEC
                    If Sqlcode = 0 then
                      String 'Insert successful'
                        delimited by Size into VAR-TEXT of Response
                    Else
                      Move SQLCode to SQLCode-Pic
                      String 'Insert unsuccessful: Sqlcode ' Sqlcode-Pic
                        delimited by Size into VAR-TEXT of Response
                    End-If
                End-Evaluate
              When 'D'
              When 'DELETE'
                Evaluate true also true
                  When VAR-LEN of City = 0 also VAR-LEN of Country = 0
                    String 'Delete unsuccessful: '
                           'City and Country not specified'
                      delimited by Size into VAR-TEXT of Response
                  When VAR-LEN of City = 0 also VAR-LEN of Country > 0
                    String 'Delete unsuccessful: City not specified'
                      delimited by Size into VAR-TEXT of Response
                  When VAR-LEN of City > 0 also VAR-LEN of Country = 0
                    String 'Delete unsuccessful: Country not specified'
                      delimited by Size into VAR-TEXT of Response
                  When Other
                    EXEC SQL
                      DELETE FROM SAMPLE.CITYTABLE
                        WHERE CITY=:CITY AND COUNTRY=:COUNTRY
                    END-EXEC
                    If Sqlcode = 0 then
                      String 'Delete successful'
                        delimited by Size into VAR-TEXT of Response
                    Else
                      Move SQLCode to SQLCode-Pic
                      String 'Delete unsuccessful: Sqlcode ' Sqlcode-Pic
                        delimited by Size into VAR-TEXT of Response
                    End-If
                End-Evaluate
              When Other
                String 'Action "'
                       VAR-TEXT of Action(1:VAR-LEN of Action)
                       '" not supported'
                  delimited by Size into VAR-TEXT of Response
            End-Evaluate.
            Inspect VAR-TEXT of Response tallying VAR-LEN of Response
              for characters before initial x'00'
            GOBACK.