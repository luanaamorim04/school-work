INSERT INTO "Empresa"."Departamento" VALUES (1, 'Competitive-Programming', NULL, TO_DATE('30/03/2020', 'dd/mm/yyyy'));
INSERT INTO "Empresa"."Departamento" VALUES (2, 'Graphs', NULL, TO_DATE('30/03/2020', 'dd/mm/yyyy'));
INSERT INTO "Empresa"."Departamento" VALUES (3, 'Dynamic-Programming', NULL, TO_DATE('30/03/2020', 'dd/mm/yyyy'));
INSERT INTO "Empresa"."Departamento" VALUES (4, 'Bitwise', NULL, TO_DATE('30/03/2020', 'dd/mm/yyyy'));
INSERT INTO "Empresa"."Departamento" VALUES (5, 'Begginer', NULL, TO_DATE('30/03/2020', 'dd/mm/yyyy'));

INSERT INTO "Empresa"."Empregado" VALUES (1, 'luana', TO_DATE('30/10/2004', 'dd/mm/yyyy'), 'rio de janeiro', 'feminino', 1000000, NULL, 1);
INSERT INTO "Empresa"."Empregado" VALUES (2, 'policarpo', TO_DATE('30/10/1997', 'dd/mm/yyyy'), 'minas', 'masculino', 70000000, 1, 1);
INSERT INTO "Empresa"."Empregado" VALUES (3, 'rangel', TO_DATE('30/10/1996', 'dd/mm/yyyy'), 'minas', 'masculino', 1000000, 2, 2);
INSERT INTO "Empresa"."Empregado" VALUES (4, 'pietra', TO_DATE('30/10/2004', 'dd/mm/yyyy'), 'brasilia', 'feminino', 1000000, 1, 3);
INSERT INTO "Empresa"."Empregado" VALUES (5, 'francisco', TO_DATE('30/10/1994', 'dd/mm/yyyy'), 'manaus', 'masculino', 1000000, 1, 4);

UPDATE "Empresa"."Departamento" SET matgerente = 1 WHERE coddep = 1;
UPDATE "Empresa"."Departamento" SET matgerente = 3 WHERE coddep = 2;
UPDATE "Empresa"."Departamento" SET matgerente = 1 WHERE coddep = 3;
UPDATE "Empresa"."Departamento" SET matgerente = 5 WHERE coddep = 4;
UPDATE "Empresa"."Departamento" SET matgerente = 4 WHERE coddep = 5;

INSERT INTO "Empresa"."Projeto" VALUES (2000, 'OBI', 'unicamp', 1);
INSERT INTO "Empresa"."Projeto" VALUES (2100, 'OBMEP', 'impa', 2);
INSERT INTO "Empresa"."Projeto" VALUES (2200, 'CIIC', 'online', 1);
INSERT INTO "Empresa"."Projeto" VALUES (2300, 'EGOI', 'turquia', 3);
INSERT INTO "Empresa"."Projeto" VALUES (2400, 'IOI', 'singapura', 1);

INSERT INTO "Empresa"."Alocacao" VALUES (1, 2000, 20);
INSERT INTO "Empresa"."Alocacao" VALUES (5, 2100, 15);
INSERT INTO "Empresa"."Alocacao" VALUES (2, 2200, 30);
INSERT INTO "Empresa"."Alocacao" VALUES (1, 2300, 30);
INSERT INTO "Empresa"."Alocacao" VALUES (1, 2400, 50);