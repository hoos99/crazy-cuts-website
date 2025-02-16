import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from the public directory
  app.use('/api/static', express.static(path.join(process.cwd(), 'public')));

  const httpServer = createServer(app);
  return httpServer;
}
