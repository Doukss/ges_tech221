import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Gestion TECH221 API",
      version: "1.0.0",
      description:
        "API pour gérer les Projets, Affectations, Employés et Départements",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Serveur local",
      },
    ],
    components: {
      schemas: {
        Departement: {
          type: "object",
          required: ["code", "libelle"],
          properties: {
            id: {
              type: "integer",
              description: "ID du département",
            },
            code: {
              type: "string",
              description: "Code du département",
              example: "DSI",
            },
            libelle: {
              type: "string",
              description: "Libellé du département",
              example: "Direction des Systèmes d'Information",
            },
            estArchive: {
              type: "boolean",
              description: "Statut d'archivage",
              default: false,
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        Employe: {
          type: "object",
          required: ["prenom", "nom", "email"],
          properties: {
            id: {
              type: "integer",
              description: "ID de l'employé",
            },
            prenom: {
              type: "string",
              description: "Prénom de l'employé",
              example: "John",
            },
            nom: {
              type: "string",
              description: "Nom de l'employé",
              example: "Doe",
            },
            email: {
              type: "string",
              format: "email",
              description: "Email de l'employé",
              example: "john.doe@example.com",
            },
            telephone: {
              type: "string",
              description: "Téléphone de l'employé",
              example: "771234567",
            },
            departementId: {
              type: "integer",
              description: "ID du département",
              example: 1,
            },
            estArchive: {
              type: "boolean",
              description: "Statut d'archivage",
              default: false,
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        Projet: {
          type: "object",
          required: ["nom", "dateDebut"],
          properties: {
            id: {
              type: "integer",
              description: "ID du projet",
            },
            nom: {
              type: "string",
              description: "Nom du projet",
              example: "Projet ERP",
            },
            description: {
              type: "string",
              description: "Description du projet",
              example: "Implémentation d'un système ERP",
            },
            dateDebut: {
              type: "string",
              format: "date",
              description: "Date de début du projet",
              example: "2026-03-01",
            },
            dateFin: {
              type: "string",
              format: "date",
              description: "Date de fin du projet",
              example: "2026-12-01",
            },
            statut: {
              type: "string",
              enum: ["BROUILLON", "EN_COURS", "TERMINE"],
              description: "Statut du projet",
              default: "BROUILLON",
            },
            estArchive: {
              type: "boolean",
              description: "Statut d'archivage",
              default: false,
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        Affectation: {
          type: "object",
          required: ["employeId", "projetId", "role", "dateAffectation"],
          properties: {
            id: {
              type: "integer",
              description: "ID de l'affectation",
            },
            employeId: {
              type: "integer",
              description: "ID de l'employé",
              example: 1,
            },
            projetId: {
              type: "integer",
              description: "ID du projet",
              example: 1,
            },
            role: {
              type: "string",
              description: "Rôle de l'employé dans le projet",
              example: "Développeur Backend",
            },
            dateAffectation: {
              type: "string",
              format: "date",
              description: "Date de l'affectation",
              example: "2026-03-05",
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Message d'erreur",
            },
            details: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  field: {
                    type: "string",
                  },
                  message: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
      responses: {
        BadRequest: {
          description: "Erreur de validation des données",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
              example: {
                message: "Validation error",
                details: [
                  {
                    field: "nom",
                    message: "Nom obligatoire",
                  },
                ],
              },
            },
          },
        },
        NotFound: {
          description: "Ressource non trouvée",
          content: {
            "application/json": {
              example: {
                message: "Ressource non trouvée",
              },
            },
          },
        },
        InternalServerError: {
          description: "Erreur interne du serveur",
          content: {
            "application/json": {
              example: {
                message: "Erreur interne serveur",
              },
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      customCss: `
        .topbar { 
          display: none 
        }
      `,
      customSiteTitle: "Gestion TECH221 API",
      customfavIcon: "/favicon.ico",
    }),
  );
};
