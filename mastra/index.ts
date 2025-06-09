import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore } from "@mastra/libsql";
import { VercelDeployer } from "@mastra/deployer-vercel";

import { weatherAgent } from "./agents/weather-agent";

export const mastra = new Mastra({
  agents: { weatherAgent },
  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: ":memory:"
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info"
  }),
  deployer: new VercelDeployer({
    teamSlug: "paulie-scanlons-projects",
    projectName: "test-with-next-vercel-deploy",
    token: "zNrh9r6fWELjUqQdIQ5DwMck"
  })
});
