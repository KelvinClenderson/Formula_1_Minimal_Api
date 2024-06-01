import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, { origin: "*" });

const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "Ferrari", base: "Maranello, Italy" },
  { id: 5, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 6, name: "AlphaTauri", base: "Faenza, Italy" },
  { id: 7, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 8, name: "Williams", base: "Grove, United Kingdom" },
  { id: 9, name: "Alfa Romeo", base: "Hinwil, Switzerland" },
  { id: 10, name: "Haas", base: "Kannapolis, United States" },
];

const drivers = [
  // Red Bull Racing
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Sergio Pérez", team: "Red Bull Racing" },

  // Mercedes
  { id: 3, name: "Lewis Hamilton", team: "Mercedes" },
  { id: 4, name: "George Russell", team: "Mercedes" },

  // McLaren
  { id: 5, name: "Lando Norris", team: "McLaren" },
  { id: 6, name: "Oscar Piastri", team: "McLaren" },

  // Ferrari
  { id: 7, name: "Charles Leclerc", team: "Ferrari" },
  { id: 8, name: "Carlos Sainz", team: "Ferrari" },

  // Alpine
  { id: 9, name: "Esteban Ocon", team: "Alpine" },
  { id: 10, name: "Pierre Gasly", team: "Alpine" },

  // AlphaTauri
  { id: 11, name: "Yuki Tsunoda", team: "AlphaTauri" },
  { id: 12, name: "Nyck de Vries", team: "AlphaTauri" },

  // Aston Martin
  { id: 13, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 14, name: "Lance Stroll", team: "Aston Martin" },

  // Williams
  { id: 15, name: "Alexander Albon", team: "Williams" },
  { id: 16, name: "Logan Sargeant", team: "Williams" },

  // Alfa Romeo
  { id: 17, name: "Valtteri Bottas", team: "Alfa Romeo" },
  { id: 18, name: "Zhou Guanyu", team: "Alfa Romeo" },

  // Haas
  { id: 19, name: "Kevin Magnussen", team: "Haas" },
  { id: 20, name: "Nico Hülkenberg", team: "Haas" },
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);
  return teams;
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return drivers;
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>(
  "/drivers/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Drive not found" };
    } else {
      response.type("application/json").code(200);
      return { driver };
    }
  }
);

server.listen({ port: 3333 }, () => {
  console.log("Server init");
});
function async(req: any, res: any) {
  throw new Error("Function not implemented.");
}
